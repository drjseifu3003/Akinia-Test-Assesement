import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['encrypted-tbn0.gstatic.com'],
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
