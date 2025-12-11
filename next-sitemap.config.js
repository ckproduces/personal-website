// next-sitemap.config.js
const config = {
  siteUrl: "https://cagriokan.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  additionalPaths: async () => [
    { loc: "/", priority: 1.0, changefreq: "daily" },
    { loc: "/ecoistanbul", priority: 0.8, changefreq: "weekly" },
    { loc: "/senato", priority: 0.8, changefreq: "weekly" },
    { loc: "/overtime", priority: 0.8, changefreq: "weekly" },
    { loc: "/coordinator-of-education-committee-yt-data-science-club", priority: 0.8, changefreq: "weekly" },
  ],
};

export default config;
