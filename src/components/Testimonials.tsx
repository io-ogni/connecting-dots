import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Coaching with Ioana was a bliss — a moment of coherence, clarity, and an energy booster. She helped me step back from daily chaos to find meaning and real pleasure in my work.",
    name: "Cristina O.",
    location: "Paris, France",
    emoji: "✨",
  },
  {
    quote:
      "Ioana helped me identify my real goals and priorities — not the ones I thought I should have. Positive, clear, patient, and incredibly knowledgeable. The best coach I've worked with.",
    name: "Fani P.",
    location: "Bucharest, Romania",
    emoji: "🌿",
  },
  {
    quote:
      "She kept me focused and held me accountable. After our sessions I had confidence, clarity on next steps, and actual motivation again. Can't recommend her enough.",
    name: "Kevin R.",
    location: "Dublin, Ireland",
    emoji: "🔥",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
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
            Real people, real shifts
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">
            What clients say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: i * 0.12 }}
              whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
              className="group relative bg-background/70 backdrop-blur-md rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-shadow duration-500 border border-border/30 hover:border-accent/30"
            >
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
