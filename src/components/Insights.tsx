import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Target, Lightbulb } from "lucide-react";

const articles = [
  {
    title: "When You've Tried It All, But Time Still Slips Through Your Fingers",
    excerpt:
      "What if I would ask you: what is your relationship with time? There are two aspects you might want to consider: the quality of the relationship, and the purpose of the relationship.",
    tag: "Time Management",
    icon: Clock,
    url: "https://connecting-dots.coach/time-management/when-youve-tried-it-all-but-time-still-slips-through-your-fingers/",
  },
  {
    title: "Where Did My Time Go?",
    excerpt:
      "Investigating together with my clients into their relationship with time, I find recurrent patterns — over-perfecting, saying yes to everything, multitasking. Each has a positive side when used with awareness.",
    tag: "Time Management",
    icon: Target,
    url: "https://connecting-dots.coach/time-management/where-did-my-time-go/",
  },
  {
    title: "Why Meetings Without Agenda Are a No-Go",
    excerpt:
      "When you send out an invite with an empty text and a fuzzy title like 'Sync' or 'Status', there is a high chance your meeting will not be structured and will have no clear, measurable outcome.",
    tag: "Time Management",
    icon: Users,
    url: "https://connecting-dots.coach/time-management/why-meetings-without-agenda-are-a-no-go/",
  },
  {
    title: "Tips for Meetings That Make Sense",
    excerpt:
      "Everybody hates losing time without getting anything in return, which is exactly what we do when we set up useless or badly prepared meetings. Here are tips from more than a decade of sitting in conference rooms.",
    tag: "Time Management",
    icon: Lightbulb,
    url: "https://connecting-dots.coach/time-management/tips-for-meetings-that-make-sense/",
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

      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article, i) => {
          const Icon = article.icon;
          return (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-sm p-8 h-full flex flex-col border border-border/50 hover:border-accent/40 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-body text-xs tracking-widest uppercase text-accent">
                    {article.tag}
                  </span>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-4 leading-snug group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 font-body text-sm text-accent group-hover:gap-3 transition-all duration-300">
                  Read article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  </section>
);

export default Insights;
