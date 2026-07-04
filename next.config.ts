import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid picking a parent directory when multiple lockfiles exist on the machine.
  outputFileTracingRoot: path.join(process.cwd()),
};

export default nextConfig;
