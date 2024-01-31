/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
    images: {
        domains: ['cdn.sanity.io'],
      },
};

module.exports = nextConfig
