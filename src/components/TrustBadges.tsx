import { Shield, Award, Clock, Truck, Leaf, Star } from 'lucide-react';

interface TrustBadgesProps {
  variant?: 'horizontal' | 'grid' | 'compact';
  showAll?: boolean;
}

const TrustBadges = ({ variant = 'horizontal', showAll = true }: TrustBadgesProps) => {
  const badges = [
    {
      icon: <Shield className="w-6 h-6" />,
      label: '100% Gluten-Free',
      sublabel: 'Dedicated Kitchen',
      color: 'text-green-600'
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: '8+ Years Trusted',
      sublabel: 'Since 2016',
      color: 'text-primary'
    },
    {
      icon: <Star className="w-6 h-6" />,
      label: 'Satisfaction Guarantee',
      sublabel: '100% Happy or We Fix It',
      color: 'text-yellow-500'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      label: 'Ships Nationwide',
      sublabel: 'Fresh to Your Door',
      color: 'text-blue-500'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: 'Ready in 3 Min',
      sublabel: 'Heat & Eat',
      color: 'text-orange-500'
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      label: 'Fresh Weekly',
      sublabel: 'Never Frozen',
      color: 'text-emerald-500'
    }
  ];

  const displayBadges = showAll ? badges : badges.slice(0, 4);

  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap justify-center gap-4 py-4">
        {displayBadges.slice(0, 4).map((badge, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <span className={badge.color}>{badge.icon}</span>
            <span className="font-medium">{badge.label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6">
        {displayBadges.map((badge, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center p-4 rounded-lg bg-card border"
          >
            <div className={`${badge.color} mb-2`}>{badge.icon}</div>
            <span className="font-semibold text-sm">{badge.label}</span>
            <span className="text-xs text-muted-foreground">{badge.sublabel}</span>
          </div>
        ))}
      </div>
    );
  }

  // Default horizontal variant
  return (
    <div className="w-full bg-muted/50 border-y overflow-x-auto">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-start md:justify-between items-center gap-4 md:gap-6 min-w-max md:min-w-0">
          {displayBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 flex-shrink-0">
              <div className={`${badge.color} flex-shrink-0`}>
                <span className="[&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">{badge.icon}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-xs md:text-sm leading-tight whitespace-nowrap">{badge.label}</span>
                <span className="text-[10px] md:text-xs text-muted-foreground leading-tight whitespace-nowrap">{badge.sublabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
