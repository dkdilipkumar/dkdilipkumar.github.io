# DK Personal Brand Website Rebuild

## Phase 0 audit

- The published Netlify site and Lovable preview both load successfully and show the same single-page Android developer profile.
- The app currently has only `/` plus a catch-all 404. The rendered page has no section IDs, subpages, or project imagery; only the root mount has an ID.
- The source is React, Vite, TypeScript, Tailwind, React Router, Framer Motion, and Lucide. The page content is rendered into an empty HTML root, so crawlers and social scrapers do not receive the full page in the initial HTML.
- Existing metadata still describes an Android-only portfolio and includes Lovable-branded social metadata. No canonical URL or per-page metadata exists.
- No portrait, project screenshots, video thumbnails, or other usable portfolio media are present in the repository.
- Mobile Lighthouse baseline on the published site: Performance 97, Accessibility 100, Best Practices 100, SEO 100; FCP 1.9 s, LCP 1.9 s, TBT 110 ms, CLS 0. These are a single run, not a guarantee of future results.
- The briefs provide verified Reelora details and the two digital-brand profiles. Pleyera, Yatri, 91Servings, and tradeos_phoenix remain hidden drafts until their facts and permissions are confirmed. No outcomes, client claims, testimonials, or analytics will be invented.

## Rendering recommendation and decision

**Recommended: preserve React/Vite and add build-time static rendering for the finite set of planned routes.** This is the lowest-disruption option for the existing React project and Netlify deployment, while producing route-specific HTML, headings, and metadata for crawlers. Its trade-off is that published routes and content are generated at build time; new content requires a rebuild.

The alternative is migration to TanStack Start for server-rendered routes. It is a larger framework and deployment change, but is a better fit if pages must be rendered dynamically at request time. Astro is not proposed because it is outside this project's supported Lovable stack.

No application code will change until this rendering choice and the plan are approved.

## Implementation after approval

1. **Foundation:** Establish the premium dark editorial tokens, typography, responsive shell, accessible sticky/mobile navigation, shared footer, typed content/config modules, route-specific metadata, static rendering, sitemap, robots rules, and preserved Netlify deployment behavior.
2. **Core pages:** Build Home, About, and Contact. Center the homepage on BUILD / CREATE / GROW, the supplied positioning copy, honest proof, working links, and clear enquiry paths. Keep public contact channels hidden until confirmed.
3. **Services:** Add the hub and nine dedicated service pages with the six requested sections, service-specific FAQs, related content, and contextual enquiry links.
4. **Proof and audience:** Add the Projects hub and Reelora case study from verified details; add the AI Content Studio workflow, Digital Brands, and Industries experience. Keep unverified projects and unsupported media hidden.
5. **Insights and legal:** Create the Insights hub/article format and draft Privacy/Terms pages. Publish no thin or unreviewed articles.
6. **Quality and deployment:** Validate routes, redirects, canonical and social tags, sitemap, accessibility, keyboard/mobile layouts, reduced motion, forms, broken links, production output, and Lighthouse scores. Document items blocked by missing access or assets.

## Technical details

- Use the existing React/Vite/TypeScript stack unless the rendering decision selects TanStack Start.
- Centralize site settings, services, projects, brands, videos, industries, social profiles, and route metadata under typed content modules.
- Planned routes: `/`, `/about`, `/services` and its nine specified service routes, `/projects` and case studies, `/studio`, `/brands`, `/industries`, `/insights` and articles, `/contact`, `/privacy`, and `/terms`.
- Treat empty contact, booking, analytics, and verification settings as absent rather than inventing values. The briefs prefer Netlify Forms, but live delivery and submission testing require Netlify deployment access.
- Reuse the supplied social/profile links. Use actual media only; provide useful text-led layouts when screenshots or video are unavailable.

## Waiting on

- DK's selection of build-time static rendering or TanStack Start, plus approval of this phased plan.
- Later delivery/testing of contact, booking, analytics, Netlify, portrait, and project-media details where needed.