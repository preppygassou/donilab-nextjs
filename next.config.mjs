/** @type {import('next').NextConfig} */
//const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  /* i18n, */
  images: { 
      /* remotePatterns: [
        {
          protocol: 'https',
          hostname: 'upload.donilab.org',
          port: '',
          pathname: '/uploads/**',
        },
      ], */
      domains: ['upload.donilab.ml'], 
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.REACT_APP_BASE_URL + '/:path*',
      }
    ]
  },
  env: {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
  },
  
};

export default nextConfig;