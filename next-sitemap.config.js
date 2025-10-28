/** @type {import('next-sitemap').IConfig} */
export const siteUrl = "https://cagriokan.com";
export const generateRobotsTxt = true;
export const sitemapSize = 7000;
export const exclude = ["/admin/*"];
const slugs = ["ecoistanbul", "senato"]; // Example slugs to be added dynamically
export async function additionalPaths(config) {
  return slugs.map((slug) => ({ loc: `/posts/${slug}` }));
}
export async function transform(config, path) {
  // Optional: set priority/changefreq dynamically
  return {
    loc: path,
    changefreq: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : 0.7,
    lastmod: new Date().toISOString(),
  };
}
