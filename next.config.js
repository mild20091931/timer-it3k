const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')

require('dotenv').config()

const evnconfig = {
  useFileSystemPublicRoutes: true,
  publicRuntimeConfig: {
    PATH_SOCKET:process.env.PATH_SOCKET,
  },
  serverRuntimeConfig: {
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD
  }
}

module.exports = withPlugins([
  [withCSS]
], evnconfig)
