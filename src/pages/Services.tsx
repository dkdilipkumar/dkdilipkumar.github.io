import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";
import { projects } from "@/content/projects";
import { serviceGroups, services } from "@/content/services";
import type { Service, ServiceGroup } from "@/content/services";

const groupAccent: Record<ServiceGroup, string> = {
  Build: "text-pillar-build",
  Create: "text-pillar-create",
  Grow: "text-pillar-grow",
};

const ServiceCard = ({ service }: { service: Service }) => (
  <article className="group border-t border-border py-5">
    <Link className="flex min-h-11 items-center justify-between gap-4" to={`/services/${service.slug}`}>
      <span><span className="block font-display text-xl font-semibold text-foreground transition-colors group-hover:text-brand-blue">{service.title}</span><span className="mt-2 block max-w-xl text-sm leading-6 text-muted-foreground">{service.summary}</span></span>
      <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  </article>
);

export const ServicesPage = () => (
  <>
    <section className="page-container pb-16 pt-32 md:pb-24 md:pt-40">
      <p className="eyebrow mb-5 text-brand-blue">Services</p>
      <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">A connected set of ways to move a digital idea forward.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Build the product, create the story around it, and make the next step easier to find.</p>
    </section>
    <section className="border-y border-border bg-surface">
      <div className="page-container section-space">
        <div className="grid gap-14 lg:grid-cols-3 lg:gap-10">
          {serviceGroups.map((group) => (
            <section aria-labelledby={`service-group-${group.name.toLowerCase()}`} key={group.name}>
              <p className={`font-mono text-xs uppercase ${groupAccent[group.name]}`}>{group.name}</p>
              <h2 className="mt-4 font-display text-2xl font-bold" id={`service-group-${group.name.toLowerCase()}`}>{group.name} with intent.</h2>
              <p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{group.description}</p>
              <div className="mt-6">{services.filter((service) => service.group === group.name).map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
            </section>
          ))}
        </div>
      </div>
    </section>
    <section className="page-container section-space">
      <div className="grid gap-8 md:grid-cols-12 md:items-center">
        <div className="md:col-span-8"><SectionHeading eyebrow="Not sure what you need?" title="Start with the challenge, not a service label." description="A short conversation can help clarify the right first step before any delivery scope is discussed." /></div>
        <div className="md:col-span-4 md:flex md:justify-end"><Button asChild className="min-h-12 rounded-sm" size="lg"><Link to="/contact?service=digital-consulting&source=services-hub">Book a Consultation <ArrowUpRight aria-hidden="true" /></Link></Button></div>
      </div>
    </section>
  </>
);

export const ServiceDetailPage = () => {
  const { slug = "" } = useParams();
  const service = services.find((item) => item.slug === slug);
  if (!service) return <ServicesPage />;
  const relatedProjects = projects.filter((project) => project.published && service.relatedProjects.includes(project.slug));

  return (
    <>
      <section className="page-container pb-16 pt-32 md:pb-24 md:pt-40">
        <nav aria-label="Breadcrumb" className="mb-7 font-mono text-xs uppercase text-muted-foreground"><Link className="hover:text-foreground" to="/services">Services</Link><span aria-hidden="true" className="mx-3">/</span><span>{service.group}</span></nav>
        <p className={`eyebrow mb-5 ${groupAccent[service.group]}`}>{service.group} / Service</p>
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">{service.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{service.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button asChild className="min-h-12 rounded-sm" size="lg"><Link to={`/contact?service=${service.slug}&source=service-${service.slug}`}>Start a Project <ArrowUpRight aria-hidden="true" /></Link></Button><Button asChild className="min-h-12 rounded-sm" size="lg" variant="outline"><Link to="/services">All services <ArrowRight aria-hidden="true" /></Link></Button></div>
      </section>
      <section className="border-y border-border bg-surface"><div className="page-container grid gap-10 py-16 md:grid-cols-12 md:py-20"><div className="md:col-span-5"><SectionHeading eyebrow="01 / The problem" title="What this service helps solve" /></div><p className="max-w-2xl text-lg leading-8 text-muted-foreground md:col-span-6 md:col-start-7">{service.problem}</p></div></section>
      <section className="page-container grid gap-10 py-16 md:grid-cols-12 md:py-20"><div className="md:col-span-5"><SectionHeading eyebrow="02 / Fit" title="Who this is for" /></div><p className="max-w-2xl text-lg leading-8 text-muted-foreground md:col-span-6 md:col-start-7">{service.audience}</p></section>
      <section className="border-y border-border bg-surface"><div className="page-container grid gap-10 py-16 md:grid-cols-12 md:py-20"><div className="md:col-span-5"><SectionHeading eyebrow="03 / Deliverables" title="What I can deliver" /></div><ul className="md:col-span-6 md:col-start-7">{service.deliverables.map((item) => <li className="flex gap-3 border-t border-border py-4 text-sm leading-6 text-muted-foreground last:border-b" key={item}><Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-brand-success" />{item}</li>)}</ul></div></section>
      <section className="page-container grid gap-10 py-16 md:grid-cols-12 md:py-20"><div className="md:col-span-5"><SectionHeading eyebrow="04 / Engagement" title="How we work together" /></div><ol className="md:col-span-6 md:col-start-7">{service.engagement.map((step, index) => <li className="flex gap-4 border-t border-border py-4 text-sm leading-6 text-muted-foreground last:border-b" key={step}><span className="font-mono text-xs text-brand-blue">0{index + 1}</span>{step}</li>)}</ol></section>
      <section className="border-y border-border bg-surface"><div className="page-container grid gap-10 py-16 md:grid-cols-12 md:py-20"><div className="md:col-span-5"><SectionHeading eyebrow="05 / Getting started" title="What I need to start" /></div><ul className="grid gap-x-8 md:col-span-6 md:col-start-7 md:grid-cols-2">{service.startingInfo.map((item) => <li className="flex gap-3 border-t border-border py-4 text-sm leading-6 text-muted-foreground" key={item}><Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-brand-blue" />{item}</li>)}</ul></div></section>
      {relatedProjects.length > 0 && <section className="page-container py-16 md:py-20"><p className="eyebrow mb-4">Related work</p>{relatedProjects.map((project) => <Link className="group flex min-h-14 items-center justify-between border-y border-border py-4" key={project.slug} to={`/projects/${project.slug}`}><span><span className="block font-display text-xl font-semibold">{project.name}</span><span className="mt-1 block text-sm text-muted-foreground">{project.category} · {project.industry}</span></span><ArrowUpRight aria-hidden="true" className="h-4 w-4 text-muted-foreground group-hover:text-foreground" /></Link>)}</section>}
      <section className="border-y border-border bg-surface"><div className="page-container section-space"><SectionHeading eyebrow="Questions" title="A few things to know" /><div className="mt-8 max-w-4xl border-t border-border">{service.faqs.map((faq) => <details className="group border-b border-border py-5" key={faq.question}><summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold marker:hidden">{faq.question}<span aria-hidden="true" className="font-mono text-brand-blue transition-transform group-open:rotate-45">+</span></summary><p className="pb-2 pr-8 text-sm leading-7 text-muted-foreground">{faq.answer}</p></details>)}</div></div></section>
      <section className="page-container section-space"><div className="border border-border bg-surface p-6 md:p-10"><p className="eyebrow mb-4">06 / Enquire</p><h2 className="font-display text-3xl font-bold">Let’s discuss {service.title.toLowerCase()}.</h2><p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">Tell me what you’re working on and what you need to decide or improve.</p><Button asChild className="mt-7 min-h-12 rounded-sm" size="lg"><Link to={`/contact?service=${service.slug}&source=service-${service.slug}`}>Tell me about your project <ArrowUpRight aria-hidden="true" /></Link></Button></div></section>
    </>
  );
};