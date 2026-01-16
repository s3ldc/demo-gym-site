import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "49",
    period: "/month",
    features: [
      "Full gym access",
      "Locker & towel service",
      "Fitness assessment",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "89",
    period: "/month",
    features: [
      "Everything in Starter",
      "Unlimited group classes",
      "1 PT session/month",
      "Nutrition consultation",
      "Priority booking",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "149",
    period: "/month",
    features: [
      "Everything in Pro",
      "4 PT sessions/month",
      "Custom meal plan",
      "Body composition tracking",
      "VIP locker room",
      "Guest passes",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="section-darker py-24 border-y border-border">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Membership Plans
          </span>
          <h2 className="text-5xl md:text-6xl font-display uppercase mb-4">
            Invest in Yourself
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. No contracts. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 ${
                plan.popular 
                  ? 'bg-card border-2 border-primary' 
                  : 'bg-card border border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-display uppercase mb-4">{plan.name}</h3>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-display text-gradient">${plan.price}</span>
                  <span className="text-muted-foreground mb-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center bg-primary/10">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={plan.popular ? "btn-power w-full" : "btn-outline-power w-full"}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
