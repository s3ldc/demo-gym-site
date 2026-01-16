import { Dumbbell, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl uppercase">IronForge</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Where discipline meets results. Transform your body, transform your life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Programs", "Pricing", "Trainers", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg uppercase mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center bg-secondary hover:bg-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-power mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          © {new Date().getFullYear()} IronForge Gym. All rights reserved.

          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
