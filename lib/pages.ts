import HomePage, {
  path as homePath,
  title as homeTitle,
} from "@/pages/index";
import SiteFooterPage, {
  path as siteFooterPath,
  title as siteFooterTitle,
} from "@/pages/site-footer";
import type { ComponentType } from "react";

export const SITE_FOOTER_PATH = "/__site-footer";

export type SitePage = {
  path: string;
  title: string;
  Component: ComponentType;
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

const pageDefinitions = [
  { path: homePath, title: homeTitle, Component: HomePage },
  {
    path: siteFooterPath,
    title: siteFooterTitle,
    Component: SiteFooterPage,
  },
];

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
  });
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
