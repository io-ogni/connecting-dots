import { motion } from "framer-motion";
import dotsPattern from "@/assets/dots-pattern.jpg";

const WhyCoaching = () => {
  return (
    <section id="why-coaching" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">
            The honest truth
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-8">
            Why coaching?
          </h2>
          <div className="space-y-5 text-muted-foreground font-body text-lg leading-relaxed">
            <p>
              You've built the career, hit the milestones, checked the boxes. 
              But something feels off — like you're living someone else's plan.
            </p>
            <p>
              That nagging feeling isn't a breakdown. It's a signal. 
              Behind every "I should be happy by now" is a deeper question 
              waiting to be asked.
            </p>
            <p>
              Coaching gives you the space to slow down, ask real questions, 
              and reconnect with what actually matters to <em>you</em> — 
              not your LinkedIn profile.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={dotsPattern}
            alt="Connected dots watercolor illustration"
            className="w-full max-w-md rounded-sm shadow-lg"
            loading="lazy"
            width={800}
            height={600}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCoaching;
