export type ServiceGroup = "Build" | "Create" | "Grow";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  group: ServiceGroup;
  summary: string;
  problem: string;
  audience: string;
  deliverables: string[];
  engagement: string[];
  startingInfo: string[];
  relatedProjects: string[];
  relatedInsights: string[];
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: "android-app-development",
    title: "Android App Development",
    group: "Build",
    summary: "Native Android products shaped around the people who will use them and the problem they need to solve.",
    problem: "A useful app idea needs a clear scope, sound technical choices, and a dependable Android experience—not just a screen prototype.",
    audience: "Startups, businesses, and entrepreneurs turning an idea into a working Android product or improving an existing app.",
    deliverables: ["Java and Kotlin development", "Android architecture with MVVM and clean boundaries", "Jetpack Compose interfaces", "Firebase, Room DB, and REST API integration", "UI/UX implementation and existing-app improvements", "Native features such as maps, sensors, and notifications when a project needs them"],
    engagement: ["Understand the product, users, and constraints", "Agree the first useful scope and technical approach", "Build in reviewable milestones", "Test, refine, and prepare the release", "Plan post-release care and platform updates"],
    startingInfo: ["The idea or existing app", "Target users and must-have features", "Reference apps, designs, or APIs", "Timeline and any current technical constraints"],
    relatedProjects: ["reelora"],
    relatedInsights: ["app-or-website-first", "flutter-or-native-android"],
    faqs: [
      { question: "Can you improve an app that already exists?", answer: "Yes. An initial review can identify the current issues, dependencies, and the most practical next improvements." },
      { question: "Do you work with both Java and Kotlin?", answer: "Yes. The choice depends on the existing codebase, product requirements, and the team's maintenance needs." },
    ],
  },
  {
    slug: "flutter-app-development",
    title: "Flutter App Development",
    group: "Build",
    summary: "Cross-platform apps and MVPs with a considered scope, clear interfaces, and maintainable foundations.",
    problem: "When an idea needs to reach more than one platform, teams need to balance shared development with native behavior and long-term maintenance.",
    audience: "Founders and businesses planning an MVP, or product owners refining a Flutter app already in progress.",
    deliverables: ["Flutter application development", "MVP planning and interface implementation", "Firebase integration", "REST API connections", "Feature refinement and issue investigation", "Platform-specific polish where needed"],
    engagement: ["Map the audience, core journeys, and required platforms", "Check backend readiness and integration needs", "Break the work into milestones", "Review builds against agreed flows", "Refine and prepare for release"],
    startingInfo: ["Product idea and target users", "Required platforms", "Must-have features and reference apps", "Current backend or API status", "Timeline and available designs"],
    relatedProjects: ["reelora"],
    relatedInsights: ["flutter-or-native-android", "app-or-website-first"],
    faqs: [
      { question: "Is Flutter right for every app?", answer: "No. Platform requirements, integrations, performance needs, and team ownership all matter. I can help compare options before committing." },
      { question: "Can you connect an app to an existing API?", answer: "Yes. The API documentation, authentication approach, and current backend status help define the integration scope." },
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    group: "Build",
    summary: "Business websites, portfolios, and landing pages designed to explain an offer and guide the next step.",
    problem: "A website should make the business easy to understand, work across screen sizes, and stay maintainable after launch.",
    audience: "Startups, service businesses, creators, and teams launching a new site or improving an existing one.",
    deliverables: ["Business websites, portfolios, and landing pages", "Responsive UI and content structure", "AI-assisted implementation using tools such as Lovable or Claude", "Existing-site improvements", "Performance and maintainability refinements", "Technical handover for ongoing updates"],
    engagement: ["Clarify the business goal and visitor journey", "Agree pages, content, and visual direction", "Build a reviewable first version", "Refine content and interfaces", "Prepare the site for launch and ongoing maintenance"],
    startingInfo: ["Website goals and audience", "Brand assets and available copy", "Page list and reference sites", "Existing domain or site URL", "Any accessibility, privacy, or integration requirements"],
    relatedProjects: [],
    relatedInsights: ["app-or-website-first", "shopify-product-page-audit"],
    faqs: [
      { question: "How do AI-assisted tools fit into the work?", answer: "They can speed up implementation. The direction, technical review, content quality, and business decisions still need human judgment." },
      { question: "Can you work on a site that is already live?", answer: "Yes. A review of the current site and the changes you want helps set a useful scope." },
    ],
  },
  {
    slug: "shopify-development",
    title: "Shopify & E-commerce",
    group: "Build",
    summary: "Store structure, product pages, and customer journeys improved around how shoppers browse and decide.",
    problem: "A store can lose clarity when navigation, product content, and the buying journey do not work together.",
    audience: "E-commerce and retail businesses improving a Shopify store or planning a new online storefront.",
    deliverables: ["Shopify setup and theme customization", "Product-page and store-UX improvements", "Navigation and content-structure review", "Product content refinements", "SEO and conversion-journey improvements", "Existing-store audits"],
    engagement: ["Review the storefront and current customer journey", "Prioritize the changes with the clearest purpose", "Agree access, scope, and milestones", "Implement and review changes", "Check the updated store across devices"],
    startingInfo: ["Store URL and the access level available for an audit", "Catalogue size and product types", "Business goals and current problems", "Competitor or reference stores", "Any existing analytics or search data"],
    relatedProjects: ["91servings"],
    relatedInsights: ["shopify-product-page-audit"],
    faqs: [
      { question: "Can you improve a store without changing its theme?", answer: "Often, yes. The right scope depends on the theme, current settings, and the specific customer journey issues." },
      { question: "Do you guarantee more sales?", answer: "No. I can make evidence-informed improvements, but sales depend on many factors outside a website change." },
    ],
  },
  {
    slug: "ai-video-production",
    title: "AI Video Production",
    group: "Create",
    summary: "Product and brand videos shaped by a clear idea, careful scripting, and human-led creative direction.",
    problem: "Businesses need video that explains an offer clearly without losing the human context behind the product.",
    audience: "E-commerce brands, agencies, creators, education companies, and service businesses.",
    deliverables: ["AI presenter and avatar videos", "Product explainers and advertisements", "Educational and promotional videos", "Video scripts and storyboards", "Creative direction and AI-assisted visuals", "Platform-ready edits for agreed formats"],
    engagement: ["Understand the product, audience, and platform", "Develop the concept and script", "Plan scenes and visual direction", "Produce AI-assisted video assets", "Refine narration and editing", "Deliver platform-ready content"],
    startingInfo: ["Product or offer and target audience", "Target platform and video format", "Preferred tone and reference videos", "Brand assets and deadline", "Any required captions or language variants"],
    relatedProjects: [],
    relatedInsights: ["ai-video-workflow"],
    faqs: [
      { question: "Will a video sample be shown on this site?", answer: "Only videos supplied and approved for publication will appear. The studio can still explain the production workflow in the meantime." },
      { question: "Can you create scripts as well as video assets?", answer: "Yes. Scriptwriting and creative direction can be included in the agreed project scope." },
    ],
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    group: "Create",
    summary: "Platform-specific short-form and educational content with a consistent point of view.",
    problem: "Publishing content regularly is difficult when ideas, scripts, formats, and platform needs are disconnected.",
    audience: "Creators, small businesses, agencies, and brands planning a stronger content presence.",
    deliverables: ["Reels and YouTube Shorts", "Educational and marketing stories", "Content ideas and scripts", "Creative direction for each format", "AI-assisted production where it fits", "Platform-specific content planning"],
    engagement: ["Clarify the brand, audience, and publishing goal", "Choose content themes and formats", "Plan scripts and visual direction", "Create and review a first set of content", "Refine the workflow for future publishing"],
    startingInfo: ["Brand and audience", "Platforms to support", "Content goals and topics", "Current publishing capacity", "Examples of content you like or want to avoid"],
    relatedProjects: [],
    relatedInsights: ["ai-video-workflow"],
    faqs: [
      { question: "Can content be planned for more than one platform?", answer: "Yes. The format and message can be adapted to each platform instead of copying one version everywhere." },
      { question: "Do you publish content on my accounts?", answer: "Publishing access and responsibilities are agreed before work begins; no account access is assumed." },
    ],
  },
  {
    slug: "seo-optimization",
    title: "SEO & Website Optimization",
    group: "Grow",
    summary: "Technical, content, and customer-journey improvements that make a site easier to find and use.",
    problem: "Search visibility and usability depend on site structure, page content, technical health, and the visitor's next step.",
    audience: "Businesses and store owners looking for practical ways to improve their website or search experience.",
    deliverables: ["Technical and on-page SEO review", "Website and Shopify content structure", "Search-visibility recommendations", "Website performance and UX refinements", "Conversion-journey review", "Content strategy guidance"],
    engagement: ["Review the website, goals, and target markets", "Identify technical and content priorities", "Agree what can be changed and measured", "Implement or document improvements", "Review findings and next steps"],
    startingInfo: ["Website URL", "Target markets and competitors", "Search Console or Analytics access if available", "Current business goals", "Known technical or content issues"],
    relatedProjects: ["91servings"],
    relatedInsights: ["shopify-product-page-audit"],
    faqs: [
      { question: "Can you guarantee rankings or sales?", answer: "No. Search results and business outcomes depend on many factors; I do not guarantee rankings, traffic, or sales." },
      { question: "Can you work with a Shopify store?", answer: "Yes. Shopify SEO and store structure can be reviewed alongside product pages and the customer journey." },
    ],
  },
  {
    slug: "ai-business-solutions",
    title: "AI & Business Solutions",
    group: "Grow",
    summary: "Practical exploration of where AI and modern digital tools can reduce friction or support better work.",
    problem: "Teams may know AI could help but need to identify a safe, useful starting point in their own workflows.",
    audience: "Small businesses, startups, and teams evaluating AI adoption or process improvements.",
    deliverables: ["AI-assisted content-workflow ideas", "Automation opportunity mapping", "Digital workflow improvements", "AI integration planning", "Digital-product and process reviews", "Technology consultation"],
    engagement: ["Map the current process and pain points", "Identify constraints, data sensitivity, and risks", "Compare practical options", "Agree a small, reviewable next step", "Document the workflow and evaluation criteria"],
    startingInfo: ["Description of the current process", "Tools in use and pain points", "Data-sensitivity constraints", "Who will use the proposed workflow", "What success should look like"],
    relatedProjects: [],
    relatedInsights: ["ai-video-workflow"],
    faqs: [
      { question: "Will you recommend AI for every process?", answer: "No. If a simpler process or tool is a better fit, that is what I will recommend." },
      { question: "Can private business data be used in a workflow?", answer: "Data handling and sensitivity should be discussed before choosing any tools or sending information to a service." },
    ],
  },
  {
    slug: "digital-consulting",
    title: "Digital Consulting",
    group: "Grow",
    summary: "Practical guidance for product decisions, technology choices, and the next useful digital step.",
    problem: "Early decisions about products, platforms, and scope can become expensive when they are made without a clear view of the goal.",
    audience: "Founders, entrepreneurs, and businesses planning a digital project or evaluating what to do next.",
    deliverables: ["Startup and product-idea review", "App-versus-website guidance", "Technology selection", "Digital-transformation and AI-adoption discussion", "Online-presence review", "A practical next-step summary"],
    engagement: ["Share the situation, goals, and constraints", "Agree the questions the session should answer", "Discuss options and trade-offs", "Summarize decisions and next steps", "Scope follow-up work only if it is useful"],
    startingInfo: ["A summary of the current situation", "Goals and constraints", "Decisions you need to make", "Any existing products or tools", "The people affected by the decision"],
    relatedProjects: [],
    relatedInsights: ["app-or-website-first", "flutter-or-native-android"],
    faqs: [
      { question: "Do I need a finished idea before booking?", answer: "No. A clear description of the challenge and the decision you are facing is enough to start a conversation." },
      { question: "Is a consultation the same as a delivery quote?", answer: "Not necessarily. The conversation can clarify the problem first; any delivery scope is discussed separately." },
    ],
  },
];

export const serviceGroups = [
  { name: "Build" as const, description: "Digital products, mobile applications, websites, and commerce experiences." },
  { name: "Create" as const, description: "AI-assisted video, storytelling, and platform-aware digital content." },
  { name: "Grow" as const, description: "Search visibility, practical strategy, and technology guidance." },
];