import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid picking a parent directory when multiple lockfiles exist on the machine.
  outputFileTracingRoot: path.join(process.cwd()),
  pageExtensions: ["page.tsx", "page.ts"],
  webpack: (config, { dev, isServer }) => {
    if (dev && isServer) {
      const contentDir = path.join(process.cwd(), "content");
      config.plugins!.push({
        apply(compiler: {
          hooks: {
            compilation: {
              tap: (
                name: string,
                fn: (compilation: {
                  contextDependencies: { add: (dir: string) => void };
                }) => void,
              ) => void;
            };
          };
        }) {
          compiler.hooks.compilation.tap("WatchContentDir", (compilation) => {
            compilation.contextDependencies.add(contentDir);
          });
        },
      });
    }
    return config;
  },
};

export default nextConfig;
