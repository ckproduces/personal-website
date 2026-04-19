import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "pages");

export function discoverMarkdownFiles(): string[] {
  const results: string[] = [];

  function walk(dir: string) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        walk(full);
      } else if (e.isFile() && e.name.endsWith(".md")) {
        results.push(full);
      }
    }
  }

  walk(CONTENT_DIR);
  return results.sort();
}
