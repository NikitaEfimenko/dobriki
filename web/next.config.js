/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/admin/:slug*',
        destination: `${process.env.NEXT_BACKEND_URL}/admin/:slug*`, 
      },
      {
        source: '/swagger/:slug*',
        destination: `${process.env.NEXT_BACKEND_URL}/swagger/:slug*`, 
      },
    ]
  },
  
}


module.exports = nextConfig
