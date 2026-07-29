import type { NextConfig } from "next";
const nextConfig: NextConfig = { transpilePackages: ["@venture-lab/ui", "@venture-lab/mock-data", "@venture-lab/domain-types"], poweredByHeader: false };
export default nextConfig;
