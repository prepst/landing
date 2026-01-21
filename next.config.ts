import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    quality: 100,
    formats: ['image/png', 'image/webp'],
    unoptimized: true, // Disable optimization to keep original quality
  },
};

export default nextConfig;
