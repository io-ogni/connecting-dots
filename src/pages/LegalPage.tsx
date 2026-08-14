import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { legalPages } from "@/data/legalPages";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import NotFound from "./NotFound";

const renderInline = (text: string) => {
  const tokens = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|_[^_]+_)/g);
  return tokens.filter(Boolean).map((token, i) => {
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a
          key={i}
          href={link[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4 hover:opacity-80 break-words"
        >
          {link[1]}
        </a>
      );
    }
    if (token.startsWith("**") && token.endsWith("**")) {
      return <strong key={i}>{token.slice(2, -2)}</strong>;
    }
    if (token.startsWith("_") && token.endsWith("_")) {
      return <em key={i}>{token.slice(1, -1)}</em>;
    }
    return <span key={i}>{token}</span>;
  });
};

const renderContent = (text: string) =>
  text.split("\n\n").map((raw, i) => {
    const block = raw.trim();
    if (!block) return null;

    if (block.startsWith("##### ")) {
      return (
        <h3 key={i} className="font-heading text-xl text-foreground mt-8 mb-3">
          {renderInline(block.replace(/^#####\s*/, "").replace(/\*\*/g, ""))}
        </h3>
      );
    }
    if (block.startsWith("### ") || block.startsWith("#### ")) {
      return (
        <h3 key={i} className="font-heading text-2xl text-foreground mt-10 mb-4">
          {renderInline(block.replace(/^#{3,4}\s*/, "").replace(/\*\*/g, ""))}
        </h3>
      );
    }
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="font-heading text-3xl text-foreground mt-12 mb-5">
          {renderInline(block.replace(/^##\s*/, "").replace(/\*\*/g, ""))}
        </h2>
      );
    }
    if (block.startsWith("- ")) {
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 mb-6 font-body text-foreground/80">
          {block
            .split("\n")
            .filter((l) => l.trim().startsWith("- "))
            .map((l, j) => (
              <li key={j}>{renderInline(l.trim().replace(/^-\s*/, ""))}</li>
            ))}
        </ul>
      );
    }
    return (
      <p key={i} className="font-body leading-relaxed text-foreground/80 mb-5">
        {renderInline(block)}
      </p>
    );
  });

const LegalPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = legalPages.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (page) {
      document.title = `${page.title} — Connecting Dots`;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", page.description);
    }
  }, [page]);

  if (!page) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back home
        </Link>
        <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">{page.title}</h1>
        <p className="font-body text-muted-foreground mb-12">{page.description}</p>
        <div>{renderContent(page.content)}</div>
      </article>
      <SiteFooter />
    </div>
  );
};

export default LegalPage;
