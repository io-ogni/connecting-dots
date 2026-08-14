import { motion } from "framer-motion";
import portraitAsset from "@/assets/coach-portrait.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-2 md:order-2"
        >
          <img
            src={portraitAsset}
            alt="Ioana Ognibeni, Personal & Leadership Coach"
            className="w-full rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
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
          className="md:col-span-3 md:order-1"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-8">
            About me
          </h2>
          <div className="space-y-5 text-muted-foreground font-body text-lg leading-relaxed">
            <p>
              I am Ioana Ognibeni – certified Personal, Leadership &amp; Executive
              Coach (Kingstown College, Ireland), member of EMCC and experienced IT Product and
              Project Manager, with close to two decades of delivering technology that touches
              the lives of tens of millions of people.
            </p>
            <p>
              I share my enthusiasm between the products and projects whose success I've been a
              part of, and the coaching topic that I am deeply passionate about, in various
              approaches and schools of thought.
            </p>
            <p>
              In that respect I have also acquired hundreds of hours of training in
              Transactional Analysis and in other various psychology areas.
            </p>
            <p className="font-hand text-3xl md:text-4xl leading-snug -rotate-2 origin-left mt-8 mb-2">
              In my personal practice, coaching is all about creating a safe space for
              reflection and creativity, where the Client feels empowered to connect the dots
              and to reach more clarity and focus during a change process.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
