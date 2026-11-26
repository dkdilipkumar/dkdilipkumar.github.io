import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";
import { siteConfig } from "@/content/site.config";

const story = [
  "I’m DK (Dilip Kumar), a technology and digital growth professional interested in building useful products and creating meaningful digital experiences.",
  "My professional journey includes native Android application development using Java and Kotlin, cross-platform development using Flutter, website development, Shopify and e-commerce optimization, and AI-powered content production.",
  "Over time, my perspective expanded beyond software development.",
  "I became increasingly interested in how technology, creativity, AI and business strategy can work together to solve real problems.",
  "Today, I bring these disciplines together to help startups, entrepreneurs, creators and businesses develop digital products, create compelling content and strengthen their online presence.",
  "I believe good digital solutions begin with understanding the problem, choosing the right approach and executing with attention to quality and purpose.",
];

const principles = [
  "MVVM and clean architecture",
  "Null safety and exception handling",
  "Interfaces that adapt across screen sizes",
  "Battery and network awareness",
  "Modular, maintainable code",
  "Native integrations where the product needs them",
  "Post-release care, SDK updates, and user feedback",
];

const toolkit = [
  { category: "Mobile", items: "Java · Kotlin · Flutter · Android · Jetpack Compose" },
  { category: "Backend & integration", items: "Firebase · Room DB · REST APIs" },
  { category: "Web & commerce", items: "Shopify · Lovable · Claude-assisted development" },
  { category: "AI & creative", items: "AI-assisted video · scripting · presenter workflows · storytelling" },
  { category: "Digital growth", items: "SEO · website optimization · e-commerce · UX · strategy" },
];

const AboutPage = () => (
  <>
    <section className="page-container pb-16 pt-32 md:pb-24 md:pt-40">
      <p className="eyebrow mb-5 text-brand-blue">About DK</p>
      <h1 className="max-w-5xl font-display text-4xl font-bold leading-tight md:text-6xl">Technology Has Always Been My Foundation. Creativity Expanded My Perspective.</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">I work across digital products, creative production, and business growth—with a focus on clear decisions and useful outcomes.</p>
    </section>

    <section className="border-y border-border bg-surface">
      <div className="page-container grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <aside className="md:col-span-4">
          <div aria-label="Portrait placeholder for Dilip Kumar" className="relative flex aspect-[4/5] flex-col justify-between border border-border bg-background p-6" role="img">
            <div className="absolute inset-x-6 top-6 h-px bg-accent-rule" />
            <span className="font-mono text-xs uppercase text-muted-foreground">Portrait</span>
            <div><span className="font-display text-7xl font-extrabold text-foreground md:text-8xl">DK</span><p className="mt-3 border-t border-border pt-3 font-mono text-xs uppercase text-muted-foreground">Photo to be supplied by DK</p></div>
            <span className="font-mono text-xs uppercase text-text-tertiary">India · Worldwide</span>
          </div>
        </aside>
        <div className="space-y-5 md:col-span-7 md:col-start-6">
          {story.map((paragraph) => <p className="text-base leading-8 text-muted-foreground md:text-lg" key={paragraph}>{paragraph}</p>)}
          <div className="flex flex-wrap gap-3 pt-4">
            {siteConfig.socialProfiles.filter((profile) => ["LinkedIn", "GitHub", "DEV.to", "X"].includes(profile.name) && profile.visible).map((profile) => <Button asChild className="min-h-11 rounded-sm" key={profile.name} variant="outline"><a href={profile.url} rel="noopener noreferrer" target="_blank">{profile.name} <ArrowUpRight aria-hidden="true" /></a></Button>)}
          </div>
        </div>
      </div>
    </section>

    <section className="section-space page-container">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5"><SectionHeading eyebrow="Engineering principles" title="How I build" description="Good technical choices support the people using the product and the people maintaining it." /></div>
        <ul className="grid gap-x-8 md:col-span-6 md:col-start-7 md:grid-cols-2">
          {principles.map((principle) => <li className="flex gap-3 border-t border-border py-4 text-sm leading-6 text-muted-foreground" key={principle}><Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-brand-success" />{principle}</li>)}
        </ul>
      </div>
    </section>

    <section className="border-y border-border bg-surface" id="toolkit">
      <div className="page-container section-space">
        <SectionHeading eyebrow="Tools and technologies I work with" title="A practical toolkit, chosen for the work." />
        <div className="mt-10 border-t border-border">
          {toolkit.map((item) => <div className="grid gap-2 border-b border-border py-5 md:grid-cols-12 md:gap-8" key={item.category}><h3 className="font-mono text-xs uppercase text-brand-blue md:col-span-3">{item.category}</h3><p className="text-sm leading-6 text-muted-foreground md:col-span-8">{item.items}</p></div>)}
        </div>
        <p className="mt-5 text-xs leading-5 text-muted-foreground">Tools are listed as part of my working toolkit; they do not imply formal certification.</p>
      </div>
    </section>

    <section className="page-container section-space">
      <div className="grid gap-8 border border-border bg-surface p-6 md:grid-cols-12 md:items-center md:p-10">
        <div className="md:col-span-8"><p className="eyebrow mb-3">Beyond client work</p><h2 className="font-display text-3xl font-bold">Independent brands are part of the practice.</h2><p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">Daily Uplift Bhakti and ArthaVectonomy explore how distinct ideas need distinct voices, formats, and publishing choices.</p></div>
        <div className="md:col-span-4 md:flex md:justify-end"><Button asChild className="min-h-11 rounded-sm" variant="outline"><Link to="/brands">Explore the brands <ArrowUpRight aria-hidden="true" /></Link></Button></div>
      </div>
    </section>
  </>
);

export default AboutPage;