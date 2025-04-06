import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Static export uchun
  images: {
    unoptimized: true, // Static exportda
  },
};

export default nextConfig;
