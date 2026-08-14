import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

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
        <p className="text-brand-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
          Insights
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground">
          Food for thought
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article, i) => {
          const Icon = article.icon;
          return (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/articles/${article.slug}`} className="group block">
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col border border-border/30 hover:border-brand-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 group-hover:shadow-md group-hover:shadow-brand-gold/10 transition-all duration-300">
                      <Icon className="w-5 h-5 text-brand-gold group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="font-body text-xs tracking-widest uppercase text-brand-gold">
                      {article.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-4 leading-snug group-hover:text-brand-gold transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-base leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-body text-sm text-brand-gold group-hover:gap-3 transition-all duration-300">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Insights;
