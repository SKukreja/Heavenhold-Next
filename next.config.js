const { protocol, hostname, port, pathname } = new URL(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
);

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
      {
        protocol: 'https',
        hostname: 'heavenhold-media.s3.amazonaws.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: protocol.slice(0, -1),
        hostname,
        port,
        pathname: `${pathname}/**`,
      },
    ],
  },
};

module.exports = nextConfig;