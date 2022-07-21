/** @type {import('next').NextConfig} */
const path = require('path')
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['a0.muscache.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
