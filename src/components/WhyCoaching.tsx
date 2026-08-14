import { motion } from "framer-motion";
import dotsPattern from "@/assets/dots-pattern.jpg";

const WhyCoaching = () => {
  return (
    <section id="why-coaching" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-8">
            Why coaching
          </h2>
          <div className="space-y-5 text-muted-foreground font-body text-lg leading-relaxed">
            <p>
              Because nowadays change is in every breath we take. From jobs, teams and
              companies changing overnight, to personal relationships; from technological
              evolution making know-how become obsolete faster than our educational systems
              are able to cope with, to our inherent need to grow, to find purpose, to be in
              the world in our unique way. It all calls for changes more than ever before.
            </p>
            <p>
              And behind every change there is a fear. A fear of being unsuccessful, of not
              really knowing what we want, of not finding our own path, of not having the
              resources and skills to cope with, to get out of this as a winner.
            </p>
            <p>
              But then, as Jacques Salome would say, “<em>behind every fear, there is a wish</em>”.
            </p>
            <p>
              People come to coaching for lots of different purposes, but all these things are
              about asking for a pause, a moment and a place to step back and get the bigger
              picture, connect the dots and regain control – exactly because something <em>is</em>{" "}
              changing, some assumed-to-be constants are actually variables or simply because
              something <em>does not feel right anymore</em>.
            </p>
            <p>
              Coaching is a pragmatic and accessible approach, fully equipped for the
              self-discovery journey. It creates the needed space to discover our own values,
              strengths and needs, and gives the chance to work on what is limiting us in
              achieving our goals – whatever these may be.
            </p>
            <p>
              Because at the end of the day, reaching our career goals, improving our team
              productivity or discovering what makes us get out of the bed in the morning –
              they are all related to <em>who</em> and <em>how</em> we choose to be in the
              world. And this is totally in our power to change.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={dotsPattern}
            alt="Connected dots watercolor illustration"
            className="w-full max-w-md rounded-sm shadow-lg"
            loading="lazy"
            width={800}
            height={600}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCoaching;
