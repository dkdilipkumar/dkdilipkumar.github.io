import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/site/PageMeta";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { siteConfig } from "@/content/site.config";

const CookieConsent = () => {
  const trackingConfigured = Boolean(siteConfig.analytics.gtmId || siteConfig.analytics.ga4Id);
  const [choice, setChoice] = useState<string | null>(null);

  useEffect(() => {
    if (trackingConfigured) setChoice(window.localStorage.getItem("dk-analytics-consent"));
  }, [trackingConfigured]);

  useEffect(() => {
    if (choice !== "accepted") return;
    if (siteConfig.analytics.gtmId && !document.querySelector("script[data-dk-gtm]")) {
      const script = document.createElement("script");
      script.async = true;
      script.dataset.dkGtm = "true";
      script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(siteConfig.analytics.gtmId)}`;
      document.head.appendChild(script);
    }
    if (siteConfig.analytics.ga4Id && !siteConfig.analytics.gtmId && !document.querySelector("script[data-dk-ga]")) {
      const script = document.createElement("script");
      script.async = true;
      script.dataset.dkGa = "true";
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(siteConfig.analytics.ga4Id)}`;
      document.head.appendChild(script);
    }
  }, [choice]);

  if (!trackingConfigured || choice) return null;

  const saveChoice = (nextChoice: "accepted" | "rejected") => {
    window.localStorage.setItem("dk-analytics-consent", nextChoice);
    setChoice(nextChoice);
  };

  return (
    <aside aria-label="Cookie preferences" className="fixed inset-x-4 bottom-20 z-50 border border-border bg-surface p-5 shadow-editorial md:bottom-6 md:left-6 md:right-auto md:max-w-lg">
      <p className="font-display text-lg font-semibold">Privacy choices</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">Optional analytics are disabled until you choose. You can accept or reject them.</p>
      <div className="mt-4 flex gap-3">
        <Button className="min-h-11 rounded-sm" onClick={() => saveChoice("accepted")}>Accept</Button>
        <Button className="min-h-11 rounded-sm" onClick={() => saveChoice("rejected")} variant="outline">Reject</Button>
      </div>
    </aside>
  );
};

const MobileProjectBar = () => {
  const { pathname } = useLocation();
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const viewport = window.visualViewport;
    if (!viewport) return;
    const update = () => setKeyboardOpen(viewport.height < window.innerHeight - 140);
    viewport.addEventListener("resize", update);
    return () => viewport.removeEventListener("resize", update);
  }, []);

  if (pathname.startsWith("/contact") || keyboardOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 px-4 py-3 pb-safe backdrop-blur-md md:hidden">
      <Button asChild className="h-11 w-full rounded-sm">
        <Link to="/contact?source=mobile-sticky">Start a Project <ArrowUpRight aria-hidden="true" /></Link>
      </Button>
    </div>
  );
};

const SiteLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background text-foreground">
    <PageMeta />
    <a className="skip-link" href="#main-content">Skip to content</a>
    <SiteHeader />
    <main id="main-content">{children}</main>
    <SiteFooter />
    <CookieConsent />
    <MobileProjectBar />
  </div>
);

export default SiteLayout;