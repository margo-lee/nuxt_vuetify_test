// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true }
// })
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
   devtools: { enabled: true },
  //...
  build: {
    transpile: ['vuetify'],
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxt_vuetify_test/' : '/',
    buildAssetsDir: '/static/'
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  
  css: [
     '~/styles/main.scss', // 添加你的自定義 CSS 文件的路徑
  ],
  // css: ['~/style/style.scss']
})
