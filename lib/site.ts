/**
 * Portfolio content, mirrored from cagriokan.com. Plain data — the homepage
 * renders it into token-styled sections.
 */

export type EntryLink = {
  href: string;
  label?: string;
};

export type Entry = {
  title: string;
  meta?: string;
  /** links the @ org name when meta is present */
  metaHref?: string;
  note?: string;
  /** action chips below the note; laid out horizontally when more than one */
  links?: EntryLink[];
  date: string;
};

export const intro =
  "co-founder @ dropoutt, tech entrepreneur, ai researcher, jeune prodige";

export const experience: Entry[] = [
  {
    title: "software engineer intern",
    meta: "ai business school",
    note: "i contribute to the Adoption and Content platforms: production support, engineering tickets, and resolving live issues.",
    metaHref: "https://aibusinessschool.com",
    date: "feb 2026 — present",
  },
  {
    title: "monitoring specialist",
    meta: "artı ve artı it consulting",
    note: "provided 24/7 remote monitoring support: triaging technical tickets, forwarding them to the right teams, and preparing incident reports.",
    metaHref: "https://artivearti.com",
    date: "jul 2025 — feb 2026",
  },
  {
    title: "project intern",
    meta: "yenibirlider association",
    note: "I was fully given the chance to create a campaign and a project for students from scratch.",
    date: "jul — aug 2022",
  },
];

export const involvement: Entry[] = [
  {
    title: "coordinator, education committee",
    meta: "ytü data science club",
    note: "plan and run the club's workshops and study tracks for members.",
    metaHref: "https://instagram.com/ytuveribilimi",
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
    date: "",
  },
  {
    title: "bulut — accessibility web assistant",
    note: "an accessibility-focused web assistant that can read and navigate pages, scroll, click controls, and fill forms.",
    date: "",
    links: [
      {
        href: "https://youtu.be/CvCZOk-YLrw?t=3430",
        label: "watch hackathon presentation",
      },
    ],
  },
  {
    title: "manifold — synthetic dataset creator",
    note: "a hackathon-winning synthetic dataset creator focused on image and video generation for near–edge cases.",
    date: "",
    links: [
      {
        href: "https://youtu.be/LfmWSh3rnm0?t=4544",
        label: "watch hackathon presentation",
      },
    ],
  },
  {
    title: "ecoistanbul — sustainable tourism app",
    note: "an ai-powered sustainable tourism application built with kotlin and android studio. 6th globally in the world affairs challenge.",
    date: "",
    links: [
      { href: "https://instagram.com/ecoistanbulapp", label: "instagram" },
      {
        href: "/blog/my-journey-to-building-a-green-company",
        label: "read more",
      },
    ],
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
    note: "is an independent co-educational boarding high school located in Gebze, Kocaeli",
    date: "aug 2020 — jun 2024",
  },
];

export const connections = [
  {
    label: "github",
    href: "https://github.com/ckproduces",
    icon: "/logos/github_logo.svg",
  },
  { label: "x", href: "https://x.com/ckproduces", icon: "/logos/x_logo.svg" },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/cagriokan",
    icon: "/logos/linkedin_logo.svg",
  },
  {
    label: "instagram",
    href: "https://instagram.com/crokan_",
    icon: "/logos/instagram_logo.svg",
  },
];
