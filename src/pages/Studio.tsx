import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";

const formats = ["AI product explainers", "AI presenter videos", "Promotional videos", "Educational videos", "Social media content", "YouTube Shorts", "Brand storytelling"];
const process = ["Understand the product and audience.", "Develop the concept and script.", "Plan scenes and visual direction.", "Produce AI-assisted video assets.", "Refine narration and editing.", "Deliver platform-ready content."];

const StudioPage = () => {
  const [activeFormat, setActiveFormat] = useState(formats[0]);

  return (
    <>
      <section className="page-container pb-16 pt-32 md:pb-24 md:pt-40"><p className="eyebrow mb-5 text-pillar-create">AI Content Studio</p><h1 className="max-w-5xl font-display text-4xl font-bold leading-tight md:text-6xl">Creative Content. Powered by AI. Designed for People.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">I help businesses turn ideas and products into engaging video experiences using a combination of storytelling, creative direction and AI-assisted production.</p></section>
      <section className="border-y border-border bg-surface"><div className="page-container section-space"><SectionHeading eyebrow="Formats" title="Choose the format that fits the story." description="Video examples will appear only after DK supplies and approves them. This page shows the workflow without inventing thumbnails." />
        <div aria-label="Content format" className="mt-9 flex flex-wrap gap-2" role="tablist">{formats.map((format, index) => <Button aria-selected={activeFormat === format} className="min-h-11 rounded-sm" key={format} onClick={() => setActiveFormat(format)} onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); const shift = event.key === "ArrowRight" ? 1 : -1; const next = (index + shift + formats.length) % formats.length; setActiveFormat(formats[next]); } }} role="tab" tabIndex={activeFormat === format ? 0 : -1} variant={activeFormat === format ? "default" : "outline"}>{format}</Button>)}</div>
        <div aria-live="polite" className="mt-8 grid min-h-60 items-center border border-border bg-background p-6 md:grid-cols-12 md:p-10" role="tabpanel"><div className="md:col-span-7"><p className="font-mono text-xs uppercase text-pillar-create">Selected format</p><h2 className="mt-4 font-display text-3xl font-bold">{activeFormat}</h2><p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">No public samples are available for this format yet. The concept, script, visual direction, and review process can still be planned around your brand.</p></div><div className="mt-8 border-l border-border pl-6 md:col-span-4 md:col-start-9 md:mt-0"><p className="font-mono text-xs uppercase text-muted-foreground">A useful brief includes</p><ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground"><li>— Product or offer</li><li>— Audience and platform</li><li>— Tone and reference videos</li><li>— Brand assets and deadline</li></ul></div></div>
      </div></section>
      <section className="page-container section-space"><div className="grid gap-10 md:grid-cols-12"><div className="md:col-span-5"><SectionHeading eyebrow="Workflow" title="From brief to platform-ready content." /></div><ol className="md:col-span-6 md:col-start-7">{process.map((step, index) => <li className="flex gap-5 border-t border-border py-5 text-sm leading-6 text-muted-foreground last:border-b" key={step}><span className="font-mono text-xs text-pillar-create">0{index + 1}</span>{step}</li>)}</ol></div></section>
      <section className="border-y border-border bg-surface"><div className="page-container flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between"><div><p className="eyebrow mb-3">Let’s make a concept</p><h2 className="font-display text-2xl font-bold">Create something for your brand.</h2></div><Button asChild className="min-h-12 rounded-sm" size="lg"><Link to="/contact?service=ai-video-production&source=studio">Let’s Create Something for Your Brand <ArrowUpRight aria-hidden="true" /></Link></Button></div></section>
    </>
  );
};

export default StudioPage;