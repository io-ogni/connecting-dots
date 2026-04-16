import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">
            Ready to begin?
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Let's connect
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
            Every journey starts with a single conversation. Reach out and let's
            explore how coaching can support your next chapter.
          </p>
          <a
            href="mailto:hello@connecting-dots.coach"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
