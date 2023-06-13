/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
);

const nextConfig = withNextIntl({
  experimental: { appDir: true },
  /**
   * next/image Un-configured Host
   * https://nextjs.org/docs/messages/next-image-unconfigured-host
   *
   * One of your pages that leverages the next/image component, passed a src
   * value that uses a hostname in the URL that isn't defined in the images.remotePatterns in next.config.js.
   */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'robohash.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
});

module.exports = nextConfig;
