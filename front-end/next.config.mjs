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
        hostname: 'e3ba6e8732e83984.cdn.gocache.net',
      },
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.fallenstore.com.br',
      }, 
      {
        protocol: 'https',
        hostname: 'img-cdn.hltv.org',
      }, 
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      }, 
    ],
  },
};

export default nextConfig;
