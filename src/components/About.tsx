import { motion } from "framer-motion";
import portrait from "@/assets/coach-portrait.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-2"
        >
          <img
            src={portrait}
            alt="Ioana Ognibeni, Personal & Leadership Coach"
            className="w-full rounded-sm shadow-xl"
            loading="lazy"
            width={800}
            height={1000}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-3"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">
            About me
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-8">
            Ioana Ognibeni
          </h2>
          <div className="space-y-5 text-muted-foreground font-body text-lg leading-relaxed">
            <p>
              I am a certified Personal, Leadership &amp; Executive Coach
              (Kingstown College, Ireland), member of EMCC, and experienced IT
              Product and Project Manager with over a decade of delivering IT
              projects touching the lives of tens of millions of people.
            </p>
            <p>
              Having successfully delivered several multi-million dollar projects
              and having led countless teams from all over the world, I am proud
              and grateful to have worked together with incredibly talented
              people, from whom I learned and continue to learn every day.
            </p>
            <p className="text-foreground font-medium italic border-l-2 border-accent pl-6">
              In my personal practice, coaching is all about creating a safe
              space for reflection and creativity, where the Client feels
              empowered to connect the dots and to reach more clarity and focus
              during a change process.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
