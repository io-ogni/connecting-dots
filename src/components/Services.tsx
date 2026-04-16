import { motion } from "framer-motion";
import { Compass, Users, Clock } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Personal Development",
    description:
      "Figure out what you actually want — not what you think you should want. We'll cut through the noise and reconnect you with your values, strengths, and the things that light you up.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description:
      "You got promoted. Now what? Build the confidence to lead authentically — with empathy, clarity, and your own style. No corporate playbook required.",
  },
  {
    icon: Clock,
    title: "Time Management",
    description:
      "Always busy, never productive? Let's find out where your time actually goes and build systems that work with your brain — not against it.",
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
            Three areas, one goal: clarity
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
                <p className="text-muted-foreground font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
