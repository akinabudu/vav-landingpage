/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'd2ihacvfjd76z8.cloudfront.net',
            port: '',
            pathname: '/vav/**',
          },
        ],
      },
}

module.exports = nextConfig
