import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="A sunlit path through a forest"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 to-foreground/60" />

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
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[1.1] mb-6"
        >
          You're not lost.
          <br />
          <em className="font-normal">You're just ready</em>
          <br />
          to grow.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-primary-foreground/70 font-body text-lg md:text-xl max-w-xl mx-auto mb-10"
        >
          Coaching for ambitious professionals who are ready to stop running on autopilot and start designing a life that actually fits.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a
            href="#why-coaching"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
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
