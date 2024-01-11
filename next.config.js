/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/logout',
        destination: '/api/logout',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/@:username',
        destination: '/user/:username',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
