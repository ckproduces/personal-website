import {
  discoverMarkdownPages,
  parseMarkdownFile,
} from "@/lib/discoverMarkdownPages";
import type { ComponentType } from "react";

export const SITE_FOOTER_PATH = "/__site-footer";

export type SitePage = {
  path: string;
  title: string;
  Component: ComponentType;
  /** When set, title and body are read from this file at request time (dev-friendly). */
  markdownRelativePath?: string;
};

function normalizePath(value: string): string {
  const trimmed = value.trim();
  if (trimmed === "" || trimmed === "/") {
    return "/";
  }
  return `/${trimmed.replace(/^\/+|\/+$/g, "")}`;
}

function normalizeTitle(value: string): string {
  return value.trim().toLowerCase();
}

function pathToSegments(path: string): string[] {
  const normalized = normalizePath(path);
  if (normalized === "/") {
    return [];
  }
  return normalized.slice(1).split("/").filter(Boolean);
}

function segmentsToPath(segments: string[]): string {
  if (!segments.length) {
    return "/";
  }
  return `/${segments.join("/")}`;
}

export function isReservedPagePath(path: string): boolean {
  return path.startsWith("/__");
}

const pageDefinitions = discoverMarkdownPages();

const pageMap = new Map<string, SitePage>();

for (const page of pageDefinitions) {
  const normalizedPath = normalizePath(page.path);
  if (pageMap.has(normalizedPath)) {
    throw new Error(`Duplicate page path "${normalizedPath}".`);
  }
  pageMap.set(normalizedPath, {
    path: normalizedPath,
    title: normalizeTitle(page.title),
    Component: page.Component,
    markdownRelativePath: page.markdownRelativePath,
  });
}

/** Document title for metadata: re-read frontmatter when the page is backed by a markdown file. */
export function resolvePageTitle(page: SitePage): string {
  if (page.markdownRelativePath) {
    const { data } = parseMarkdownFile(page.markdownRelativePath);
    if (typeof data.title === "string" && data.title.trim()) {
      return normalizeTitle(data.title.trim());
    }
  }
  return page.title;
}

export function getPageBySegments(segments: string[]): SitePage | undefined {
  return pageMap.get(segmentsToPath(segments));
}

export function getRoutePages(): SitePage[] {
  return Array.from(pageMap.values()).filter(
    (page) => !isReservedPagePath(page.path),
  );
}

export function getSiteFooterPage(): SitePage | undefined {
  return pageMap.get(SITE_FOOTER_PATH);
}

export function pathToSlugParam(path: string): string[] | undefined {
  const segments = pathToSegments(path);
  return segments.length === 0 ? undefined : segments;
}
