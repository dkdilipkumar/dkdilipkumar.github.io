const siteUrl = import.meta.env.VITE_SITE_URL || "https://dkdilipkumar.netlify.app";

export const siteConfig = {
  name: "Dilip Kumar",
  shortName: "DK",
  title: "Digital Solutions Architect & Creative Strategist",
  headline: "Building Digital Experiences. Creating with AI. Enabling Business Growth.",
  statement:
    "I bring technology, AI, creativity and digital strategy together to help businesses turn ideas into impactful digital experiences.",
  description:
    "Mobile apps, websites, Shopify and AI-powered content. I help startups and businesses in India and worldwide turn ideas into digital products.",
  siteUrl,
  contact: {
    email: "",
    phone: "",
    whatsapp: "",
    bookingUrl: "",
    responseTime: "",
  },
  analytics: {
    gtmId: import.meta.env.VITE_GTM_ID || "",
    ga4Id: import.meta.env.VITE_GA4_ID || "",
    turnstileSiteKey: import.meta.env.VITE_TURNSTILE_SITE_KEY || "",
  },
  socialProfiles: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/dilip-kumar-327653308/", visible: true },
    { name: "GitHub", url: "https://github.com/dkdilipkumar", visible: true },
    { name: "X", url: "https://x.com/dilipdk1994", visible: true },
    { name: "DEV.to", url: "https://dev.to/dilip_kumardk_b41b9418", visible: true },
    { name: "Medium", url: "https://medium.com/@dilip.kumar.96995", visible: true },
    { name: "Instagram", url: "https://www.instagram.com/dkdilip94k/", visible: true },
    { name: "Threads", url: "https://www.threads.com/@dkdilip94k", visible: true },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61575617745742", visible: true },
    { name: "Coderlegion", url: "https://coderlegion.com/user/Dilip+Kumar", visible: true },
  ],
} as const;

export const getAbsoluteUrl = (path: string) => new URL(path, siteConfig.siteUrl).toString();