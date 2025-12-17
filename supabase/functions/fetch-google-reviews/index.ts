import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_PLACES_API_KEY');
    if (!apiKey) {
      throw new Error('GOOGLE_PLACES_API_KEY is not configured');
    }

    // First, find the place by searching for the business name
    const searchQuery = 'SmashMeals 1917 Meadowview Pkwy Kingsport TN';
    const findPlaceUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(searchQuery)}&inputtype=textquery&fields=place_id,name&key=${apiKey}`;
    
    console.log('Searching for SmashMeals place ID...');
    
    const findResponse = await fetch(findPlaceUrl);
    const findData = await findResponse.json();
    
    if (findData.status !== 'OK' || !findData.candidates || findData.candidates.length === 0) {
      console.error('Could not find place:', findData.status, findData.error_message);
      throw new Error(`Could not find SmashMeals: ${findData.status}`);
    }
    
    const placeId = findData.candidates[0].place_id;
    console.log('Found Place ID:', placeId);

    // Now fetch place details including reviews
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;
    
    console.log('Fetching Google reviews for place:', placeId);
    
    const response = await fetch(detailsUrl);
    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('Google Places API error:', data.status, data.error_message);
      throw new Error(`Google Places API error: ${data.status} - ${data.error_message || 'Unknown error'}`);
    }

    const result = data.result;
    
    // Format the response
    const formattedResponse = {
      businessName: result.name,
      overallRating: result.rating,
      totalReviews: result.user_ratings_total,
      placeId: placeId,
      reviews: (result.reviews || []).map((review: any) => ({
        authorName: review.author_name,
        authorPhoto: review.profile_photo_url,
        rating: review.rating,
        text: review.text,
        relativeTime: review.relative_time_description,
        time: review.time,
      })),
    };

    console.log(`Successfully fetched ${formattedResponse.reviews.length} reviews for ${formattedResponse.businessName}`);

    return new Response(JSON.stringify(formattedResponse), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
