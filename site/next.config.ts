import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack — it panics on Hebrew path segments (unicode boundary bug).
  // Use the stable Webpack compiler instead.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
