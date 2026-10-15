/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Bridge code is Node-only; exclude it from the Next.js bundle
  webpack: (config) => {
    config.resolve.alias['playwright'] = false;
    config.resolve.alias['pino'] = false;
    return config;
  },
};

export default nextConfig;
