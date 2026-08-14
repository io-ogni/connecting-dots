import { motion } from "framer-motion";
import heroStars from "@/assets/hero-stars.jpg.asset.json";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroStars.url}
        alt="A person standing under the Milky Way in a vivid starlit sky"
        className="absolute inset-0 w-full h-full object-cover object-center"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(252_40%_8%/0.35)] via-[hsl(252_40%_8%/0.25)] to-background/70" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary-foreground/80 font-body text-lg tracking-[0.25em] uppercase mb-6"
        >
          Coaching &amp; Mentoring
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[1.15] mb-6 tracking-tight flex flex-col items-center gap-2"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative inline-block px-4 py-1"
          >
            <span className="absolute inset-0 -skew-y-1 rounded-lg bg-[hsl(252_45%_12%/0.72)] backdrop-blur-[2px]" />
            <span className="relative italic font-medium bg-gradient-to-r from-[hsl(28_85%_78%)] via-[hsl(15_80%_74%)] to-[hsl(300_55%_80%)] bg-clip-text text-transparent">
              design your life
            </span>
          </motion.span>
          <span className="relative inline-block px-4 py-1">
            <span className="absolute inset-0 -skew-y-1 rounded-lg bg-[hsl(252_45%_12%/0.72)] backdrop-blur-[2px]" />
            <span className="relative text-primary-foreground">
              with{" "}
              <span className="relative inline-block">
                <span className="relative z-10">clarity.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1.1, ease: "easeOut" }}
                  className="absolute left-0 right-0 bottom-1 md:bottom-2 h-3 md:h-4 bg-accent/60 origin-left -z-0 rounded-sm"
                />
              </span>
            </span>
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10"
        >
          <a
            href="#why-coaching"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-full font-body text-sm tracking-widest uppercase hover:scale-105 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
          >
            Discover more
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-primary-foreground/40 mx-auto mb-2" />
        <span className="text-primary-foreground/50 text-xs tracking-widest uppercase font-body">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
