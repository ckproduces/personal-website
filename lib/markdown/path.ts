/** Normalize Path: value to canonical path starting with `/`. */
export function normalizePath(value: string): string {
  let p = value.trim();
  p = p.replace(/^["']|["']$/g, "");
  if (p === "" || p === "/") return "/";
  return "/" + p.replace(/^\/+|\/+$/g, "");
}

/** `/blog/a` → `['blog', 'a']`; `/` → `[]` */
export function pathToSegments(path: string): string[] {
  const p = normalizePath(path);
  if (p === "/") return [];
  return p.slice(1).split("/").filter(Boolean);
}

/** `[]` → `/`; `['blog']` → `/blog` */
export function segmentsToPath(segments: string[]): string {
  if (!segments.length) return "/";
  return "/" + segments.join("/");
}
