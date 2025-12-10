import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, Target, Flame, Dumbbell, Scale } from 'lucide-react';

const MacroCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    activityLevel: 'moderate',
    goal: 'maintain'
  });
  const [results, setResults] = useState<{
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  } | null>(null);

  const activityMultipliers: Record<string, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9
  };

  const goalMultipliers: Record<string, number> = {
    lose: 0.8,
    maintain: 1,
    gain: 1.15
  };

  const calculateMacros = () => {
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const age = parseInt(formData.age);

    // Mifflin-St Jeor Equation
    let bmr: number;
    if (formData.gender === 'male') {
      bmr = 10 * (weight * 0.453592) + 6.25 * (height * 2.54) - 5 * age + 5;
    } else {
      bmr = 10 * (weight * 0.453592) + 6.25 * (height * 2.54) - 5 * age - 161;
    }

    const tdee = bmr * activityMultipliers[formData.activityLevel];
    const targetCalories = Math.round(tdee * goalMultipliers[formData.goal]);

    // Macro split based on goal
    let proteinRatio: number, carbRatio: number, fatRatio: number;
    
    if (formData.goal === 'lose') {
      proteinRatio = 0.35;
      carbRatio = 0.35;
      fatRatio = 0.30;
    } else if (formData.goal === 'gain') {
      proteinRatio = 0.30;
      carbRatio = 0.45;
      fatRatio = 0.25;
    } else {
      proteinRatio = 0.30;
      carbRatio = 0.40;
      fatRatio = 0.30;
    }

    setResults({
      calories: targetCalories,
      protein: Math.round((targetCalories * proteinRatio) / 4),
      carbs: Math.round((targetCalories * carbRatio) / 4),
      fat: Math.round((targetCalories * fatRatio) / 9)
    });
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Free Macro Calculator | SmashMeals - Calculate Your Daily Macros</title>
        <meta name="description" content="Use our free macro calculator to find your ideal daily calories, protein, carbs, and fat. Get personalized meal recommendations from SmashMeals." />
        <link rel="canonical" href="https://www.smashmeals.com/macro-calculator" />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Calculator className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Free Macro Calculator</h1>
            <p className="text-muted-foreground text-lg">
              Calculate your ideal daily macros and find SmashMeals that fit your goals
            </p>
          </div>

          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5" />
                  Step 1: Your Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="25"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <RadioGroup
                      value={formData.gender}
                      onValueChange={(value) => setFormData({ ...formData, gender: value })}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (lbs)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="160"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (inches)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="68"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    />
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => setStep(2)}
                  disabled={!formData.age || !formData.weight || !formData.height}
                >
                  Continue
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Step 2: Your Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Activity Level</Label>
                  <Select
                    value={formData.activityLevel}
                    onValueChange={(value) => setFormData({ ...formData, activityLevel: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary (desk job, little exercise)</SelectItem>
                      <SelectItem value="light">Light (1-3 days/week)</SelectItem>
                      <SelectItem value="moderate">Moderate (3-5 days/week)</SelectItem>
                      <SelectItem value="active">Active (6-7 days/week)</SelectItem>
                      <SelectItem value="veryActive">Very Active (athlete, physical job)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Goal</Label>
                  <RadioGroup
                    value={formData.goal}
                    onValueChange={(value) => setFormData({ ...formData, goal: value })}
                    className="grid grid-cols-3 gap-4"
                  >
                    <div className="relative">
                      <RadioGroupItem value="lose" id="lose" className="peer sr-only" />
                      <Label
                        htmlFor="lose"
                        className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary cursor-pointer"
                      >
                        <Scale className="w-6 h-6 mb-2" />
                        <span className="font-medium">Lose Weight</span>
                      </Label>
                    </div>
                    <div className="relative">
                      <RadioGroupItem value="maintain" id="maintain" className="peer sr-only" />
                      <Label
                        htmlFor="maintain"
                        className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary cursor-pointer"
                      >
                        <Target className="w-6 h-6 mb-2" />
                        <span className="font-medium">Maintain</span>
                      </Label>
                    </div>
                    <div className="relative">
                      <RadioGroupItem value="gain" id="gain" className="peer sr-only" />
                      <Label
                        htmlFor="gain"
                        className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary cursor-pointer"
                      >
                        <Dumbbell className="w-6 h-6 mb-2" />
                        <span className="font-medium">Build Muscle</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={calculateMacros} className="flex-1" size="lg">
                    Calculate My Macros
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && results && (
            <div className="space-y-6">
              <Card className="border-primary">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-center">Your Daily Macro Targets</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 rounded-lg bg-orange-500/10">
                      <Flame className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                      <div className="text-3xl font-bold text-orange-500">{results.calories}</div>
                      <div className="text-sm text-muted-foreground">Calories</div>
                    </div>
                    <div className="p-4 rounded-lg bg-red-500/10">
                      <Dumbbell className="w-8 h-8 mx-auto mb-2 text-red-500" />
                      <div className="text-3xl font-bold text-red-500">{results.protein}g</div>
                      <div className="text-sm text-muted-foreground">Protein</div>
                    </div>
                    <div className="p-4 rounded-lg bg-blue-500/10">
                      <div className="w-8 h-8 mx-auto mb-2 text-blue-500 font-bold text-xl">C</div>
                      <div className="text-3xl font-bold text-blue-500">{results.carbs}g</div>
                      <div className="text-sm text-muted-foreground">Carbs</div>
                    </div>
                    <div className="p-4 rounded-lg bg-yellow-500/10">
                      <div className="w-8 h-8 mx-auto mb-2 text-yellow-500 font-bold text-xl">F</div>
                      <div className="text-3xl font-bold text-yellow-500">{results.fat}g</div>
                      <div className="text-sm text-muted-foreground">Fat</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4">SmashMeals Can Help You Hit These Goals!</h3>
                  <p className="text-muted-foreground mb-4">
                    Our meals are designed with your macros in mind. Each meal shows exact nutrition info so you can easily track your intake.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="flex-1" size="lg">
                      <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                        Order This Week's Menu
                      </a>
                    </Button>
                    <Button variant="outline" onClick={() => { setStep(1); setResults(null); }} className="flex-1">
                      Recalculate
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center text-sm text-muted-foreground">
                <p>
                  💡 <strong>Pro Tip:</strong> SmashMeals are perfect for meal prep! 
                  Each container has full macro info printed on the label.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MacroCalculator;
