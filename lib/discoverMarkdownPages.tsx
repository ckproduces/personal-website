import fs from "fs";
import matter from "gray-matter";
import path from "path";
import type { ComponentType } from "react";
import { MarkdownBody } from "@/components/MarkdownBody";

export const MARKDOWN_CONTENT_DIR = path.join(process.cwd(), "content");

type MarkdownPageRecord = {
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
  body: string,
  wrapWithMdPage: boolean,
): ComponentType {
  function MarkdownBackedPage() {
    return (
      <MarkdownBody markdown={body} wrapWithMdPage={wrapWithMdPage} />
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
    const fullPath = path.join(MARKDOWN_CONTENT_DIR, relative);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content: body } = matter(raw);
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
      Component: makeMarkdownComponent(body.trim(), wrapWithMdPage),
    });
  }

  return records;
}
