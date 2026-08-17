import "server-only";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { cache } from "react";
import type { Post } from "@/lib/posts";

const dir = join(process.cwd(), "content/posts");

/**
 * Every `content/posts/*.tsx` default export, minus drafts and `_` files.
 * Homepage, blog routes, and sitemap all read this.
 */
export const getAllPosts = cache(async (): Promise<Post[]> => {
  const files = readdirSync(dir).filter(
    (file) => file.endsWith(".tsx") && !file.startsWith("_"),
  );

  const posts = await Promise.all(
    files.map(async (file) => {
      const name = file.slice(0, -".tsx".length);
      const mod = (await import(`../content/posts/${name}`)) as {
        default: Post;
      };
      return mod.default;
    }),
  );

  return posts
    .filter((post) => !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
});

export async function getPost(slug: string) {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
