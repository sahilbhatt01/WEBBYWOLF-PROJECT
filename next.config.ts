import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // allow static images from /public
    unoptimized: false
  }
};

export default nextConfig;
