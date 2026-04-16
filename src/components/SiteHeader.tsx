import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className={`font-heading text-xl transition-colors duration-300 ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          Connecting Dots
        </a>
        <nav className="hidden md:flex gap-8">
          {["Why coaching", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`font-body text-sm tracking-wider uppercase transition-colors duration-300 hover:opacity-70 ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default SiteHeader;
