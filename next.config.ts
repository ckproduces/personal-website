import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid picking a parent directory when multiple lockfiles exist on the machine.
  outputFileTracingRoot: path.join(process.cwd()),
  // Markdown is read with `fs` from ./pages — ensure it is bundled for serverless if this route is not fully static.
  outputFileTracingIncludes: {
    "[[...slug]]": ["./pages/**/*.md"],
  },
  // Remark / mdast are split into vendor chunks that break in dev workers (e.g. static-paths-worker).
  // Load them from node_modules instead of webpack chunks.
  serverExternalPackages: [
    "react-markdown",
    "remark-gfm",
    "remark-directive",
    "remark-parse",
    "remark-rehype",
    "remark-stringify",
    "unified",
    "mdast-util-to-markdown",
    "mdast-util-from-markdown",
    "mdast-util-to-hast",
    "mdast-util-directive",
    "mdast-util-gfm",
    "hastscript",
    "unist-util-visit",
    "micromark-extension-directive",
    "micromark-extension-gfm",
    "rehype-slug",
    "github-slugger",
  ],
};

export default nextConfig;
