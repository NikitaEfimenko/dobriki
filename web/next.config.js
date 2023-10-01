/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  importScripts: ['/worker.js']
})


const nextConfig = {
  trailingSlash: true,
  async rewrites() {

    return [
      {
        source: '/admin/:slug*',
        destination: `${process.env.NEXT_BACKEND_URL}/admin/:slug*`, 
      },
      {
        source: '/backend/:path*',
        destination: `${process.env.NEXT_BACKEND_URL}/:path*/`, 
      },
      {
        source: '/swagger/:slug*',
        destination: `${process.env.NEXT_BACKEND_URL}/swagger/:slug*`, 
      },
    ]
  },
  images: {
    domains: ['https://i.pravatar.cc', '94.241.175.55']
  }
}

module.exports = withPWA({
  ...nextConfig,
  reactStrictMode: false,
  swcMinify: false,
})

module.exports = nextConfig
