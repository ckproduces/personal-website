import fs from "fs";
import { discoverMarkdownFiles } from "./fs";
import { parseMarkdownFile } from "./parse";
import { pathToSegments, segmentsToPath } from "./path";

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
    const raw = fs.readFileSync(filePath, "utf8");
    const parsed = parseMarkdownFile(raw);
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

export function pathToSlugParam(path: string): string[] | undefined {
  const segs = pathToSegments(path);
  return segs.length === 0 ? undefined : segs;
}

export { pathToSegments, segmentsToPath } from "./path";
