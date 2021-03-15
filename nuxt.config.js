export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-exp-sys',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    API_ENDPOINT: 'http://localhost:8080'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuelidate',
    '~/plugins/formatters',
    '~/plugins/event-bus',
    '~/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '~/assets/scss/_mixins.scss',
      '~/assets/scss/_style_resources.scss'
    ]
  },

  axios: {
    credentials: true,
    baseURL: 'http://localhost:8080'
  },

  server: {
    // host: '0.0.0.0',
    port: 3000
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
