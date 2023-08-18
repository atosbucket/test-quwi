export default {
  target: 'server',
  loading: {color:'#ccc'},
  head: {
    title: 'test-quwi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    {src: '~/assets/scss/main.scss', lang: 'scss'}
  ],
  plugins: [
  ],
  components: {
    dirs: [
      '~/components',
    ]
  },
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  build: {
  },
  axios: {
    baseURL: 'https://api.quwi.com/v2'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'token' },
          user: { url: 'auth/init', method: 'get', propertyName: '' },
          logout: {url: 'auth/logout', method: 'post'}
        }
      }
    }
  }
}
