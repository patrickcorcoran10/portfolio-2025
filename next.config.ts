// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  basePath: '/portfolio-2025',
  assetPrefix: '/portfolio-2025',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;