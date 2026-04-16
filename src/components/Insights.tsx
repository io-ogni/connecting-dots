import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "The Power of Pausing: Why Slowing Down Accelerates Growth",
    excerpt:
      "In a world obsessed with speed, the most transformative thing you can do is stop. Discover how intentional pauses create space for clarity and breakthroughs.",
    tag: "Personal Development",
  },
  {
    title: "From Manager to Leader: The Mindset Shift That Changes Everything",
    excerpt:
      "Leadership isn't about authority — it's about influence. Explore the inner shifts that turn good managers into inspiring leaders.",
    tag: "Leadership",
  },
  {
    title: "Navigating Career Transitions Without Losing Yourself",
    excerpt:
      "Change can feel like losing solid ground. Learn how coaching helps you rediscover your values and build a career aligned with who you truly are.",
    tag: "Career Change",
  },
];

const Insights = () => (
  <section id="insights" className="py-24 md:py-32 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">
          Insights
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground">
          Food for thought
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group cursor-pointer"
          >
            <div className="bg-card rounded-sm p-8 h-full flex flex-col border border-border/50 hover:border-accent/40 transition-colors duration-300">
              <span className="inline-block font-body text-xs tracking-widest uppercase text-accent mb-4">
                {article.tag}
              </span>
              <h3 className="font-heading text-xl text-foreground mb-4 leading-snug group-hover:text-accent transition-colors duration-300">
                {article.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 font-body text-sm text-accent group-hover:gap-3 transition-all duration-300">
                Read more <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Insights;
