/** Paths starting with `/__` are loaded as markdown but do not get public URLs. */
export const SITE_FOOTER_PATH = "/__site-footer";

export function isReservedDocPath(path: string): boolean {
  return path.startsWith("/__");
}
