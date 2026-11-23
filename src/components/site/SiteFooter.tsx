import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { serviceGroups, services } from "@/content/services";
import { siteConfig } from "@/content/site.config";

const SiteFooter = () => (
  <footer className="border-t border-border bg-surface">
    <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
      <div className="grid gap-12 border-b border-border pb-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Link aria-label="DK home" className="inline-flex items-center gap-3" to="/">
            <span className="font-display text-3xl font-extrabold">DK</span>
            <span className="h-8 w-px bg-border" />
            <span className="max-w-48 text-sm leading-5 text-muted-foreground">Digital Solutions Architect & Creative Strategist</span>
          </Link>
          <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">Technology, AI, creativity, and digital strategy—brought together to move useful ideas forward.</p>
          <Button asChild className="mt-7 h-11 rounded-sm" size="sm">
            <Link to="/contact?source=footer">Start a Project <ArrowUpRight aria-hidden="true" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
          {serviceGroups.map((group) => (
            <div key={group.name}>
              <p className={`mb-4 font-mono text-xs uppercase text-pillar-${group.name.toLowerCase()}`}>{group.name}</p>
              <ul className="space-y-3">
                {services.filter((service) => service.group === group.name).map((service) => (
                  <li key={service.slug}><Link className="footer-link" to={`/services/${service.slug}`}>{service.title}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 py-9 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="footer-label">Explore</p>
          <ul className="space-y-3">
            <li><Link className="footer-link" to="/about">About</Link></li>
            <li><Link className="footer-link" to="/projects">Work</Link></li>
            <li><Link className="footer-link" to="/studio">AI Content Studio</Link></li>
            <li><Link className="footer-link" to="/industries">Industries</Link></li>
            <li><Link className="footer-link" to="/insights">Insights</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-label">Social</p>
          <ul className="space-y-3">
            {siteConfig.socialProfiles.filter((profile) => profile.visible).slice(0, 5).map((profile) => (
              <li key={profile.name}><a className="footer-link" href={profile.url} rel="noopener noreferrer" target="_blank">{profile.name}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <ul className="space-y-3">
            <li><Link className="footer-link" to="/contact">Tell me about your project</Link></li>
            {siteConfig.contact.email && <li><a className="footer-link" href={`mailto:${siteConfig.contact.email}`}>Email</a></li>}
            {siteConfig.contact.whatsapp && <li><a className="footer-link" href={`https://wa.me/${siteConfig.contact.whatsapp}`} rel="noopener noreferrer" target="_blank">WhatsApp</a></li>}
            {siteConfig.contact.bookingUrl && <li><a className="footer-link" href={siteConfig.contact.bookingUrl} rel="noopener noreferrer" target="_blank">Book a Consultation</a></li>}
          </ul>
        </div>
        <div>
          <p className="footer-label">Legal</p>
          <ul className="space-y-3">
            <li><Link className="footer-link" to="/privacy">Privacy draft</Link></li>
            <li><Link className="footer-link" to="/terms">Terms draft</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>Working with ideas from India and worldwide.</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;