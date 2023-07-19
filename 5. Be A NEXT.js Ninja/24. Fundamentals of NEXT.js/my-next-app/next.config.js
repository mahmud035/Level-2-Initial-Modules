/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'www.pngkey.com',
      },
    ],
  },
};

module.exports = nextConfig;
