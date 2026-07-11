import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid picking a parent directory when multiple lockfiles exist on the machine.
  outputFileTracingRoot: path.join(process.cwd()),
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async headers() {
    return [
      {
        source: "/:path*\\.(svg|png|jpg|jpeg|gif|webp|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
