import type { ReactNode } from "react";
import ecoistanbul from "@/content/posts/ecoistanbul";
import senato from "@/content/posts/overcomplicating-my-philosophy-journal-senato";

export type PostMeta = {
  slug: string;
  title: string;
  /** iso date, e.g. "2026-06-18" */
  date: string;
};

export type Post = PostMeta & {
  Body: () => ReactNode;
};

/**
 * Blog registry. To add a post: create a .tsx file under content/posts that
 * default-exports a Post, then import and list it here. Posts are plain TSX,
 * so they can use any custom component.
 */
const posts: Post[] = [
  ecoistanbul,
  senato,
];

/** Newest first. */
export const allPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Turns "2026-06-18" into "jun 2026" for the low-key date display. */
export function formatDate(iso: string): string {
  const [year, month] = iso.split("-");
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  return `${months[Number(month) - 1]} ${year}`;
}
