import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Coaching with Ioana was a bliss, a special moment of coherence, clarity, and energy booster. She helped me taking a distance from my daily work in order to project myself and find meaning and pleasure in my job.",
    name: "Cristina O.",
    location: "Paris, France",
    emoji: "✨",
  },
  {
    quote:
      "Ioana guided me to identify better my personal and professional goals and priorities. Positive attitude, clear communication, patience, very knowledgeable — all these qualities make Ioana the best coach that I worked with.",
    name: "Fani P.",
    location: "Bucharest, Romania",
    emoji: "🌿",
  },
  {
    quote:
      "She listened to everything I said and really kept me focused. She also held me accountable for the goals I set for myself. My sessions with Ioana have given me confidence, clarity and motivation.",
    name: "Kevin R.",
    location: "Dublin, Ireland",
    emoji: "🔥",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">
            Words from clients
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-border/50"
            >
              {/* Accent top bar */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="text-3xl mb-4 block">{t.emoji}</span>

              <blockquote className="font-heading text-lg text-foreground leading-relaxed italic mb-8">
                "{t.quote}"
              </blockquote>

              <div className="mt-auto">
                <p className="text-foreground font-body font-semibold">
                  {t.name}
                </p>
                <p className="text-muted-foreground font-body text-sm">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
