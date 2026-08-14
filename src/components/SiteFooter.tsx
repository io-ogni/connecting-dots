import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

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
              <MapPin className="w-4 h-4" /> Augsburg, Germany
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-accent-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {[
            { to: "/agreement-disclaimer", label: "Agreement & Disclaimer" },
            { to: "/privacy-policy", label: "Privacy Policy" },
            { to: "/datenschutzerklarung", label: "Datenschutzerklärung" },
            { to: "/impressum-page", label: "Impressum" },
            { to: "/photos-credit", label: "Photos Credit" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-body text-xs text-accent-foreground/70 hover:text-accent-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="font-body text-xs text-accent-foreground/50 text-center">
          © {new Date().getFullYear()} Ioana Ognibeni. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
