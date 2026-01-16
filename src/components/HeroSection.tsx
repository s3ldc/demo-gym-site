import heroImage from "@/assets/hero-gym.jpg";
import { Dumbbell } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-primary/50 bg-primary/10">
            <Dumbbell className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Transform Your Body
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display uppercase leading-none mb-6">
            Build Strength.
            <br />
            <span className="text-gradient">Crush Limits.</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-10">
            Discipline is the bridge between your goals and your results. 
            No excuses. No shortcuts. Just results.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-power">
              Start Free Trial
            </button>
            <button className="btn-outline-power">
              Talk to a Trainer
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Open 5AM - 11PM Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">First Week Free</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
