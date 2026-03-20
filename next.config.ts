import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/product", destination: "/#solution", permanent: true },
      { source: "/how-it-works", destination: "/#how-it-works", permanent: true },
      { source: "/use-cases", destination: "/#problem", permanent: true },
      { source: "/security", destination: "/#solution", permanent: true },
      { source: "/about", destination: "/#cta", permanent: true },
    ];
  },
};

export default nextConfig;
