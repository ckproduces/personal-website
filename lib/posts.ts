import type { ReactNode } from "react";

export type PostMeta = {
  slug: string;
  title: string;
  /** iso date, e.g. "2026-06-18" */
  date: string;
  /** omit from the site and sitemap */
  draft?: boolean;
};

export type Post = PostMeta & {
  Body: () => ReactNode;
};

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
