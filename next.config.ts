import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

const nextConfig: NextConfig = {
  // Static export so the site deploys as plain files to Cloudflare Pages.
  // If you later add API routes, middleware, or server components that
  // need runtime rendering, switch to @opennextjs/cloudflare instead.
  output: "export",
  // Keep route URLs canonical with a trailing slash so the dev server and
  // static export both serve the same path shape for preview navigation.
  trailingSlash: true,
  turbopack: {
    // Keep Turbopack scoped to this app even when parent lockfiles exist.
    root: projectRoot,
  },
  images: {
    // next/image optimization requires a runtime; disable for static export.
    unoptimized: true,
  },
};

export default nextConfig;
