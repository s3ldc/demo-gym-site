const FinalCTASection = () => {
  return (
    <section className="section-dark py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              hsl(var(--primary)) 35px,
              hsl(var(--primary)) 70px
            )`,
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-6 leading-none">
            Stop Waiting.
            <br />
            <span className="text-gradient">Start Transforming.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Your future self will thank you. The first step is walking through our doors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-power animate-pulse-glow">
              Start Your Fitness Journey Today
            </button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            First week free. No contracts. No excuses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
