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
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Get in touch
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
            If you would like to find out more about coaching or to schedule a first
            conversation, I would be happy to hear from you.
          </p>
          <a
            href="mailto:ioana@connecting-dots.coach"
            className="inline-block bg-accent text-accent-foreground px-10 py-4 rounded-full font-body text-sm tracking-widest uppercase hover:scale-105 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
          >
            Contact me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
