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
              I'm a certified Personal, Leadership & Executive Coach with 
              over a decade of shipping IT products used by tens of millions. 
              I've led global teams, managed multi-million dollar projects, 
              and learned the hard way that success without self-awareness 
              is just a fancy hamster wheel.
            </p>
            <p>
              Now I help driven professionals — the kind who've always been 
              "fine" — pause long enough to ask the questions that actually 
              matter. No corporate jargon. No guru vibes. Just honest, 
              structured conversations that move you forward.
            </p>
            <p className="text-foreground font-medium italic border-l-2 border-accent pl-6">
              Coaching is about creating a space where you can finally hear 
              yourself think — and start connecting the dots between who 
              you are and who you want to become.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
