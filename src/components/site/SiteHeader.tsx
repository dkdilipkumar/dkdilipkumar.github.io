import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { serviceGroups, services } from "@/content/services";

const primaryLinks = [
  { label: "Work", to: "/projects" },
  { label: "Studio", to: "/studio" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
];

const SiteHeader = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const mobilePanel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let previousScroll = window.scrollY;
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 16);
      setHidden(currentScroll > 120 && currentScroll > previousScroll + 4);
      if (currentScroll < previousScroll - 4) setHidden(false);
      previousScroll = currentScroll;
    };
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const panel = mobilePanel.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusable?.item(0)?.focus();

    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButton.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable.item(0);
      const last = focusable.item(focusable.length - 1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeys);
    return () => document.removeEventListener("keydown", handleKeys);
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const serviceGroupsWithLinks = serviceGroups.map((group) => ({
    ...group,
    links: services.filter((service) => service.group === group.name),
  }));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[transform,background-color,border-color] duration-250 ${
          hidden ? "max-md:-translate-y-full" : "translate-y-0"
        } ${scrolled ? "border-border bg-background/95 backdrop-blur-md" : "border-transparent bg-background/70"} border-b`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1240px] items-center justify-between px-5 md:px-8">
          <Link aria-label="DK home" className="group inline-flex items-center gap-3" to="/">
            <span className="font-display text-xl font-extrabold text-foreground">DK</span>
            <span className="hidden border-l border-border pl-3 font-mono text-[0.68rem] uppercase text-muted-foreground sm:inline-block">
              Digital solutions
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
            <Link className="nav-link" to="/">Home</Link>
            <div className="relative">
              <Button
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className="nav-link gap-1"
                onClick={() => setServicesOpen((open) => !open)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setServicesOpen(false);
                }}
                variant="ghost"
              >
                Services
                <ChevronDown aria-hidden="true" className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </Button>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full mt-3 grid w-[42rem] -translate-x-1/2 grid-cols-3 gap-6 border border-border bg-surface p-6 shadow-editorial">
                  {serviceGroupsWithLinks.map((group) => (
                    <div key={group.name}>
                      <p className={`mb-2 font-mono text-xs uppercase text-pillar-${group.name.toLowerCase()}`}>{group.name}</p>
                      <p className="mb-4 max-w-[17rem] text-xs leading-5 text-muted-foreground">{group.description}</p>
                      <ul className="space-y-1">
                        {group.links.map((service) => (
                          <li key={service.slug}>
                            <Link className="menu-link" onClick={() => setServicesOpen(false)} to={`/services/${service.slug}`}>
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {primaryLinks.map((link) => (
              <Link className={`nav-link ${location.pathname.startsWith(link.to) ? "text-foreground" : ""}`} key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
            <Link className="nav-link" to="/contact">Contact</Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild className="h-10 rounded-sm px-4" size="sm">
              <Link to="/contact?source=header">Start a Project <ArrowUpRight aria-hidden="true" /></Link>
            </Button>
          </div>

          <Button
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            className="h-11 w-11 lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            ref={menuButton}
            size="icon"
            variant="ghost"
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </header>

      {mobileOpen && (
        <div aria-label="Mobile navigation" aria-modal="true" className="fixed inset-0 z-50 overflow-y-auto bg-background lg:hidden" ref={mobilePanel} role="dialog">
          <div className="flex min-h-full flex-col px-6 pb-safe pt-5">
            <div className="flex h-[4.5rem] items-center justify-between border-b border-border">
              <Link className="font-display text-xl font-extrabold" onClick={() => setMobileOpen(false)} to="/">DK</Link>
              <Button aria-label="Close navigation" className="h-11 w-11" onClick={() => setMobileOpen(false)} size="icon" variant="ghost"><X aria-hidden="true" /></Button>
            </div>
            <nav aria-label="Mobile primary navigation" className="flex flex-1 flex-col py-8">
              {[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Services", to: "/services" }, ...primaryLinks, { label: "Industries", to: "/industries" }, { label: "Contact", to: "/contact" }].map((link, index) => (
                <Link className="border-b border-border py-4 font-display text-2xl text-foreground" key={`${link.label}-${index}`} onClick={() => setMobileOpen(false)} to={link.to}>{link.label}</Link>
              ))}
              <div className="mt-6 grid gap-1">
                {services.map((service) => (
                  <Link className="py-2 text-sm text-muted-foreground" key={service.slug} onClick={() => setMobileOpen(false)} to={`/services/${service.slug}`}>{service.title}</Link>
                ))}
              </div>
              <Button asChild className="mt-8 h-12 w-full rounded-sm" size="lg">
                <Link onClick={() => setMobileOpen(false)} to="/contact?source=mobile-nav">Start a Project <ArrowUpRight aria-hidden="true" /></Link>
              </Button>
            </nav>
            <p className="border-t border-border py-5 font-mono text-xs uppercase text-muted-foreground">Digital Solutions Architect & Creative Strategist</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteHeader;