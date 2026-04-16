import { motion } from "framer-motion";
import { Compass, Users, Clock } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Personal Development",
    description:
      "The bottom line in any change we go through is the fact that we grow. This requires courage for self-discovery, a strong connection to reality, but also to our creative child within us.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description:
      "Articulating the vision, team motivation, communication and feedback, strategic thinking, emotional intelligence. What kind of leader do you want to be?",
  },
  {
    icon: Clock,
    title: "Time Management",
    description:
      "We cannot manage time — what we can do is decide what we focus on, pragmatically plan what we can achieve, learn from what went wrong and improve.",
  },
];

const Services = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">
            How I can help
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">
            Coaching &amp; Mentoring Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-background p-10 rounded-sm group hover:shadow-lg transition-shadow duration-500"
            >
              <service.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading text-2xl text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
