const { withAtlasConfig } = require("@wpengine/atlas-next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.heavenhold.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

module.exports = withAtlasConfig(nextConfig);
