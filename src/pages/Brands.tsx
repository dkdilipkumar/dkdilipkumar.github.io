import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";
import { brands } from "@/content/brands";

const BrandsPage = () => (
  <>
    <section className="page-container pb-16 pt-32 md:pb-24 md:pt-40"><p className="eyebrow mb-5 text-brand-blue">Independent projects</p><h1 className="max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">Digital brands, built around distinct ideas.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">These projects show how content strategy, visual language, and platform choices change with the subject and the audience.</p></section>
    <section className="border-y border-border bg-surface"><div className="page-container space-y-8 py-12 md:py-16">
      {brands.map((brand, index) => <article className="grid gap-8 border border-border bg-background p-6 md:grid-cols-12 md:p-10" key={brand.slug}><div className="md:col-span-5"><p className={`font-mono text-xs uppercase ${brand.tone === "calm" ? "text-brand-blue" : "text-pillar-grow"}`}>0{index + 1} / Independent brand</p><h2 className="mt-5 font-display text-3xl font-bold md:text-4xl">{brand.name}</h2><p className="mt-3 font-mono text-xs uppercase text-muted-foreground">{brand.label}</p>{brand.tagline && <p className="mt-5 text-sm text-muted-foreground">{brand.tagline}</p>}</div><div className="md:col-span-6 md:col-start-7"><p className="text-base leading-7 text-muted-foreground">{brand.description}</p><ul className="mt-6 space-y-3 border-t border-border pt-5">{brand.pillars.map((pillar) => <li className="text-sm leading-6 text-foreground" key={pillar}>— {pillar}</li>)}</ul>{brand.disclaimer && <p className="mt-6 border-l border-pillar-create pl-4 text-xs leading-5 text-muted-foreground">{brand.disclaimer}</p>}<div className="mt-7 flex flex-wrap gap-2">{brand.links.map((link) => <Button asChild className="min-h-11 rounded-sm" key={link.label} variant="outline"><a href={link.url} rel="noopener noreferrer" target="_blank">{link.label} <ArrowUpRight aria-hidden="true" /></a></Button>)}</div></div></article>)}
    </div></section>
    <section className="page-container section-space"><div className="grid gap-10 md:grid-cols-12 md:items-end"><div className="md:col-span-7"><SectionHeading eyebrow="What these projects demonstrate" title="Independent content work is product work, too." description="Each brand needs its own point of view, visual system, production rhythm, and platform-aware way of speaking." /></div><div className="md:col-span-4 md:col-start-9"><Button asChild className="min-h-11 rounded-sm" variant="outline"><Link to="/contact?service=content-creation&source=brands">Create content for my brand <ArrowUpRight aria-hidden="true" /></Link></Button></div></div></section>
  </>
);

export default BrandsPage;