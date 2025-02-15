/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static site generation
  // Only include basePath if deploying to project site (<user>.github.io/<repo>)
  basePath: process.env.NODE_ENV === "production" ? "/your-repo-name" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/your-repo-name/" : "",
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;
