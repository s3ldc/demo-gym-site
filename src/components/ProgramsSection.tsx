import { Flame, Target, Users, Zap } from "lucide-react";

const programs = [
  {
    icon: Zap,
    title: "Strength Training",
    description: "Build raw power and muscle mass with progressive overload training designed for maximum gains.",
  },
  {
    icon: Flame,
    title: "Weight Loss",
    description: "Burn fat, build lean muscle. Our high-intensity programs deliver measurable results in 8 weeks.",
  },
  {
    icon: Target,
    title: "Personal Training",
    description: "One-on-one coaching tailored to your goals. Your dedicated trainer. Your personalized program.",
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "Push harder together. HIIT, CrossFit, and functional training in a competitive environment.",
  },
];

const ProgramsSection = () => {
  return (
    <section className="section-dark py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Training Programs
          </span>
          <h2 className="text-5xl md:text-6xl font-display uppercase">
            Choose Your Path
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="card-gym group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-primary/10 border border-primary/30 mb-6 group-hover:bg-primary/20 transition-colors">
                <program.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display uppercase mb-3">{program.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{program.description}</p>
              <div className="mt-6 flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
                Learn More
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
