import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NewsletterSignupRequest {
  email: string;
  phone?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, phone }: NewsletterSignupRequest = await req.json();

    // Send notification to business owner
    await resend.emails.send({
      from: "SmashMeals <onboarding@resend.dev>",
      to: ["smashmealstri@gmail.com"],
      subject: "New Newsletter Subscriber!",
      html: `
        <h2>New Newsletter Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    // Send welcome email to subscriber
    await resend.emails.send({
      from: "SmashMeals <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to SmashMeals Weekly Menu!",
      html: `
        <h1>Welcome to SmashMeals!</h1>
        <p>Thank you for subscribing to our weekly menu updates.</p>
        <p>You'll receive our menu every Monday at 9 AM, plus exclusive promo codes and special offers!</p>
        <p><strong>Eat Healthy. Live Healthy. Love What You Eat.</strong></p>
        <p>Best,<br>The SmashMeals Team</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in notify-newsletter-signup:", error);
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
