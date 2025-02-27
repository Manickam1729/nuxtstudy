export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
 
  head: {
    title: 'study',
    htmlAttrs: {
      lang: 'en'
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ 'plugins/firebase.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
   //'~/modules/ngrok/index.js'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
   //message: 'hello',
  modules: [ 'bootstrap-vue/nuxt',
  '~/modules/ngrok/index.js'
                          
   // '~/modules/hello',
    // Passing options directly
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
 
}

