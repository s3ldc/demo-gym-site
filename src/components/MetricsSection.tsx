const metrics = [
  { value: "5,000+", label: "Members Trained" },
  { value: "12+", label: "Years Experience" },
  { value: "25", label: "Certified Trainers" },
  { value: "94%", label: "Success Rate" },
];

const MetricsSection = () => {
  return (
    <section className="section-darker py-16 border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="metric-number mb-2">{metric.value}</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
