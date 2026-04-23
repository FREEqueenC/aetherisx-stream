/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Disable Turbopack for build stability on some platforms
  experimental: {
    // Some platforms have issues with Turbopack in Docker
  }
};

export default nextConfig;
