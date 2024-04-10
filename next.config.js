/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.rammble.net',
        protocol: 'https',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/logout',
        destination: '/api/logout',
      },
      {
        source: '/is_logged_in',
        destination: '/api/isLoggedIn',
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
      {
        source: '/settings',
        destination: '/settings/account',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
