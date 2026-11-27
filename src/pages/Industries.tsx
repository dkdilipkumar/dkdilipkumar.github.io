import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";
import { industries } from "@/content/industries";
import { services } from "@/content/services";

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const IndustriesPage = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(industries[0]?.name ?? "");
  const activeIndustry = industries.find((industry) => industry.name === selected) ?? industries[0];

  useEffect(() => {
    const matchingIndustry = industries.find((industry) => slugify(industry.name) === location.hash.slice(1));
    if (matchingIndustry) setSelected(matchingIndustry.name);
  }, [location.hash]);

  return (
    <>
      <section className="page-container pb-16 pt-32 md:pb-24 md:pt-40"><p className="eyebrow mb-5 text-brand-blue">Industries</p><h1 className="max-w-5xl font-display text-4xl font-bold leading-tight md:text-6xl">Different Businesses. Different Challenges. Practical Digital Solutions.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">The examples below are illustrative, not restrictive. The right approach starts with the needs, people, and constraints of each business.</p></section>
      <section className="border-y border-border bg-surface"><div className="page-container section-space"><div className="grid gap-8 lg:grid-cols-12">
        <div aria-label="Choose an industry" className="flex flex-col lg:col-span-4" role="group">{industries.map((industry) => <Button aria-pressed={selected === industry.name} className="min-h-14 justify-between border-b border-border px-4 text-left" key={industry.name} onClick={() => setSelected(industry.name)} variant="ghost"><span>{industry.name}</span><span aria-hidden="true" className="font-mono text-xs text-brand-blue">{selected === industry.name ? "SELECTED" : "VIEW"}</span></Button>)}</div>
        {activeIndustry && <article aria-live="polite" className="border border-border bg-background p-6 md:p-10 lg:col-span-7 lg:col-start-6" id={slugify(activeIndustry.name)}><p className="font-mono text-xs uppercase text-brand-blue">Industry perspective</p><h2 className="mt-4 font-display text-3xl font-bold">{activeIndustry.name}</h2><p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{activeIndustry.needs}</p><p className="mt-8 font-mono text-xs uppercase text-muted-foreground">Relevant capabilities</p><ul className="mt-4 border-t border-border">{activeIndustry.services.map((slug) => { const service = services.find((item) => item.slug === slug); return service ? <li className="border-b border-border" key={slug}><Link className="flex min-h-12 items-center justify-between gap-4 text-sm text-foreground hover:text-brand-blue" to={`/services/${slug}`}><span>{service.title}</span><ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link></li> : null; })}</ul><Button asChild className="mt-8 min-h-11 rounded-sm"><Link to={`/contact?source=industry-${slugify(activeIndustry.name)}`}>Discuss this kind of project <ArrowUpRight aria-hidden="true" /></Link></Button></article>}
      </div></div></section>
      <section className="page-container section-space"><SectionHeading eyebrow="Practical first step" title="A good brief starts with the business problem." description="If your industry is not listed, you can still share the challenge and the outcome you are working toward." /><Button asChild className="mt-6 min-h-11 rounded-sm" variant="outline"><Link to="/contact?source=industry-page">Start a conversation <ArrowUpRight aria-hidden="true" /></Link></Button></section>
    </>
  );
};

export default IndustriesPage;