import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/.well-known/mta-sts.txt",
        headers: [
          { key: "Content-Type", value: "text/plain" },
        ],
      },
    ];
  },
};

export default nextConfig;

