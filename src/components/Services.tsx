import { motion } from "framer-motion";
import { Compass, Users, Clock } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Personal Development",
    description:
      "The bottom line in any change we go through in our lives is the fact that we grow. This requires courage for self discovery, a strong connection to the reality, but also to our creative child within us, whose limitless imagination supports our dreams and our possibilities of changing this reality.",
  },
  {
    icon: Users,
    title: "Team leadership",
    description:
      "There are several areas in which coaching can help create a positive change: articulating the vision, team motivation, communication and feedback, strategic thinking, emotional intelligence. What kind of leader do you want to be?",
  },
  {
    icon: Clock,
    title: "Time management",
    description:
      "We cannot manage time, just as we cannot manage space; what we can do is decide on what we focus, pragmatically plan what we can achieve, learn from what went wrong and improve. Coaching can support you in finding your own system for handling tasks and priorities, in deciding what is important vs. what is urgent.",
  },
];

const Services = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-secondary to-primary/5" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/6 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="bg-background/85 backdrop-blur-md rounded-3xl shadow-2xl border border-border/30 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground">
              Coaching &amp; Mentoring services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: i * 0.12 }}
              whileHover={{ y: -6, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
              className="relative bg-background/60 backdrop-blur-md p-10 rounded-3xl group hover:shadow-2xl transition-all duration-500 border border-border/30 hover:border-accent/40"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:shadow-lg group-hover:shadow-accent/15 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/80 font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
