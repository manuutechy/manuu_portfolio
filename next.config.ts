import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/projects', destination: '/#companies', permanent: false },
      { source: '/services', destination: '/#companies', permanent: false },
      { source: '/about', destination: '/#founder', permanent: false },
      { source: '/contact', destination: '/#contact', permanent: false },
    ]
  },
};

export default nextConfig;
