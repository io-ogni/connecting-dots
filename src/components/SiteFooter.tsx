import { Mail, MapPin, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://www.linkedin.com/in/ioanamarinescu/";

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
            {["Why coaching", "Services", "About", "Insights"].map((item) => (
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
              href="mailto:contact@ioana-ognibeni.eu"
              className="flex items-center gap-2 font-body text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
            >
              <Mail className="w-4 h-4" /> contact@ioana-ognibeni.eu
            </a>
            <p className="flex items-center gap-2 font-body text-sm text-accent-foreground/70">
              <MapPin className="w-4 h-4" /> Augsburg, Germany
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 rounded-full border border-accent-foreground/30 px-4 py-2 font-body text-sm text-accent-foreground/90 hover:bg-accent-foreground/10 hover:text-accent-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" /> Connect on LinkedIn
            </a>
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
