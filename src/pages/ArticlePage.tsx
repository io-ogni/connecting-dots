import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { articles } from "@/data/articles";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import NotFound from "./NotFound";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <NotFound />;

  const Icon = article.icon;

  // Simple markdown-like rendering: bold, italic, lists, hr, headings
  const renderContent = (text: string) => {
    const blocks = text.split("\n\n");
    return blocks.map((block, i) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // Horizontal rule
      if (trimmed === "---") {
        return <hr key={i} className="my-10 border-border" />;
      }

      // H4 heading
      if (trimmed.startsWith("#### ")) {
        return (
          <h4
            key={i}
            className="font-heading text-xl text-foreground mt-10 mb-4"
          >
            {trimmed.replace("#### ", "")}
          </h4>
        );
      }

      // Unordered list
      if (trimmed.startsWith("- ")) {
        const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="list-disc list-inside space-y-2 mb-6 text-foreground/85">
            {items.map((item, j) => (
              <li key={j}>{renderInline(item.replace(/^- /, ""))}</li>
            ))}
          </ul>
        );
      }

      // Numbered items (1. or **1.**)
      if (/^\d+\./.test(trimmed) || /^\*\*\d+/.test(trimmed)) {
        return (
          <p key={i} className="font-body text-lg leading-relaxed text-foreground mb-4">
            {renderInline(trimmed)}
          </p>
        );
      }

      // Regular paragraph
      return (
        <p key={i} className="font-body text-lg leading-relaxed text-foreground/85 mb-4">
          {renderInline(trimmed)}
        </p>
      );
    });
  };

  const renderInline = (text: string): React.ReactNode => {
    // Process bold and italic inline
    const parts: React.ReactNode[] = [];
    const regex = /\*\*(.+?)\*\*|\*(.+?)\*/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      if (match[1]) {
        parts.push(<strong key={match.index} className="font-semibold text-foreground">{match[1]}</strong>);
      } else if (match[2]) {
        parts.push(<em key={match.index}>{match[2]}</em>);
      }
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    return parts.length > 0 ? parts : text;
  };

  return (
    <>
      <SiteHeader />
      <article className="min-h-screen bg-background pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/#insights"
              className="inline-flex items-center gap-2 text-brand-gold font-body text-sm tracking-widest uppercase mb-10 hover:gap-3 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" /> Back to insights
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-brand-gold" />
              </div>
              <span className="font-body text-xs tracking-widest uppercase text-brand-gold">
                {article.tag}
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-12">
              {article.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="prose-custom"
          >
            {renderContent(article.content)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-10 border-t border-border"
          >
            <Link
              to="/#insights"
              className="inline-flex items-center gap-2 text-brand-gold font-body text-sm tracking-widest uppercase hover:gap-3 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" /> Back to all articles
            </Link>
          </motion.div>
        </div>
      </article>
      <SiteFooter />
    </>
  );
};

export default ArticlePage;
