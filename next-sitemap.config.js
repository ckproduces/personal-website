import { IConfig } from "next-sitemap";

/** @type {IConfig} */
const config = {
  siteUrl: "https://cagriokan.com",
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    return [
      { loc: "/", priority: 1.0, changefreq: "weekly" },
      { loc: "/ecoistanbul", priority: 0.8, changefreq: "monthly" },
      { loc: "/senato", priority: 0.8, changefreq: "monthly" },
    ];
  },
};

export default config;
