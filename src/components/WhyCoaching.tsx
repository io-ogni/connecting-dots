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
              Because change is now in every breath we take. From jobs, teams and companies
              shifting overnight, to our personal relationships; from a technological
              evolution that makes our know-how obsolete faster than our educational systems
              can keep up with, to that inherent human need to grow, to find purpose, to be
              in the world in our own unique way — it all calls for change, more than ever
              before.
            </p>
            <p>
              And behind every change there is a fear. A fear of not succeeding, of not
              really knowing what we want, of not finding our own path, of not having the
              resources and the skills to cope with it and come out of it well.
            </p>
            <p>
              But then, as Jacques Salomé would say, “<em>behind every fear, there is a wish</em>”.
            </p>
            <p>
              People come to coaching for all sorts of reasons, yet underneath them all lies
              the same need: to be allowed a pause, a moment and a place to step back and
              see the bigger picture, to connect the dots and regain a sense of control —
              precisely because something is changing, because some of the constants we took
              for granted turn out to be variables, or simply because something no longer
              feels right.
            </p>
            <p>
              Coaching is a pragmatic and accessible approach, well equipped for the journey
              of self-discovery. It creates the space we need to uncover our own values,
              strengths and needs, and it gives us the chance to work on whatever is holding
              us back from reaching our goals — whatever those goals may be.
            </p>
            <p>
              Because at the end of the day, reaching our career goals, improving how our
              team works together, or discovering what makes us get out of bed in the
              morning — they are all connected to who and how we choose to be in the world.
              And that, entirely, is in our power to change.
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
