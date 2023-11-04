/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
