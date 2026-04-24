import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: 'standalone',
  // In Next.js 16+, this has been moved to the top level
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
