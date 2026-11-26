import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";
import { insightTopics, publishedArticles } from "@/content/insights";

const InsightsPage = () => {
  const [topic, setTopic] = useState("All topics");
  const articles = useMemo(() => publishedArticles.filter((article) => topic === "All topics" || article.topic === topic), [topic]);

  return (
    <>
      <section className="page-container pb-16 pt-32 md:pb-24 md:pt-40"><p className="eyebrow mb-5 text-brand-blue">Insights</p><h1 className="max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">Useful thinking, grounded in the work.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">Notes on app development, product decisions, AI-assisted content, e-commerce, and digital growth. Articles will be published only after DK reviews them.</p></section>
      <section className="border-y border-border bg-surface"><div className="page-container section-space"><SectionHeading eyebrow="Topics" title="Choose a subject to explore." />
        <div aria-label="Filter insights by topic" className="mt-8 flex flex-wrap gap-2" role="group">{["All topics", ...insightTopics].map((filter) => <Button aria-pressed={topic === filter} className="min-h-11 rounded-sm" key={filter} onClick={() => setTopic(filter)} variant={topic === filter ? "default" : "outline"}>{filter}</Button>)}</div>
        <div aria-live="polite" className="mt-10 border-t border-border py-12">{articles.length === 0 ? <div className="max-w-2xl"><p className="font-display text-2xl font-semibold">No reviewed articles are published yet.</p><p className="mt-3 text-sm leading-7 text-muted-foreground">Drafts stay unpublished until they include useful original detail and have been reviewed. The topic list reflects areas DK is preparing notes on.</p><p className="mt-6 font-mono text-xs uppercase text-muted-foreground">Currently selected: {topic}</p></div> : <div className="grid gap-5 md:grid-cols-2">{articles.map((article) => <article className="border border-border p-5" key={article.slug}><p className="font-mono text-xs uppercase text-muted-foreground">{article.topic}</p><h2 className="mt-4 font-display text-xl font-semibold">{article.title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{article.description}</p><Link className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium" to={`/insights/${article.slug}`}>Read the article <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link></article>)}</div>}</div>
      </div></section>
      <section className="page-container section-space"><SectionHeading eyebrow="Share a question" title="What would be useful to unpack next?" /><Button asChild className="mt-6 min-h-11 rounded-sm" variant="outline"><Link to="/contact?source=insights">Send a note <ArrowUpRight aria-hidden="true" /></Link></Button></section>
    </>
  );
};

export default InsightsPage;