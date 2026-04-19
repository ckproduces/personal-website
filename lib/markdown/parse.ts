import { normalizePath } from "./path";

export type ParsedMarkdown = {
  path: string;
  title: string;
  body: string;
};

function stripQuotes(value: string): string {
  const t = value.trim();
  return t.replace(/^["']|["']$/g, "");
}

/** Lowercase page title for metadata and display rules. */
export function normalizeTitle(value: string): string {
  return stripQuotes(value).toLowerCase();
}

export function parseMarkdownFile(raw: string): ParsedMarkdown {
  const lines = raw.split(/\r?\n/);
  let i = 0;

  const pathMatch = lines[i]?.match(/^Path:\s*(.+)$/);
  if (!pathMatch) {
    throw new Error("Markdown must start with a Path: line.");
  }
  const path = normalizePath(pathMatch[1]);
  i += 1;

  while (i < lines.length && lines[i].trim() === "") {
    i += 1;
  }

  const titleMatch = lines[i]?.match(/^Title:\s*(.+)$/);
  if (!titleMatch) {
    throw new Error('Expected a Title: line after Path: (e.g. Title: "page title").');
  }
  const title = normalizeTitle(titleMatch[1]);
  i += 1;

  const body = lines.slice(i).join("\n").replace(/^\n+/, "");
  return { path, title, body };
}
