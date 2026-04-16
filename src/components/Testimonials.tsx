import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Coaching with Ioana was a bliss, a special moment of coherence, clarity, and energy booster. She helped me taking a distance from my daily work in order to project myself and find meaning and pleasure in my job. Having Ioana in this journey as a coach was an essential and useful delight.",
    name: "Cristina O.",
    location: "Paris, France",
  },
  {
    quote:
      "Ioana guided me to identify better my personal and professional goals and priorities. Positive attitude, clear communication, patience, very knowledgeable — all these qualities make Ioana the best coach that I worked with. All the coaching sessions have really added value to my life.",
    name: "Fani P.",
    location: "Bucharest, Romania",
  },
  {
    quote:
      "She listened to everything I said and really kept me focused. She also held me accountable for the goals I set for myself. My sessions with Ioana have given me confidence, clarity of the next steps to take and created me to be motivated again. I would very highly recommend Ioana.",
    name: "Kevin R.",
    location: "Dublin, Ireland",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-16">
            Words from clients
          </h2>
        </motion.div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <blockquote className="font-heading text-xl md:text-2xl text-foreground leading-relaxed italic mb-8">
            "{testimonials[active].quote}"
          </blockquote>
          <p className="text-foreground font-body font-semibold">
            {testimonials[active].name}
          </p>
          <p className="text-muted-foreground font-body text-sm">
            {testimonials[active].location}
          </p>
        </motion.div>

        <div className="flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "bg-accent scale-125"
                  : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
