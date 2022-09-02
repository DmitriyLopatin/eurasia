/** @type {import('next').NextConfig} */

const { i18n } = require('./nex-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
}

module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },
  nextConfig,
  i18n
}
