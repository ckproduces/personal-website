import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/load-posts";
import { SITE_URL } from "@/lib/site-meta";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  return [
    {
      url: SITE_URL,
      lastModified: posts[0]?.date ?? new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
