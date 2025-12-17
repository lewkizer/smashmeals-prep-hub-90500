import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';

interface Review {
  authorName: string;
  authorPhoto: string;
  rating: number;
  text: string;
  relativeTime: string;
}

interface GoogleReviewsData {
  businessName: string;
  overallRating: number;
  totalReviews: number;
  reviews: Review[];
}

const GoogleReviews = () => {
  const [data, setData] = useState<GoogleReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data: responseData, error: fetchError } = await supabase.functions.invoke('fetch-google-reviews');
        
        if (fetchError) {
          throw new Error(fetchError.message);
        }
        
        if (responseData.error) {
          throw new Error(responseData.error);
        }
        
        setData(responseData);
      } catch (err) {
        console.error('Error fetching Google reviews:', err);
        setError(err instanceof Error ? err.message : 'Failed to load reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-48 mx-auto mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return null; // Silently fail - the curated testimonials section will still show
  }

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold font-playfair mb-2">
          Google Reviews
        </h3>
        <div className="flex items-center justify-center gap-2 mb-2">
          {renderStars(Math.round(data.overallRating))}
          <span className="text-lg font-semibold">{data.overallRating.toFixed(1)}</span>
        </div>
        <p className="text-muted-foreground">
          Based on {data.totalReviews} reviews
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.reviews.slice(0, 6).map((review, index) => (
          <Card 
            key={index} 
            className="p-6 border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-elevated hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start gap-3 mb-3">
              {review.authorPhoto ? (
                <img 
                  src={review.authorPhoto} 
                  alt={review.authorName}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {review.authorName.charAt(0)}
                  </span>
                </div>
              )}
              <div className="flex-1">
                <p className="font-semibold text-sm">{review.authorName}</p>
                <p className="text-xs text-muted-foreground">{review.relativeTime}</p>
              </div>
            </div>
            
            {renderStars(review.rating)}
            
            <p className="mt-3 text-sm text-muted-foreground line-clamp-4">
              {review.text}
            </p>
          </Card>
        ))}
      </div>

      <div className="text-center mt-6">
        <a
          href="https://www.google.com/maps/place/?q=place_id:ChIJq6qqatIGXIgRPzxq5mBwMzQ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
            alt="Google" 
            className="h-5 w-auto"
          />
          <span>See all reviews on Google</span>
        </a>
      </div>
    </div>
  );
};

export default GoogleReviews;
