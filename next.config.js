/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com', 'crafatar.com'],
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    buildExcludes: [/middleware-manifest.json$/],
  },
  async rewrites() {
    return [
      {
        source: '/proxy/:path*',
        destination: 'https://:path*',
      },
    ];
  },
});
