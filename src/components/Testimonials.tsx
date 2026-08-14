import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Coaching with Ioana was a bliss, a special moment of coherence, clarity, and energy booster. The sessions took place during a peculiar period of my career during an organizational change with lots of potential but also chaotic activities and intense work. Ioana guided me in creating a method to cope with urgency and with important issues. She is such a dedicated and good listener capable to understand a situation in depth and to design tools and tips with great intelligence and empathy. She helped me taking a distance from my daily work in order to project myself and find meaning and pleasure in my job. Having Ioana in this journey as a coach was an essential and useful delight.",
    name: "Cristina O.",
    location: "Paris, France",
  },
  {
    quote:
      "During the coaching sessions, Ioana guided me to identify better my personal and professional goals and priorities. Positive attitude, clear communication, patience, very knowledgeable – all these qualities make Ioana the best coach that I worked with. It has been a pleasure to be coached by Ioana and I strongly recommend her to anyone who is looking for professional coaching. All the coaching sessions have really added value to my life. Thank you for the insightful sessions, Ioana!",
    name: "Fani P.",
    location: "Bucharest, Romania",
  },
  {
    quote:
      "Ioana is a great coach. I felt very comfortable in our coaching sessions and she created a safe space for me to share. I realised that I needed a coach to move me forward, create objectives and help me to start clearly thinking again. Ioana was this person, she was great. She listened to everything I said and really kept me focused. She also held me accountable for the goals I set for myself. My sessions with Ioana have given me confidence, clarity of the next steps to take and also created me to be motivated again. She is very professional and I would very highly recommend Ioana.",
    name: "Kevin R.",
    location: "Dublin, Ireland",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-rose/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">
            Testimonials
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

              <blockquote className="font-heading text-base text-foreground leading-relaxed italic mb-8">
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
