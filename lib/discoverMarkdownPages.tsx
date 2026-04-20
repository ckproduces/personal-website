import fs from "fs";
import matter from "gray-matter";
import path from "path";
import type { ComponentType } from "react";
import { MarkdownBody } from "@/components/MarkdownBody";

export const MARKDOWN_CONTENT_DIR = path.join(process.cwd(), "content");

export type MarkdownPageRecord = {
  path: string;
  title: string;
  markdownRelativePath: string;
  Component: ComponentType;
};

/** Read and parse a file under `content/` (fresh read each call — used in dev for hot edits). */
export function parseMarkdownFile(relativePath: string) {
  const fullPath = path.join(MARKDOWN_CONTENT_DIR, relativePath);
  const raw = fs.readFileSync(fullPath, "utf8");
  return matter(raw);
}

function normalizePath(value: string): string {
  const trimmed = value.trim();
  if (trimmed === "" || trimmed === "/") {
    return "/";
  }
  return `/${trimmed.replace(/^\/+|\/+$/g, "")}`;
}

function relativeFileToUrl(relativeFilePath: string): string {
  const withoutExt = relativeFilePath.replace(/\.md$/i, "");
  const segments = withoutExt.split(path.sep).filter(Boolean);
  if (segments.length && segments[segments.length - 1] === "index") {
    segments.pop();
  }
  return normalizePath(segments.join("/"));
}

function walkMarkdownFiles(dir: string, base: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }
  const out: string[] = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      out.push(...walkMarkdownFiles(full, base));
    } else if (stat.isFile() && name.endsWith(".md")) {
      out.push(path.relative(base, full));
    }
  }
  return out;
}

function makeMarkdownComponent(
  relativePath: string,
  wrapWithMdPage: boolean,
): ComponentType {
  function MarkdownBackedPage() {
    const { content } = parseMarkdownFile(relativePath);
    return (
      <MarkdownBody
        markdown={content.trim()}
        wrapWithMdPage={wrapWithMdPage}
      />
    );
  }
  MarkdownBackedPage.displayName = "MarkdownBackedPage";
  return MarkdownBackedPage;
}

export function discoverMarkdownPages(): MarkdownPageRecord[] {
  const records: MarkdownPageRecord[] = [];
  const seenPaths = new Set<string>();

  for (const relative of walkMarkdownFiles(
    MARKDOWN_CONTENT_DIR,
    MARKDOWN_CONTENT_DIR,
  )) {
    const { data } = parseMarkdownFile(relative);
    const title = typeof data.title === "string" ? data.title.trim() : "";
    if (!title) {
      throw new Error(
        `Markdown page "${relative}" is missing a non-empty frontmatter "title".`,
      );
    }

    const urlPath = relativeFileToUrl(relative);
    if (seenPaths.has(urlPath)) {
      throw new Error(
        `Duplicate markdown URL path "${urlPath}" (from file "${relative}").`,
      );
    }
    seenPaths.add(urlPath);

    const wrapWithMdPage = !urlPath.startsWith("/__");
    records.push({
      path: urlPath,
      title,
      markdownRelativePath: relative,
      Component: makeMarkdownComponent(relative, wrapWithMdPage),
    });
  }

  return records;
}
