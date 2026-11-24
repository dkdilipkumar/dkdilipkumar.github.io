import { ArrowRight, ArrowUpRight, Check, Code2, Film, Smartphone, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CreativeMark from "@/components/site/CreativeMark";
import SectionHeading from "@/components/site/SectionHeading";
import { industries } from "@/content/industries";
import { insightTopics, publishedArticles } from "@/content/insights";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site.config";

const capabilities = [
  { label: "Mobile Development", service: "flutter-app-development", icon: Smartphone },
  { label: "Web & E-commerce", service: "website-development", icon: Code2 },
  { label: "AI Content", service: "ai-video-production", icon: Film },
  { label: "Digital Strategy", service: "digital-consulting", icon: TrendingUp },
];

const engagementPaths = [
  {
    number: "01",
    title: "Launch an app idea",
    description: "Clarify the product, build a useful first version, and plan how to introduce it.",
    links: ["digital-consulting", "android-app-development", "ai-video-production"],
  },
  {
    number: "02",
    title: "Fix and grow a store",
    description: "Review the storefront, improve the customer journey, and make product content clearer.",
    links: ["shopify-development", "content-creation", "seo-optimization"],
  },
  {
    number: "03",
    title: "Start a content brand",
    description: "Shape the idea, plan platform-specific stories, and build a repeatable creation workflow.",
    links: ["digital-consulting", "content-creation", "ai-video-production"],
  },
];

const workSteps = ["Understand", "Plan", "Build or create", "Refine and launch", "Support"];

const Home = () => {
  const reelora = projects.find((project) => project.slug === "reelora" && project.published);
  const buildServices = services.filter((service) => service.group === "Build").slice(0, 4);
  const createServices = services.filter((service) => service.group === "Create");
  const growServices = services.filter((service) => service.group === "Grow");

  return (
    <>
      <section className="relative overflow-hidden border-b border-border pt-32 md:pt-36" id="home">
        <div className="page-container grid min-h-[calc(88svh-4.5rem)] items-center gap-14 pb-14 md:grid-cols-12 md:pb-20">
          <div className="relative z-10 md:col-span-7">
            <p className="eyebrow mb-6 flex items-center gap-3 text-brand-blue">
              <span aria-hidden="true" className="h-px w-9 bg-brand-blue" />
              Digital Solutions Architect & Creative Strategist
            </p>
            <h1 className="text-balance max-w-4xl font-display text-5xl font-bold leading-[1.04] text-foreground sm:text-6xl xl:text-7xl">
              <span className="block">Building Digital</span>
              <span className="block">Experiences.</span>
              <span className="block text-brand-blue">Creating with AI.</span>
              <span className="block">Enabling Business</span>
              <span className="block">Growth.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              I combine technology, AI, creativity and digital strategy to help businesses build products, create meaningful content and strengthen their digital presence.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild className="min-h-12 rounded-sm px-5" size="lg">
                <Link to="/contact?source=home-hero">Let’s Discuss Your Project <ArrowUpRight aria-hidden="true" /></Link>
              </Button>
              <Button asChild className="min-h-12 rounded-sm px-5" size="lg" variant="outline">
                <Link to="/projects">Explore My Work <ArrowRight aria-hidden="true" /></Link>
              </Button>
            </div>
            <div className="mt-11 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex h-9 w-9 items-center justify-center border border-border font-display text-xs font-bold text-foreground">DK</span>
              <span>Dilip Kumar <span aria-hidden="true" className="mx-2 text-text-tertiary">/</span> Independent digital practitioner</span>
            </div>
          </div>

          <div aria-label="A connected digital workflow: build, create, and grow" className="relative hidden md:col-span-5 md:block">
            <div className="absolute -left-5 top-7 z-10 border border-border bg-background px-3 py-2 font-mono text-[0.65rem] uppercase text-muted-foreground">Idea → Experience</div>
            <div className="border border-border bg-surface p-5 pt-10">
              <div className="aspect-[1.24] w-full">
                <CreativeMark />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4 font-mono text-[0.65rem] uppercase text-muted-foreground">
                <span>Build / Create / Grow</span>
                <span>01—03</span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-xs leading-5 text-muted-foreground">A clear problem, the right tools, and a thoughtful path from idea to launch.</p>
          </div>
        </div>

        <div aria-label="Explore services by need" className="border-t border-border">
          <div className="page-container grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {capabilities.map(({ label, service, icon: Icon }, index) => (
              <Link className="group flex min-h-16 items-center justify-between gap-3 py-4 sm:px-4 first:sm:pl-0 last:sm:pr-0" key={service} to={`/services/${service}?source=capability-${index + 1}`}>
                <span className="flex items-center gap-3 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  <Icon aria-hidden="true" className="h-4 w-4 text-brand-blue" />
                  {label}
                </span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-text-tertiary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space" id="about-intro">
        <div className="page-container grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeading eyebrow="A broader perspective" title="More Than Development. A Complete Digital Perspective." />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="space-y-5 border-l border-border pl-6 text-base leading-8 text-muted-foreground md:text-lg">
              <p>My work sits at the intersection of technology, creative production and business growth.</p>
              <p>With experience across Android development, Flutter, websites, Shopify and AI-assisted content creation, I approach digital challenges from both a technical and creative perspective.</p>
              <p>The objective is not simply to build something. It is to build the right thing, communicate its value and make it useful for the business and its audience.</p>
            </div>
            <Link className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand-blue" to="/about">Read my story <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface" id="capabilities">
        <div className="page-container section-space">
          <SectionHeading
            eyebrow="One connected practice"
            title="Build. Create. Grow."
            description="Digital work is strongest when the product, the story around it, and the way people find it are considered together."
          />

          <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-8">
            <article className="lg:col-span-7">
              <div className="flex items-start justify-between gap-8 border-t border-border pt-5">
                <div>
                  <p className="font-mono text-xs uppercase text-pillar-build">01 / Build</p>
                  <h3 className="mt-4 font-display text-3xl font-bold md:text-4xl">Useful products, built with purpose.</h3>
                </div>
                <span aria-hidden="true" className="hidden font-mono text-sm text-text-tertiary sm:block">01</span>
              </div>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">Digital products, mobile applications, websites and e-commerce experiences—planned around the problem, not just the platform.</p>
              <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {buildServices.map((service) => <li key={service.slug}><Link className="service-row" to={`/services/${service.slug}`}><span>{service.title}</span><ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link></li>)}
              </ul>
              <Link className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground hover:text-pillar-build" to="/services?group=build">Explore Build services <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
            </article>

            <div className="relative lg:col-span-4 lg:col-start-9">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-1 row-span-2 overflow-hidden border border-border bg-background">
                  <img alt="Reelora home screen showing trending and upcoming movie discovery" className="h-full w-full object-cover object-top" height="1024" loading="lazy" src={reelora?.media[0]?.src} width="500" />
                </div>
                <div className="border border-border bg-card p-4">
                  <p className="font-mono text-[0.65rem] uppercase text-muted-foreground">Architecture notes</p>
                  <p className="mt-5 font-display text-lg font-semibold">UI</p>
                  <div className="my-2 h-px w-6 bg-brand-blue" />
                  <p className="font-display text-lg font-semibold">App logic</p>
                  <div className="my-2 h-px w-6 bg-brand-blue" />
                  <p className="font-display text-lg font-semibold">Firebase / API</p>
                </div>
                <div className="border border-border bg-card p-4">
                  <p className="font-mono text-[0.65rem] uppercase text-muted-foreground">Tools and technologies</p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">Flutter · Firebase · REST APIs · Jetpack Compose</p>
                </div>
              </div>
              <p className="mt-3 font-mono text-[0.65rem] uppercase text-text-tertiary">A real product view and a simplified architecture sketch</p>
            </div>
          </div>

          <div className="mt-20 grid gap-12 border-t border-border pt-8 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  "Understand the product and audience",
                  "Develop the concept and script",
                  "Plan scenes and visual direction",
                  "Produce AI-assisted assets",
                  "Refine narration and editing",
                  "Deliver platform-ready content",
                ].map((step, index) => (
                  <div className="min-h-28 border border-border bg-background p-4" key={step}>
                    <p className="font-mono text-xs text-pillar-create">0{index + 1}</p>
                    <p className="mt-4 text-sm leading-5 text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 font-mono text-[0.65rem] uppercase text-text-tertiary">Workflow storyboard · no sample videos supplied yet</p>
            </div>
            <article className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
              <div className="flex items-start justify-between gap-8 border-t border-border pt-5">
                <div>
                  <p className="font-mono text-xs uppercase text-pillar-create">02 / Create</p>
                  <h3 className="mt-4 font-display text-3xl font-bold md:text-4xl">Creative content, shaped for people.</h3>
                </div>
                <span aria-hidden="true" className="hidden font-mono text-sm text-text-tertiary sm:block">02</span>
              </div>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">AI-powered video production, storytelling and digital content, with human direction and careful review at every step.</p>
              <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {createServices.map((service) => <li key={service.slug}><Link className="service-row" to={`/services/${service.slug}`}><span>{service.title}</span><ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link></li>)}
              </ul>
              <Link className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground hover:text-pillar-create" to="/studio">Explore the AI Content Studio <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
            </article>
          </div>

          <div className="mt-20 grid gap-12 border-t border-border pt-8 lg:grid-cols-12">
            <article className="lg:col-span-6">
              <div className="flex items-start justify-between gap-8 border-t border-border pt-5">
                <div>
                  <p className="font-mono text-xs uppercase text-pillar-grow">03 / Grow</p>
                  <h3 className="mt-4 font-display text-3xl font-bold md:text-4xl">Make the digital presence work harder.</h3>
                </div>
                <span aria-hidden="true" className="hidden font-mono text-sm text-text-tertiary sm:block">03</span>
              </div>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">SEO, digital visibility, business strategy and technology guidance—without promises of rankings, sales, or shortcuts.</p>
              <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {growServices.map((service) => <li key={service.slug}><Link className="service-row" to={`/services/${service.slug}`}><span>{service.title}</span><ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link></li>)}
              </ul>
              <Link className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground hover:text-pillar-grow" to="/services?group=grow">Explore Grow services <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
            </article>
            <div className="lg:col-span-5 lg:col-start-8">
              <div aria-label="A simplified path from discovery to a useful next step" className="border border-border bg-surface p-6" role="img">
                <p className="font-mono text-xs uppercase text-muted-foreground">A clearer path</p>
                <div className="mt-7 space-y-0">
                  {["Discover", "Understand", "Improve", "Measure what matters"].map((item, index) => (
                    <div className="flex items-center gap-4 border-t border-border py-4" key={item}>
                      <span className="font-mono text-xs text-pillar-grow">0{index + 1}</span>
                      <span className="flex-1 font-display text-lg font-semibold">{item}</span>
                      {index < 3 && <span aria-hidden="true" className="h-2 w-2 rounded-full border border-pillar-grow" />}
                    </div>
                  ))}
                </div>
                <p className="mt-3 font-mono text-[0.65rem] uppercase text-text-tertiary">No invented metrics. Just practical steps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space" id="work">
        <div className="page-container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Selected work" title="Real products. Clear contribution." description="A closer look at one verified product project, with original store imagery and direct context." />
            <Link className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-medium text-foreground hover:text-brand-blue" to="/projects">All work <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
          </div>

          {reelora && (
            <article className="mt-12 grid overflow-hidden border border-border bg-surface md:grid-cols-12">
              <div className="grid grid-cols-2 gap-3 p-4 md:col-span-5 md:p-6">
                {reelora.media.slice(0, 2).map((media) => (
                  <div className="overflow-hidden border border-border bg-background" key={media.src}>
                    <img alt={media.alt} className="h-full w-full object-cover object-top" height={media.height} loading="lazy" src={media.src} width={media.width} />
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center border-t border-border p-6 md:col-span-7 md:border-l md:border-t-0 md:p-10">
                <div className="flex items-center gap-3">
                  <img alt="" className="h-10 w-10 rounded-sm" height="512" loading="lazy" src={reelora.media.length ? projects.find((project) => project.slug === "reelora")?.media[0]?.src : ""} width="512" />
                  <span className="eyebrow text-brand-success">Available on PhonePe Appstore</span>
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold md:text-4xl">Reelora</h3>
                <p className="mt-2 font-mono text-xs uppercase text-muted-foreground">Mobile application · Entertainment</p>
                <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">A Flutter movie and TV discovery app using Firebase and TMDb data. It brings together trending, popular, and upcoming titles, search across countries and languages, favourites, and a watchlist.</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {reelora.stack.map((tool) => <span className="border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground" key={tool}>{tool}</span>)}
                </div>
                <p className="mt-5 max-w-xl text-xs leading-5 text-muted-foreground">{reelora.attribution}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild className="rounded-sm">
                    <a href={reelora.links[0]?.url} rel="noopener noreferrer" target="_blank">Open PhonePe Appstore <ArrowUpRight aria-hidden="true" /></a>
                  </Button>
                  <Button asChild className="rounded-sm" variant="outline">
                    <Link to="/projects/reelora">Read the case study <ArrowRight aria-hidden="true" /></Link>
                  </Button>
                </div>
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="border-y border-border bg-surface" id="engagement-paths">
        <div className="page-container section-space">
          <SectionHeading eyebrow="Where the pillars meet" title="One goal can need more than one tool." description="Start with the business need. Then connect the right mix of product, content, and visibility." />
          <div className="mt-12 grid gap-0 border-y border-border md:grid-cols-3 md:divide-x md:divide-border">
            {engagementPaths.map((path) => (
              <article className="py-7 md:px-6 md:first:pl-0 md:last:pr-0" key={path.number}>
                <p className="font-mono text-xs text-brand-blue">{path.number} / PATH</p>
                <h3 className="mt-4 font-display text-2xl font-semibold">{path.title}</h3>
                <p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">{path.description}</p>
                <ul className="mt-5 space-y-2">
                  {path.links.map((slug) => {
                    const service = services.find((item) => item.slug === slug);
                    if (!service) return null;
                    return <li key={slug}><Link className="inline-flex min-h-9 items-center gap-2 text-sm text-muted-foreground hover:text-foreground" to={`/services/${slug}`}><Check aria-hidden="true" className="h-3.5 w-3.5 text-brand-success" />{service.title}</Link></li>;
                  })}
                </ul>
                <Link className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground hover:text-brand-blue" to={`/contact?source=path-${path.number}`}>Discuss this path <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space" id="studio-teaser">
        <div className="page-container grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="eyebrow mb-4 text-pillar-create">A creative workflow, not a video reel</p>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">Creative Content. Powered by AI. Designed for People.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">I help businesses turn ideas and products into engaging video experiences using a combination of storytelling, creative direction and AI-assisted production.</p>
            <Button asChild className="mt-7 min-h-11 rounded-sm" variant="outline">
              <Link to="/studio">Explore the Studio <ArrowUpRight aria-hidden="true" /></Link>
            </Button>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <div className="border border-border bg-surface p-6">
              <p className="font-mono text-xs uppercase text-muted-foreground">Production sequence</p>
              <ol className="mt-5 space-y-4">
                {["Product and audience", "Concept and script", "Scenes and visual direction", "AI-assisted production", "Review and delivery"].map((step, index) => (
                  <li className="flex items-start gap-4" key={step}>
                    <span className="font-mono text-xs text-pillar-create">0{index + 1}</span>
                    <span className="text-sm text-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface" id="industries-strip">
        <div className="page-container section-space">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Who I work with" title="Different businesses. Different challenges." description="The examples are illustrative, not restrictive. The right solution starts with the actual problem." />
            <Link className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground hover:text-brand-blue" to="/industries">Explore industries <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-2">
            {industries.map((industry) => (
              <Link className="border border-border px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-brand-blue hover:text-foreground" key={industry.name} to={`/industries#${industry.name.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}>{industry.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space" id="process">
        <div className="page-container grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeading eyebrow="How I work" title="A clear process keeps the work useful." description="The steps are simple. The detail depends on the project." />
          </div>
          <ol className="md:col-span-6 md:col-start-7">
            {workSteps.map((step, index) => (
              <li className="flex items-center gap-5 border-t border-border py-5 last:border-b" key={step}>
                <span className="font-mono text-xs text-brand-blue">0{index + 1}</span>
                <span className="font-display text-xl font-semibold">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-border bg-surface" id="insights-teaser">
        <div className="page-container section-space grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionHeading eyebrow="Insights in progress" title="Useful notes, reviewed before they go live." description="The first articles are being prepared from real project experience. Drafts stay unpublished until they are reviewed." />
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="font-mono text-xs uppercase text-muted-foreground">Topics</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{insightTopics.slice(0, 6).join(" · ")}</p>
            <Link className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground hover:text-brand-blue" to="/insights">Visit Insights <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
          </div>
          {publishedArticles.length > 0 && <p className="sr-only">{publishedArticles.length} reviewed articles are available.</p>}
        </div>
      </section>

      <section className="section-space" id="contact-cta">
        <div className="page-container">
          <div className="relative overflow-hidden border border-border bg-surface px-6 py-12 md:px-12 md:py-16">
            <div className="absolute inset-x-0 top-0 h-px bg-accent-rule" />
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="eyebrow mb-4 text-brand-blue">Have a project in mind?</p>
                <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">Let’s make the next step clear.</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">Share what you’re trying to build, create, or improve. I’ll start by understanding the problem.</p>
              </div>
              <div className="md:col-span-4 md:flex md:justify-end">
                <Button asChild className="min-h-12 rounded-sm px-5" size="lg">
                  <Link to="/contact?source=home-close">Tell me about your project <ArrowUpRight aria-hidden="true" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;