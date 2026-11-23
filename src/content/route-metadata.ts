import { services } from "./services";

export interface RouteMetadata {
  path: string;
  title: string;
  description: string;
  indexable: boolean;
  schemaType?: "Person" | "Service" | "WebPage";
}

const serviceSeo: Record<string, { title: string; description: string }> = {
  "android-app-development": {
    title: "Android App Development in Kotlin & Java | DK",
    description: "Native Android apps with Kotlin, Java, Jetpack Compose, Firebase, Room, and REST APIs. New builds and improvements to existing apps.",
  },
  "flutter-app-development": {
    title: "Flutter App Development Services | DK",
    description: "Cross-platform Flutter apps and MVPs with Firebase and API integrations, taken from idea to a working product.",
  },
  "website-development": {
    title: "Website Development for Businesses | DK",
    description: "Responsive business websites, portfolios, and landing pages built with maintainability and business goals in mind.",
  },
  "shopify-development": {
    title: "Shopify Development & Store Optimization | DK",
    description: "Shopify setup, customization, product-page and UX improvements, SEO, and store reviews for e-commerce businesses.",
  },
  "ai-video-production": {
    title: "AI Video Production Services | DK",
    description: "AI presenter videos, product explainers, ads, and promotional videos, with scripting and creative direction.",
  },
  "content-creation": {
    title: "Content Creation for Brands | DK",
    description: "Reels, YouTube Shorts, and educational content planned, scripted, and produced for your platforms.",
  },
  "seo-optimization": {
    title: "SEO & Website Optimization Services | DK",
    description: "Technical and on-page SEO, site structure, and conversion improvements. No ranking or sales guarantees.",
  },
  "ai-business-solutions": {
    title: "AI & Business Solutions | DK",
    description: "Find practical uses for AI and digital tools across content workflows, automation, and integration planning.",
  },
  "digital-consulting": {
    title: "Digital Consulting for Startups & Businesses | DK",
    description: "Practical guidance on app versus website, technology choices, AI adoption, and digital project planning.",
  },
};

const serviceRoutes: RouteMetadata[] = services.map((service) => {
  const seo = serviceSeo[service.slug];
  return {
    path: `/services/${service.slug}`,
    title: seo?.title ?? `${service.title} | DK`,
    description: seo?.description ?? service.summary,
    indexable: true,
    schemaType: "Service",
  };
});

export const routeMetadata: RouteMetadata[] = [
  {
    path: "/",
    title: "DK | Digital Solutions Architect & Creative Strategist",
    description: "Mobile apps, websites, Shopify, and AI-assisted content. I help businesses turn ideas into useful digital experiences.",
    indexable: true,
    schemaType: "Person",
  },
  {
    path: "/about",
    title: "About DK | Technology, Creativity & Digital Strategy",
    description: "Meet Dilip Kumar (DK), working across mobile apps, websites, e-commerce, AI-assisted content, and digital growth.",
    indexable: true,
    schemaType: "Person",
  },
  {
    path: "/services",
    title: "Digital Services for Products, Content & Growth | DK",
    description: "Explore app and website development, AI-assisted content, Shopify, SEO, and practical digital consulting.",
    indexable: true,
    schemaType: "WebPage",
  },
  ...serviceRoutes,
  {
    path: "/projects",
    title: "Projects & Case Studies | DK",
    description: "Selected digital product work and project notes from Dilip Kumar, with verified details and direct project links.",
    indexable: true,
    schemaType: "WebPage",
  },
  {
    path: "/studio",
    title: "AI Content Studio | DK",
    description: "AI-assisted video production shaped by storytelling, creative direction, and careful human review.",
    indexable: true,
    schemaType: "WebPage",
  },
  {
    path: "/brands",
    title: "Digital Brands by DK",
    description: "Independent content projects exploring devotional storytelling and visual explanations of economics and wealth.",
    indexable: true,
    schemaType: "WebPage",
  },
  {
    path: "/industries",
    title: "Digital Solutions by Industry | DK",
    description: "Practical digital products, creative content, and growth support for businesses across different industries.",
    indexable: true,
    schemaType: "WebPage",
  },
  {
    path: "/insights",
    title: "Insights on Apps, AI, Shopify & SEO | DK",
    description: "Practical notes on product development, content, e-commerce, search, and digital strategy.",
    indexable: true,
    schemaType: "WebPage",
  },
  {
    path: "/contact",
    title: "Start a Project | Contact DK",
    description: "Tell DK about your digital project, content brief, or business challenge.",
    indexable: true,
    schemaType: "WebPage",
  },
  {
    path: "/contact/thanks",
    title: "Enquiry Received | DK",
    description: "Your project enquiry has been received.",
    indexable: false,
    schemaType: "WebPage",
  },
  {
    path: "/privacy",
    title: "Privacy Notice Draft | DK",
    description: "Draft privacy information for review before publication.",
    indexable: false,
    schemaType: "WebPage",
  },
  {
    path: "/terms",
    title: "Terms Draft | DK",
    description: "Draft website terms for review before publication.",
    indexable: false,
    schemaType: "WebPage",
  },
];

export const getRouteMetadata = (path: string) =>
  routeMetadata.find((route) => route.path === path) ?? {
    path,
    title: "Page Not Found | DK",
    description: "The requested page could not be found.",
    indexable: false,
    schemaType: "WebPage" as const,
  };