import fs from "fs";
import { discoverMarkdownFiles } from "./fs";
import { parseMarkdownFile } from "./parse";
import { pathToSegments, segmentsToPath } from "./path";
import { isReservedDocPath, SITE_FOOTER_PATH } from "./reserved";

export type MarkdownDoc = {
  path: string;
  title: string;
  body: string;
  filePath: string;
};

let cache: Map<string, MarkdownDoc> | null = null;

function loadAllDocs(): Map<string, MarkdownDoc> {
  const map = new Map<string, MarkdownDoc>();
  const files = discoverMarkdownFiles();

  for (const filePath of files) {
    let raw: string;
    let parsed: ReturnType<typeof parseMarkdownFile>;
    try {
      raw = fs.readFileSync(filePath, "utf8");
      parsed = parseMarkdownFile(raw);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      throw new Error(`Markdown failed in ${filePath}: ${msg}`);
    }
    const doc: MarkdownDoc = {
      path: parsed.path,
      title: parsed.title,
      body: parsed.body,
      filePath,
    };
    if (map.has(doc.path)) {
      throw new Error(
        `Duplicate Path "${doc.path}" in ${filePath} and ${map.get(doc.path)!.filePath}`,
      );
    }
    map.set(doc.path, doc);
  }

  return map;
}

export function getMarkdownMap(): Map<string, MarkdownDoc> {
  if (process.env.NODE_ENV === "development") {
    return loadAllDocs();
  }
  if (!cache) {
    cache = loadAllDocs();
  }
  return cache;
}

export function getMarkdownBySegments(segments: string[]): MarkdownDoc | undefined {
  const key = segmentsToPath(segments);
  return getMarkdownMap().get(key);
}

export function getAllMarkdownDocs(): MarkdownDoc[] {
  return Array.from(getMarkdownMap().values());
}

/** Pages that resolve to a URL (excludes internal-only docs such as the site footer). */
export function getMarkdownDocsForRoutes(): MarkdownDoc[] {
  return getAllMarkdownDocs().filter((d) => !isReservedDocPath(d.path));
}

export function getSiteFooterDoc(): MarkdownDoc | undefined {
  return getMarkdownMap().get(SITE_FOOTER_PATH);
}

export { SITE_FOOTER_PATH, isReservedDocPath } from "./reserved";

export function pathToSlugParam(path: string): string[] | undefined {
  const segs = pathToSegments(path);
  return segs.length === 0 ? undefined : segs;
}

export { pathToSegments, segmentsToPath } from "./path";
