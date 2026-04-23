import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Explicitly set the root directory to fix the "multiple lockfiles" path issue
  experimental: {
    outputFileTracingRoot: path.join(__dirname),
  },
};

export default nextConfig;
