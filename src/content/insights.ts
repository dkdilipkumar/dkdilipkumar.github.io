export const insightTopics = [
  "Android Development",
  "Kotlin & Java",
  "Flutter",
  "Building MVPs",
  "AI for Business",
  "AI Video Production",
  "Shopify Optimization",
  "E-commerce Growth in India",
  "Technical SEO",
  "Website UX",
  "Digital Transformation",
  "Practical Technology Guidance",
];

export interface InsightArticle {
  slug: string;
  title: string;
  description: string;
  topic: string;
  published: boolean;
  draftReason: string;
}

export const insightDrafts: InsightArticle[] = [
  { slug: "app-or-website-first", title: "App or website first? A practical guide for founders", description: "A decision framework for choosing a first digital product.", topic: "Building MVPs", published: false, draftReason: "Requires DK review before publication." },
  { slug: "flutter-or-native-android", title: "Flutter or native Android for an MVP: how to choose", description: "Trade-offs between cross-platform and native Android development.", topic: "Flutter", published: false, draftReason: "Requires DK review before publication." },
  { slug: "android-app-publishing-india", title: "Publishing an Android app in India", description: "Notes on app distribution based on the Reelora release experience.", topic: "Android Development", published: false, draftReason: "Requires DK review and up-to-date store verification." },
  { slug: "shopify-product-page-audit", title: "A product-page audit checklist for Shopify stores", description: "A practical review of product information, structure, and customer flow.", topic: "Shopify Optimization", published: false, draftReason: "Requires DK review before publication." },
  { slug: "ai-video-workflow", title: "How I use AI video tools in a creative workflow", description: "Where AI tools can help, where they fall short, and how human review fits in.", topic: "AI Video Production", published: false, draftReason: "Requires DK review and actual workflow examples." },
];

export const publishedArticles = insightDrafts.filter((article) => article.published);