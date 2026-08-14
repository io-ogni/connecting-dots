import { motion } from "framer-motion";
import dotsPattern from "@/assets/dots-pattern.jpg";

const WhyCoaching = () => {
  return (
    <section id="why-coaching" className="py-24 md:py-32 bg-background overflow-x-clip">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-12 text-center"
        >
          Why coaching
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 items-start">
          {/* Left column: opening, up to the Jacques Salomé line, then the illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 text-muted-foreground font-body text-lg leading-relaxed"
          >
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
          </motion.div>

          {/* Right column: the rest, ending on the closing paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5 text-muted-foreground font-body text-lg leading-relaxed"
          >
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
          </motion.div>
        </div>

        {/* Second row: illustration beside the highlighted closing line */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 items-center mt-14">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start"
          >
            <img
              src={dotsPattern}
              alt="Connected dots watercolor illustration"
              className="w-full max-w-sm rounded-2xl shadow-lg"
              loading="lazy"
              width={800}
              height={600}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <svg
              aria-hidden="true"
              preserveAspectRatio="none"
              viewBox="0 0 620 240"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+3rem)] h-[calc(100%+3rem)]"
            >
              <path
                d="M316 18C170 12 40 52 26 116C12 182 156 228 322 228C490 228 606 184 606 116C606 58 498 24 344 16C286 13 232 17 190 28C150 39 96 66 78 104"
                fill="none"
                stroke="#F7D88C"
                strokeOpacity="0.4"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="relative font-body text-xl leading-relaxed text-foreground text-center">
              Because at the end of the day, reaching our career goals, improving how our
              team works together, or discovering what makes us get out of bed in the
              morning — they are all connected to{" "}
              <strong className="font-semibold">who and how we choose to be in the world</strong>.
              And that, entirely, is in our power to change.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyCoaching;
