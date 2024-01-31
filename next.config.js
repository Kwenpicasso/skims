/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: false,
  },
    images: {
        domains: ['cdn.sanity.io'],
      },
};

module.exports = nextConfig
