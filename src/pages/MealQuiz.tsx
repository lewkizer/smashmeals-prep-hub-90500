import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Utensils, 
  Target, 
  Clock, 
  Flame,
  Dumbbell,
  Heart,
  Leaf,
  Users,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface QuizOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  description?: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  multiSelect?: boolean;
}

const questions: QuizQuestion[] = [
  {
    id: 'goal',
    question: "What's your primary health goal?",
    options: [
      { id: 'lose', label: 'Lose Weight', icon: <Target className="w-6 h-6" />, description: 'Shed pounds & feel lighter' },
      { id: 'maintain', label: 'Stay Healthy', icon: <Heart className="w-6 h-6" />, description: 'Maintain my current weight' },
      { id: 'muscle', label: 'Build Muscle', icon: <Dumbbell className="w-6 h-6" />, description: 'Gain strength & muscle' },
      { id: 'energy', label: 'More Energy', icon: <Zap className="w-6 h-6" />, description: 'Feel energized all day' },
    ]
  },
  {
    id: 'dietary',
    question: 'Any dietary preferences?',
    multiSelect: true,
    options: [
      { id: 'none', label: 'No Restrictions', icon: <Utensils className="w-6 h-6" /> },
      { id: 'lowcarb', label: 'Low Carb', icon: <Leaf className="w-6 h-6" /> },
      { id: 'highprotein', label: 'High Protein', icon: <Dumbbell className="w-6 h-6" /> },
      { id: 'balanced', label: 'Balanced', icon: <Heart className="w-6 h-6" /> },
    ]
  },
  {
    id: 'meals',
    question: 'How many meals do you need per week?',
    options: [
      { id: '5-7', label: '5-7 Meals', icon: <span className="text-2xl font-bold">5+</span>, description: 'A few days covered' },
      { id: '8-12', label: '8-12 Meals', icon: <span className="text-2xl font-bold">10</span>, description: 'Most of the week' },
      { id: '14+', label: '14+ Meals', icon: <span className="text-2xl font-bold">14</span>, description: 'Full week coverage' },
      { id: 'family', label: 'Family Pack', icon: <Users className="w-6 h-6" />, description: 'Feeding the whole crew' },
    ]
  },
  {
    id: 'time',
    question: 'How much time do you have for meals?',
    options: [
      { id: 'quick', label: 'Super Quick', icon: <Clock className="w-6 h-6" />, description: '3 minutes or less' },
      { id: 'moderate', label: 'Some Time', icon: <Flame className="w-6 h-6" />, description: '5-10 minutes is fine' },
      { id: 'flexible', label: 'Flexible', icon: <Heart className="w-6 h-6" />, description: 'I can make time' },
    ]
  }
];

const MealQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleSelect = (optionId: string) => {
    if (question.multiSelect) {
      const current = (answers[question.id] as string[]) || [];
      if (optionId === 'none') {
        setAnswers({ ...answers, [question.id]: ['none'] });
      } else {
        const filtered = current.filter(id => id !== 'none');
        if (filtered.includes(optionId)) {
          setAnswers({ ...answers, [question.id]: filtered.filter(id => id !== optionId) });
        } else {
          setAnswers({ ...answers, [question.id]: [...filtered, optionId] });
        }
      }
    } else {
      setAnswers({ ...answers, [question.id]: optionId });
    }
  };

  const isSelected = (optionId: string) => {
    const answer = answers[question.id];
    if (Array.isArray(answer)) {
      return answer.includes(optionId);
    }
    return answer === optionId;
  };

  const canContinue = () => {
    const answer = answers[question.id];
    if (Array.isArray(answer)) {
      return answer.length > 0;
    }
    return !!answer;
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getRecommendation = () => {
    const goal = answers.goal as string;
    const dietary = answers.dietary as string[] || [];
    
    let recommendation = {
      title: '',
      description: '',
      meals: [] as string[],
      alaCarte: {
        proteins: [] as { name: string; price: string }[],
        sides: [] as { name: string; price: string }[]
      },
      cta: ''
    };

    if (goal === 'lose' || dietary.includes('lowcarb')) {
      recommendation = {
        title: 'Low-Carb Power Meals',
        description: 'Based on your goals, we recommend our high-protein, lower-carb options that keep you satisfied while supporting weight loss.',
        meals: ['Grilled Steak Salad', 'Lemon Herb Chicken', 'Mexican Chicken Bowl', 'Zucchini Lasagna'],
        alaCarte: {
          proteins: [
            { name: 'Grilled Chicken Tenders (4oz)', price: '$4' },
            { name: 'Grilled Sirloin', price: 'from $6' },
            { name: 'Sauteed Shrimp', price: 'from $5' },
            { name: 'Filet Mignon', price: '$8' }
          ],
          sides: [
            { name: 'Steamed Broccoli (4oz)', price: '$3' },
            { name: 'Sauteed Zucchini (4oz)', price: '$3' },
            { name: 'Roasted Brussel Sprouts', price: '$3' },
            { name: 'Steamed Green Beans (4oz)', price: '$3' }
          ]
        },
        cta: 'These meals average 35g+ protein and under 25g carbs!'
      };
    } else if (goal === 'muscle' || dietary.includes('highprotein')) {
      recommendation = {
        title: 'Muscle-Building Meals',
        description: 'For building muscle, you need serious protein. Our high-protein meals deliver 40g+ per serving to fuel your gains.',
        meals: ['Filet Mignon Plate', 'BBQ Chicken Mac & Cheese', 'Grilled Steak & Potato', 'Shrimp & Cheese Grits'],
        alaCarte: {
          proteins: [
            { name: 'Filet Mignon', price: '$8' },
            { name: 'Grilled Sirloin', price: 'from $6' },
            { name: 'Beef Brisket', price: 'from $6' },
            { name: 'Smoked Rack of Ribs', price: '$28' }
          ],
          sides: [
            { name: 'Scrambled Eggs (5oz)', price: '$4' },
            { name: 'Steamed Jasmine Rice', price: 'from $3' },
            { name: 'Roasted Russet Potatoes (4oz)', price: '$4' },
            { name: 'Mac & Cheese', price: 'from $4' }
          ]
        },
        cta: 'Perfect for post-workout recovery and muscle growth!'
      };
    } else if (goal === 'energy') {
      recommendation = {
        title: 'Energy-Boosting Meals',
        description: 'Balanced macros with complex carbs and lean proteins to keep your energy steady throughout the day.',
        meals: ['Sweet Potato Hash', 'Honey Glazed Salmon', 'Arroz con Pollo', 'Blueberry Protein Oats'],
        alaCarte: {
          proteins: [
            { name: 'Grilled Chicken', price: 'from $4' },
            { name: 'Smoked Chicken', price: 'from $5' },
            { name: 'Pork Tenderloin', price: 'from $5' },
            { name: 'Hard Boiled Eggs (3)', price: '$4' }
          ],
          sides: [
            { name: 'Roasted Sweet Potatoes (4oz)', price: '$4' },
            { name: 'Mashed Sweet Potatoes (5oz)', price: '$3' },
            { name: 'Butternut Squash (4oz)', price: '$4' },
            { name: 'Steamed Jasmine Rice', price: 'from $3' }
          ]
        },
        cta: 'Fuel your day without the crash!'
      };
    } else {
      recommendation = {
        title: 'Balanced Meal Plan',
        description: 'A perfect mix of proteins, carbs, and healthy fats to maintain your health and enjoy delicious variety.',
        meals: ['Shrimp & Cheese Grits', 'Mexican Chicken Bowl', 'Stuffed Pork Loin', 'Greek Yogurt Parfait'],
        alaCarte: {
          proteins: [
            { name: 'Pulled Pork', price: 'from $5' },
            { name: 'Smoked Chicken Wings (12pc)', price: '$20' },
            { name: 'Classic Chicken Salad', price: 'from $5' },
            { name: 'Buffalo Chicken Salad', price: 'from $6' }
          ],
          sides: [
            { name: 'Toasted Corn', price: '$4' },
            { name: 'Steamed Carrots (4oz)', price: '$4' },
            { name: 'Apple Wood Smoked Bacon (4 slices)', price: '$4.75' },
            { name: 'Mac & Cheese', price: 'from $4' }
          ]
        },
        cta: 'Something for every craving, every day!'
      };
    }

    return recommendation;
  };

  if (showResults) {
    const rec = getRecommendation();
    
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Your Personalized Meal Plan | SmashMeals</title>
        </Helmet>
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            
            <h1 className="text-4xl font-bold mb-4">We Found Your Perfect Match!</h1>
            <p className="text-xl text-muted-foreground mb-8">{rec.title}</p>
            
            <Card className="mb-6">
              <CardContent className="pt-6">
                <p className="text-lg mb-6">{rec.description}</p>
                
                <h3 className="font-semibold mb-4">Recommended Complete Meals:</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {rec.meals.map((meal) => (
                    <div key={meal} className="p-3 rounded-lg bg-primary/5 text-sm font-medium">
                      {meal}
                    </div>
                  ))}
                </div>
                
                <p className="text-primary font-medium">{rec.cta}</p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Utensils className="w-5 h-5" />
                  Build Your Own - A La Carte
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Mix and match proteins and sides to create your perfect custom meal!
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-sm mb-3 text-primary">Proteins</h4>
                    <div className="space-y-2">
                      {rec.alaCarte.proteins.map((item) => (
                        <div key={item.name} className="flex justify-between items-center text-sm p-2 rounded bg-muted/50">
                          <span>{item.name}</span>
                          <span className="font-medium text-primary">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-3 text-primary">Sides</h4>
                    <div className="space-y-2">
                      {rec.alaCarte.sides.map((item) => (
                        <div key={item.name} className="flex justify-between items-center text-sm p-2 rounded bg-muted/50">
                          <span>{item.name}</span>
                          <span className="font-medium text-primary">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button asChild className="flex-1" size="lg">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  Order Now - This Week's Menu
                </a>
              </Button>
              <Button variant="outline" onClick={() => navigate('/menu')} className="flex-1">
                Browse Full Menu
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> 100% Gluten-Free
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Fresh Weekly
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Ships Nationwide
              </span>
            </div>
            
            <Button 
              variant="ghost" 
              className="mt-6"
              onClick={() => { setCurrentQuestion(0); setAnswers({}); setShowResults(false); }}
            >
              Retake Quiz
            </Button>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Find Your Perfect Meals | SmashMeals Quiz</title>
        <meta name="description" content="Take our quick quiz to find the perfect SmashMeals for your goals, dietary preferences, and lifestyle. Get personalized meal recommendations in 60 seconds!" />
        <link rel="canonical" href="https://www.smashmeals.com/meal-quiz" />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <h1 className="text-3xl font-bold text-center mb-8">{question.question}</h1>
          
          {question.multiSelect && (
            <p className="text-center text-muted-foreground mb-6">Select all that apply</p>
          )}

          <div className="grid grid-cols-2 gap-4 mb-8">
            {question.options.map((option) => (
              <Card 
                key={option.id}
                className={`cursor-pointer transition-all hover:border-primary ${
                  isSelected(option.id) ? 'border-primary bg-primary/5 ring-2 ring-primary' : ''
                }`}
                onClick={() => handleSelect(option.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 ${
                    isSelected(option.id) ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    {option.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{option.label}</h3>
                  {option.description && (
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex gap-4">
            {currentQuestion > 0 && (
              <Button 
                variant="outline" 
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="flex-1"
              >
                Back
              </Button>
            )}
            <Button 
              onClick={handleNext}
              disabled={!canContinue()}
              className="flex-1"
              size="lg"
            >
              {currentQuestion === questions.length - 1 ? 'See My Results' : 'Continue'}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MealQuiz;
