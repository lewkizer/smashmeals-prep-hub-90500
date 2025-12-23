import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, CheckCircle, Share, MoreVertical } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Check if iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for app installed event
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  return (
    <>
      <Helmet>
        <title>Install SmashMeals App | Get Quick Access to Healthy Meal Prep</title>
        <meta name="description" content="Install the SmashMeals app on your phone for quick access to our 100% gluten-free meal prep menu. Order healthy meals faster!" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background pt-20 pb-32">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-primary/10 flex items-center justify-center">
                <Smartphone className="w-12 h-12 text-primary" />
              </div>
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                Install SmashMeals
              </h1>
              <p className="text-muted-foreground text-lg">
                Add SmashMeals to your home screen for quick access to our weekly menu and easy ordering.
              </p>
            </div>

            {/* Status or Install Section */}
            {isInstalled ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 mb-8">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-green-800 dark:text-green-400 mb-2">
                  Already Installed!
                </h2>
                <p className="text-green-700 dark:text-green-500">
                  SmashMeals is already on your home screen. Enjoy quick access to healthy meals!
                </p>
              </div>
            ) : isIOS ? (
              <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Install on iPhone/iPad
                </h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Tap the Share button</p>
                      <p className="text-muted-foreground text-sm flex items-center gap-1">
                        Look for <Share className="w-4 h-4 inline" /> at the bottom of Safari
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Scroll down and tap "Add to Home Screen"</p>
                      <p className="text-muted-foreground text-sm">It has a + icon next to it</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Tap "Add" in the top right</p>
                      <p className="text-muted-foreground text-sm">SmashMeals will appear on your home screen</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : deferredPrompt ? (
              <div className="mb-8">
                <Button
                  onClick={handleInstallClick}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Install App
                </Button>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Install on Android
                </h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Tap the menu button</p>
                      <p className="text-muted-foreground text-sm flex items-center gap-1">
                        Look for <MoreVertical className="w-4 h-4 inline" /> in Chrome's top right
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Tap "Install app" or "Add to Home screen"</p>
                      <p className="text-muted-foreground text-sm">The option may vary by browser</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Confirm the installation</p>
                      <p className="text-muted-foreground text-sm">SmashMeals will appear on your home screen</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Download className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quick Access</h3>
                <p className="text-muted-foreground text-sm">
                  Launch directly from your home screen—no browser needed
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">App-Like Experience</h3>
                <p className="text-muted-foreground text-sm">
                  Full screen mode with smooth navigation
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Works Offline</h3>
                <p className="text-muted-foreground text-sm">
                  Browse menus even without internet connection
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Install;
