import { Mail, MapPin } from "lucide-react";

const SiteFooter = () => (
  <footer className="bg-accent text-accent-foreground">
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <p className="font-heading text-2xl mb-4">Connecting Dots</p>
          <p className="font-body text-accent-foreground/70 text-sm leading-relaxed">
            Helping you pause, reflect, and design your life with clarity and purpose.
          </p>
        </div>
        <div>
          <p className="font-body text-sm font-semibold uppercase tracking-widest mb-4">
            Quick links
          </p>
          <nav className="flex flex-col gap-2">
            {["Why coaching", "Services", "About", "Insights", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="font-body text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <p className="font-body text-sm font-semibold uppercase tracking-widest mb-4">
            Get in touch
          </p>
          <div className="space-y-3">
            <a
              href="mailto:ioana@connecting-dots.coach"
              className="flex items-center gap-2 font-body text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
            >
              <Mail className="w-4 h-4" /> ioana@connecting-dots.coach
            </a>
            <p className="flex items-center gap-2 font-body text-sm text-accent-foreground/70">
              <MapPin className="w-4 h-4" /> Dublin, Ireland
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-accent-foreground/20 pt-8 text-center">
        <p className="font-body text-xs text-accent-foreground/50">
          © {new Date().getFullYear()} Ioana Ognibeni. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
