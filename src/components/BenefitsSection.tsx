import { Award, Clock, Dumbbell, Shield, Sparkles, Users } from "lucide-react";

const benefits = [
  { icon: Award, text: "Certified NSCA & ACE Coaches" },
  { icon: Dumbbell, text: "Premium Hammer Strength Equipment" },
  { icon: Sparkles, text: "Sanitized Every Hour" },
  { icon: Clock, text: "Open 5AM - 11PM Daily" },
  { icon: Users, text: "1:10 Trainer to Member Ratio" },
  { icon: Shield, text: "No Lock-In Contracts" },
];

const BenefitsSection = () => {
  return (
    <section className="section-darker py-24 border-y border-border">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Why Train With Us
            </span>
            <h2 className="text-5xl md:text-6xl font-display uppercase mb-6">
              Built for
              <br />
              <span className="text-gradient">Serious Athletes</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-md">
              This isn't a gym for selfies. It's a training ground for people who want real results.
            </p>
            <button className="btn-power">
              Book a Tour
            </button>
          </div>

          {/* Right - Benefits List */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 shrink-0">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
