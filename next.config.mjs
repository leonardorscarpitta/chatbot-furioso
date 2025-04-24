/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'liquipedia.net',
        pathname: '/commons/images/**',
      },
      {
        protocol: 'https',
        hostname: 'pley.gg',
      },
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
