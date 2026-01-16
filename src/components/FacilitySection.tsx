import facilityImage from "@/assets/facility-gym.jpg";

const FacilitySection = () => {
  return (
    <section className="section-dark py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Our Facility
          </span>
          <h2 className="text-5xl md:text-6xl font-display uppercase">
            Where Champions Train
          </h2>
        </div>

        {/* Main Image */}
        <div className="relative mb-8">
          <img 
            src={facilityImage} 
            alt="Premium gym facility with modern equipment" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Facility Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Squat Racks", value: "12" },
            { label: "Bench Stations", value: "8" },
            { label: "Cardio Machines", value: "40+" },
            { label: "Sqft Space", value: "15,000" },
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-card border border-border">
              <div className="text-4xl font-display text-gradient mb-2">{item.value}</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
