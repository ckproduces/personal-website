/** @type {import('next-sitemap').IConfig} */
const config = {
  // REQUIRED: Change this to your website's domain.
  siteUrl: "https://cagriokan.com",

  // Generates a robots.txt file.
  generateRobotsTxt: true,

  // --- Configuration for Dynamic Slugs ---

  // 1. Exclude the generic slug template path.
  //    This stops next-sitemap from adding "/[slug]" to your sitemap.
  exclude: ["/[slug]"],

  // 2. Manually add your specific slug paths.
  //    The crawler will still find your homepage ("/") automatically.
  additionalPaths: async (config) => {
    return [
      await config.transform(config, "/ecoistanbul"),
      await config.transform(config, "/senato"),
    ];
  },

  // --- End of Slug Configuration ---

  // Optional: Any other robots.txt rules.
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};

export default config;
