import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

if (!RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not configured in secrets");
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const newsletterSchema = z.object({
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
    .toLowerCase(),
  phone: z.string()
    .trim()
    .max(20, { message: "Phone number must be less than 20 characters" })
    .regex(/^[+]?[0-9\s.()-]*$/, { message: "Invalid phone number format" })
    .optional()
    .or(z.literal(''))
});

// Simple in-memory rate limiting
const recentRequests = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const requests = recentRequests.get(ip) || [];
  
  // Remove requests older than 1 minute
  const recentCount = requests.filter(t => now - t < 60000);
  recentRequests.set(ip, recentCount);
  
  // Allow max 5 requests per minute per IP
  if (recentCount.length >= 5) {
    return true;
  }
  
  // Track this request
  recentCount.push(now);
  recentRequests.set(ip, recentCount);
  
  return false;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
               req.headers.get('x-real-ip') || 
               'unknown';
    
    if (isRateLimited(ip)) {
      console.warn(`Rate limit exceeded for IP: ${ip}`);
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { 
          status: 429, 
          headers: { "Content-Type": "application/json", ...corsHeaders } 
        }
      );
    }

    // Input validation
    const body = await req.json();
    const result = newsletterSchema.safeParse(body);
    
    if (!result.success) {
      console.error('Validation failed:', result.error.issues);
      return new Response(
        JSON.stringify({ 
          error: 'Invalid input', 
          details: result.error.issues[0].message 
        }),
        { 
          status: 400, 
          headers: { "Content-Type": "application/json", ...corsHeaders } 
        }
      );
    }

    const { email, phone } = result.data;
    console.log("New newsletter signup:", { email, phone });

    // Send notification email using Resend
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "SmashMeals <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to SmashMeals Newsletter!",
        html: `
          <h1>Welcome to SmashMeals!</h1>
          <p>Thank you for subscribing to our newsletter.</p>
          <p>You'll be the first to know about:</p>
          <ul>
            <li>New menu items</li>
            <li>Special promotions</li>
            <li>Exclusive deals</li>
          </ul>
          <p>Best regards,<br>The SmashMeals Team</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const error = await emailResponse.text();
      console.error("Resend API error:", error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const emailData = await emailResponse.json();
    console.log("Email sent successfully:", emailData);

    return new Response(
      JSON.stringify({ success: true, emailData }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in notify-newsletter-signup function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
