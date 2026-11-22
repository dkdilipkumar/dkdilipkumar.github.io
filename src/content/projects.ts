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
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.dk.reelora" },
      { label: "PhonePe Appstore", url: "https://www.indusappstore.com/apps/entertainment/reelora/com.dk.reelora" },
    ],
    media: [],
    published: false,
    notes: "Hold the public case-study card until original screenshots are supplied or approved for use.",
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