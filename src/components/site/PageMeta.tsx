import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAbsoluteUrl } from "@/content/site.config";
import { getRouteMetadata } from "@/content/route-metadata";

const setMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
};

export const PageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = getRouteMetadata(pathname);
    const canonical = getAbsoluteUrl(pathname);
    document.title = metadata.title;
    setMeta('meta[name="description"]', "name", "description", metadata.description);
    setMeta('meta[property="og:title"]', "property", "og:title", metadata.title);
    setMeta('meta[property="og:description"]', "property", "og:description", metadata.description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", metadata.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", metadata.description);

    let canonicalElement = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement("link");
      canonicalElement.rel = "canonical";
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.href = canonical;

    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!metadata.indexable) {
      if (!robots) {
        robots = document.createElement("meta");
        robots.name = "robots";
        document.head.appendChild(robots);
      }
      robots.content = "noindex,follow";
    } else {
      robots?.remove();
    }
  }, [pathname]);

  return null;
};