import reeloraIcon from "@/assets/reelora-icon.webp.asset.json";
import reeloraSearch from "@/assets/reelora-search.webp.asset.json";
import reeloraDetail from "@/assets/reelora-detail.webp.asset.json";
import reeloraDiscovery from "@/assets/reelora-discovery.webp.asset.json";
import reeloraPreferences from "@/assets/reelora-preferences.webp.asset.json";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  name: string;
  status: "live" | "prototype" | "concept" | "draft";
  category: string;
  industry: string;
  objective: string;
  contribution: string;
  stack: string[];
  features: string[];
  links: ProjectLink[];
  media: { src: string; alt: string; width: number; height: number }[];
  published: boolean;
  notes?: string;
  attribution?: string;
}

export const projects: Project[] = [
  {
    slug: "reelora",
    name: "Reelora",
    status: "live",
    category: "Mobile Applications",
    industry: "Entertainment",
    objective: "Make movie and TV discovery easier across countries and languages.",
    contribution: "Built a Flutter discovery app using Firebase and TMDb data.",
    stack: ["Flutter", "Firebase", "TMDb API"],
    features: ["Trending, popular, and upcoming trailers", "Search across countries and languages", "Favourites and a watchlist", "Premium streaming-availability information"],
    links: [
      { label: "PhonePe Appstore", url: "https://www.phonepeappstore.com/apps/entertainment/reelora/com.dk.reelora/?page=details&id=com.dk.reelora" },
    ],
    media: [
      { src: reeloraDiscovery.url, alt: "Reelora home screen showing trending, popular, and upcoming movie selections", width: 500, height: 1024 },
      { src: reeloraSearch.url, alt: "Reelora search screen listing movie titles", width: 512, height: 1024 },
      { src: reeloraDetail.url, alt: "Reelora movie detail screen with title information", width: 512, height: 1024 },
      { src: reeloraPreferences.url, alt: "Reelora preferences for language, region, genres, and content settings", width: 500, height: 1024 },
    ],
    published: true,
    notes: "The legacy Google Play listing returned 404 during verification; the PhonePe Appstore listing is live.",
    attribution: "Reelora uses the TMDb API and is not endorsed or certified by TMDb.",
  },
  {
    slug: "tradeos-phoenix",
    name: "tradeos_phoenix",
    status: "draft",
    category: "Mobile Applications",
    industry: "Finance",
    objective: "Early-stage trading-focused mobile app.",
    contribution: "Not published until DK approves the project and confirms his contribution.",
    stack: ["Flutter", "Firebase", "Supabase"],
    features: [],
    links: [],
    media: [],
    published: false,
    notes: "If approved, label Early-stage and include: Engineering project. Not investment advice.",
  },
  ...["Pleyera", "Yatri", "91Servings"].map((name) => ({
    slug: name.toLowerCase(),
    name,
    status: "draft" as const,
    category: "Unverified",
    industry: "Unverified",
    objective: "Awaiting confirmed project details.",
    contribution: "Awaiting DK's confirmed role and permission to publish.",
    stack: [],
    features: [],
    links: [],
    media: [],
    published: false,
  })),
];

export const projectCategories = ["Mobile Applications", "Website Development", "E-commerce", "AI Video Production", "Digital Growth"] as const;