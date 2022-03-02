/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com', 'crafatar.com', 'api.qrserver.com', 'avatars.githubusercontent.com'],
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
  webpack: (config, { buildId, webpack }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.BUILD_ID': JSON.stringify(buildId),
      }),
    );
    return config;
  },
});
