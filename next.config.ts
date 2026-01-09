import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Turbopack es el bundler por defecto en Next.js 16
  // Mejora el hot reload automáticamente
  turbopack: {},
};

export default nextConfig;
