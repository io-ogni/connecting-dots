import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Why coaching", to: "/#why-coaching" },
  { label: "Services", to: "/#services" },
  { label: "About", to: "/#about" },
  { label: "Insights", to: "/#insights" },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid ? "bg-background/95 backdrop-blur-sm shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className={`font-heading text-xl transition-colors duration-300 ${
            solid ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          Connecting Dots
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`font-body text-sm tracking-wider uppercase transition-colors duration-300 hover:opacity-70 ${
                solid ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            className="rounded-full bg-accent text-accent-foreground px-6 py-2.5 font-body text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Let's talk
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className={`md:hidden transition-colors ${solid ? "text-foreground" : "text-primary-foreground"}`}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <nav className="md:hidden mt-4 mx-4 rounded-2xl bg-background shadow-lg border border-border/40 p-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="font-body text-base text-foreground/90 hover:text-foreground py-3 px-2 rounded-lg hover:bg-muted transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center rounded-full bg-accent text-accent-foreground px-6 py-3 font-body text-sm tracking-wider uppercase"
          >
            Let's talk
          </Link>
        </nav>
      )}
    </motion.header>
  );
};

export default SiteHeader;
