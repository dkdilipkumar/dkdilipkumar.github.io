import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";
import { projects, projectCategories } from "@/content/projects";

export const ProjectsPage = () => {
  const [category, setCategory] = useState<string>("All work");
  const visibleProjects = useMemo(() => projects.filter((project) => project.published && (category === "All work" || project.category === category)), [category]);
  const filters = ["All work", ...projectCategories];

  return (
    <>
      <section className="page-container pb-14 pt-32 md:pb-20 md:pt-40"><p className="eyebrow mb-5 text-brand-blue">Work</p><h1 className="max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">Selected projects, documented with care.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Only work with verifiable details and approved media appears here. Drafts stay private until their facts and assets are confirmed.</p></section>
      <section className="border-y border-border bg-surface"><div className="page-container section-space">
        <div aria-label="Filter projects by category" className="flex flex-wrap gap-2" role="group">{filters.map((filter) => <Button aria-pressed={category === filter} className="min-h-11 rounded-sm" key={filter} onClick={() => setCategory(filter)} variant={category === filter ? "default" : "outline"}>{filter}</Button>)}</div>
        <div aria-live="polite" className="mt-10">
          {visibleProjects.length === 0 ? <div className="border-t border-border py-12"><p className="font-display text-2xl font-semibold">No published projects in this category yet.</p><p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">Unverified work and entries without approved media remain hidden. More project details can be added when they are ready to share.</p></div> : <div className="grid gap-5 md:grid-cols-2">{visibleProjects.map((project) => <article className="border border-border bg-background" key={project.slug}><Link className="group block" to={`/projects/${project.slug}`}><div className="grid grid-cols-2 gap-2 border-b border-border bg-surface p-4">{project.media.slice(0, 2).map((media) => <img alt={media.alt} className="h-72 w-full border border-border object-cover object-top" height={media.height} key={media.src} loading="lazy" src={media.src} width={media.width} />)}</div><div className="p-5"><div className="flex items-center justify-between gap-3"><p className="font-mono text-xs uppercase text-brand-success">{project.status}</p><ArrowUpRight aria-hidden="true" className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div><h2 className="mt-3 font-display text-2xl font-bold">{project.name}</h2><p className="mt-2 font-mono text-xs uppercase text-muted-foreground">{project.category} · {project.industry}</p><p className="mt-4 text-sm leading-6 text-muted-foreground">{project.objective}</p></div></Link></article>)}</div>}
        </div>
        <p className="mt-8 text-xs leading-5 text-muted-foreground">Project results are not stated unless they have been verified and approved for publication.</p>
      </div></section>
      <section className="page-container section-space"><SectionHeading eyebrow="Have a related project?" title="Tell me what you’re trying to make possible." /><Button asChild className="mt-6 min-h-12 rounded-sm" size="lg"><Link to="/contact?source=projects">Start a Project <ArrowRight aria-hidden="true" /></Link></Button></section>
    </>
  );
};

export const ProjectDetailPage = () => {
  const { slug = "" } = useParams();
  const project = projects.find((item) => item.slug === slug && item.published);
  if (!project) return <ProjectsPage />;

  return (
    <>
      <section className="page-container pb-12 pt-32 md:pb-16 md:pt-40"><nav aria-label="Breadcrumb" className="mb-7 font-mono text-xs uppercase text-muted-foreground"><Link className="hover:text-foreground" to="/projects">Work</Link><span aria-hidden="true" className="mx-3">/</span><span>{project.name}</span></nav><p className="eyebrow mb-5 text-brand-blue">{project.category} / {project.industry}</p><h1 className="font-display text-5xl font-bold md:text-7xl">{project.name}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{project.objective}</p><div className="mt-7 flex flex-wrap gap-2">{project.stack.map((tool) => <span className="border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground" key={tool}>{tool}</span>)}</div></section>
      <section className="border-y border-border bg-surface"><div className="page-container grid gap-3 py-5 sm:grid-cols-2 lg:grid-cols-4">{project.media.map((media) => <figure className="border border-border bg-background p-2" key={media.src}><img alt={media.alt} className="aspect-[1/2] w-full object-cover object-top" height={media.height} loading="lazy" src={media.src} width={media.width} /></figure>)}</div></section>
      <section className="page-container grid gap-12 py-16 md:grid-cols-12 md:py-24"><div className="md:col-span-5"><p className="eyebrow mb-4">Project notes</p><h2 className="font-display text-3xl font-bold">A discovery-first mobile product.</h2></div><div className="space-y-8 md:col-span-6 md:col-start-7"><div><h3 className="font-display text-lg font-semibold">Objective</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{project.objective} The app is for discovery and does not host or stream films.</p></div><div><h3 className="font-display text-lg font-semibold">Contribution</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{project.contribution}</p></div><div><h3 className="font-display text-lg font-semibold">Verified features</h3><ul className="mt-3 space-y-2">{project.features.map((feature) => <li className="text-sm leading-6 text-muted-foreground" key={feature}>— {feature}</li>)}</ul></div><p className="border-t border-border pt-4 text-xs leading-5 text-muted-foreground">{project.attribution}</p><Button asChild className="min-h-11 rounded-sm"><a href={project.links[0]?.url} rel="noopener noreferrer" target="_blank">Open PhonePe Appstore <ArrowUpRight aria-hidden="true" /></a></Button></div></section>
      <section className="border-y border-border bg-surface"><div className="page-container flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between"><div><p className="eyebrow mb-3">Next step</p><h2 className="font-display text-2xl font-bold">Planning a product of your own?</h2></div><Button asChild className="min-h-11 rounded-sm"><Link to="/contact?service=flutter-app-development&source=project-reelora">Discuss an app idea <ArrowRight aria-hidden="true" /></Link></Button></div></section>
    </>
  );
};