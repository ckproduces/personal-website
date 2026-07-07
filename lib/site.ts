/**
 * Portfolio content, mirrored from cagriokan.com. Plain data — the homepage
 * renders it into token-styled sections.
 */

export type Entry = {
  title: string;
  meta?: string;
  note?: string;
  href?: string;
  date: string;
};

export const intro =
  "co-founder @ dropoutt, tech entrepreneur, ai researcher, jeune prodige";

export const experience: Entry[] = [
  {
    title: "software engineer intern",
    meta: "ai business school",
    note: "building ml-driven features and internal tooling with the product engineering team.",
    href: "https://aibusinessschool.com",
    date: "feb 2026 — present",
  },
  {
    title: "monitoring specialist",
    meta: "artı ve artı it consulting",
    note: "watched production systems end to end — alerting, dashboards, and incident response.",
    href: "https://artivearti.com",
    date: "jul 2025 — feb 2026",
  },
  {
    title: "project intern",
    meta: "yenibirlider association",
    note: "supported project operations for a youth-leadership program over the summer.",
    date: "jul — aug 2022",
  },
];

export const involvement: Entry[] = [
  {
    title: "coordinator, education committee",
    meta: "ytü data science club",
    note: "plan and run the club's workshops and study tracks for members.",
    href: "https://instagram.com/ytuveribilimi",
    date: "jun 2024 — present",
  },
  {
    title: "education mentor",
    meta: "kodluyoruz",
    note: "taught javascript fundamentals to early-career learners.",
    date: "jun 2022 — jun 2023",
  },
];

export const projects: Entry[] = [
  {
    title: "cisimcik ai labs",
    note: "a small research and engineering team building turkish-first ai: practical language models and assistants.",
    href: "https://cisimcik.com",
    date: "",
  },
  {
    title: "bulut — accessibility web assistant",
    note: "an accessibility-focused web assistant that can read and navigate pages, scroll, click controls, and fill forms.",
    date: "",
  },
  {
    title: "manifold — synthetic dataset creator",
    note: "a hackathon-winning synthetic dataset creator focused on image and video generation for near–edge cases.",
    date: "",
  },
  {
    title: "ecoistanbul — sustainable tourism app",
    note: "an ai-powered sustainable tourism application built with kotlin and android studio. 6th globally in the world affairs challenge.",
    href: "https://instagram.com/ecoistanbulapp",
    date: "",
  },
];

export const education: Entry[] = [
  {
    title: "bsc statistics",
    meta: "yıldız technical university",
    note: "probability, statistical inference, and the mathematics behind modern ml.",
    date: "expected jun 2029",
  },
  {
    title: "tev inanç türkeş private high school",
    note: "a full-scholarship science high school.",
    date: "aug 2020 — jun 2024",
  },
];

export const connections = [
  { label: "github", href: "https://github.com/ckproduces", icon: "/logos/github_logo.svg" },
  { label: "x", href: "https://x.com/ckproduces", icon: "/logos/x_logo.svg" },
  { label: "linkedin", href: "https://linkedin.com/in/cagriokan", icon: "/logos/linkedin_logo.svg" },
  { label: "instagram", href: "https://instagram.com/crokan", icon: "/logos/instagram_logo.svg" },
];
