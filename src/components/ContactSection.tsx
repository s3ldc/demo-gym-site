import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-darker py-24 border-t border-border">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Location & Hours
            </span>
            <h2 className="text-5xl md:text-6xl font-display uppercase mb-8">
              Find Us
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    123 Iron Street, Downtown District
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 5:00 AM - 11:00 PM
                    <br />
                    Saturday - Sunday: 6:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+1234567890"
                className="btn-power inline-flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/1234567890"
                className="btn-outline-power inline-flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right - Google Map */}
          <div className="h-[400px] w-full overflow-hidden rounded-lg border border-border">
            <iframe
              title="IronForge Gym Location"
              src="https://www.google.com/maps?q=123+Iron+Street+New+York+NY+10001&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
