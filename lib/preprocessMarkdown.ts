function escapeHtmlAttr(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Normalizes `##! title` to `## ! title` so ATX headings parse with text `! title` (spaced heading marker).
 */
export function preprocessMarkdownHeadingBang(markdown: string): string {
  return markdown.replace(
    /^(\s{0,3})(#{1,6})!\s+(.+)$/gm,
    "$1$2 ! $3",
  );
}

/**
 * Expands custom image syntax before markdown parsing:
 * - `![alt](path)(full)` → full-width image
 * - `![alt](path)(N)` → width 100% with max-width N rem
 */
export function preprocessMarkdownImageSizing(markdown: string): string {
  let out = markdown.replace(
    /!\[([^\]]*)\]\(([^)]+)\)\(full\)/g,
    (_m, alt: string, src: string) =>
      `<img src="${escapeHtmlAttr(src)}" alt="${escapeHtmlAttr(alt)}" class="md-img md-img--full" />`,
  );
  out = out.replace(
    /!\[([^\]]*)\]\(([^)]+)\)\((\d+)\)/g,
    (_m, alt: string, src: string, rem: string) =>
      `<img src="${escapeHtmlAttr(src)}" alt="${escapeHtmlAttr(alt)}" class="md-img md-img--sized" style="width:100%;max-width:${rem}rem;height:auto" />`,
  );
  return out;
}
