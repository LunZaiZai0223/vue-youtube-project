const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/colors.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-youtube-project/'
    : '/'
})
