const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    // https://stackoverflow.com/questions/66505054/vuetify-webpack-error-compiling-custom-variables-sass-loader-failed
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/colors.scss";`
      }
    }
  }
})
