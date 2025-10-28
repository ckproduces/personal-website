/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: "https://cagriokan.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/admin/*"],
  additionalPaths: async (config) => {
    const slugs = ["ecoistanbul", "senato"];
    return slugs.map((slug) => ({ loc: `/posts/${slug}` }));
  },
  transform: async (config, path) => ({
    loc: path,
    changefreq: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : 0.7,
    lastmod: new Date().toISOString(),
  }),
};
