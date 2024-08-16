/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
      },
    ],
    unoptimized: true,
  },
  // output: 'export', // don't use with `next start` or api route
  // distDir: 'dist',
  // avoid CORS with proxy
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://makin-backend.vercel.app/:path*', // Proxy to Backend
        // :path*：這是一個佔位符，表示將匹配 source 中的所有路徑。* 代表匹配任何子路徑。
      },
    ]
  },
}

module.exports = nextConfig
