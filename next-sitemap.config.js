// next-sitemap.config.js
const config = {
  siteUrl: "https://cagriokan.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  additionalPaths: async () => [
    { loc: "/", priority: 1.0, changefreq: "weekly" },
    { loc: "/ecoistanbul", priority: 0.8, changefreq: "weekly" },
    { loc: "/senato", priority: 0.8, changefreq: "weekly" },
  ],
};

export default config;
