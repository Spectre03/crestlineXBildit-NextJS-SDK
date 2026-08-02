import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@bildit-platform/nextjs'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
