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

/** Normalizes `!---` to the markdown rule token. Rendering maps it to dots. */
export function preprocessMarkdownDotRule(markdown: string): string {
  return markdown.replace(
    /^(\s{0,3})!---[ \t]*$/gm,
    "$1---",
  );
}

/**
 * Expands custom image syntax before markdown parsing:
 * - `![alt](path)(full)` → full-width image
 * - `![alt](path)(N)` → width 100% with max-width N rem
 * - append `(center)` after the width token to center the image
 */
export function preprocessMarkdownImageSizing(markdown: string): string {
  return markdown.replace(
    /!\[([^\]]*)\]\(([^)]+)\)\((full|\d+)\)(\(center\))?/g,
    (_m, alt: string, src: string, width: string, center?: string) => {
      const classes = [
        "md-img",
        width === "full" ? "md-img--full" : "md-img--sized",
        center ? "md-img--center" : undefined,
      ]
        .filter(Boolean)
        .join(" ");
      const style =
        width === "full"
          ? ""
          : ` style="width:100%;max-width:${width}rem;height:auto"`;
      return `<img src="${escapeHtmlAttr(src)}" alt="${escapeHtmlAttr(alt)}" class="${classes}"${style} />`;
    },
  );
}
