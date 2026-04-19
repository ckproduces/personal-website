import { normalizePath } from "./path";

export type ParsedMarkdown = {
  path: string;
  body: string;
};

export function parseMarkdownFile(raw: string): ParsedMarkdown {
  const lines = raw.split(/\r?\n/);
  const first = lines[0] ?? "";
  const match = first.match(/^Path:\s*(.+)$/);
  if (!match) {
    throw new Error("Markdown must start with a Path: line.");
  }
  const path = normalizePath(match[1]);
  const rest = lines.slice(1).join("\n");
  const body = rest.replace(/^\n+/, "");
  return { path, body };
}
