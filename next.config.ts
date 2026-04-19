import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid picking a parent directory when multiple lockfiles exist on the machine.
  outputFileTracingRoot: path.join(process.cwd()),
  // Markdown is read with `fs` from ./pages — ensure it is bundled for serverless if this route is not fully static.
  outputFileTracingIncludes: {
    "[[...slug]]": ["./pages/**/*.md"],
  },
};

export default nextConfig;
