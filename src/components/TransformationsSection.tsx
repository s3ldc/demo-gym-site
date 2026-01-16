import { Quote } from "lucide-react";

const transformations = [
  {
    name: "Michael T.",
    duration: "12 weeks",
    result: "Lost 45 lbs",
    quote: "I walked in overweight and unmotivated. Walked out with a six-pack and a new life.",
  },
  {
    name: "Sarah K.",
    duration: "16 weeks", 
    result: "Gained 15 lbs muscle",
    quote: "The trainers pushed me past limits I didn't know I had. Best investment I ever made.",
  },
  {
    name: "David R.",
    duration: "8 weeks",
    result: "Dropped 3 pant sizes",
    quote: "No gimmicks. Just hard work and a team that refused to let me quit.",
  },
];

const TransformationsSection = () => {
  return (
    <section className="section-dark py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Real Results
          </span>
          <h2 className="text-5xl md:text-6xl font-display uppercase">
            Transformation Stories
          </h2>
        </div>

        {/* Transformations Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <div key={index} className="card-gym">
              {/* Before/After Placeholder */}
              <div className="flex gap-2 mb-6">
                <div className="flex-1 aspect-[3/4] bg-secondary flex items-center justify-center border border-border">
                  <span className="text-muted-foreground text-sm uppercase tracking-wider">Before</span>
                </div>
                <div className="flex-1 aspect-[3/4] bg-secondary flex items-center justify-center border border-primary/30">
                  <span className="text-primary text-sm uppercase tracking-wider">After</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-4 mb-4">
                <div className="px-3 py-1 bg-primary/10 border border-primary/30">
                  <span className="text-primary font-semibold text-sm">{item.duration}</span>
                </div>
                <div className="px-3 py-1 bg-primary/10 border border-primary/30">
                  <span className="text-primary font-semibold text-sm">{item.result}</span>
                </div>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="w-8 h-8 text-primary/30 mb-2" />
                <p className="text-muted-foreground italic mb-4">"{item.quote}"</p>
                <p className="font-display text-xl uppercase">— {item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
