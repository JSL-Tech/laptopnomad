export default {
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    STRIPE_PK: process.env.STRIPE_PK
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Laptop Nomad',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Premium sleeves to protect your 13 inch laptop' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap', onload: "this.rel = 'StyleSheet'" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/index.css'
  ],
  styleResources: {
    scss: [
      '~/assets/css/abstracts/_variables.scss',
      '~/assets/css/abstracts/_mixins.scss'
    ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/persistedState.client.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID,
          measurementId: process.env.MEASUREMENT_ID
        },
        services: {
          storage: true,
          // Initializes Firebase Authentication and makes it available via $fire.auth and $fireModule.auth
          firestore: {
            memoryOnly: false, // default
            chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
            enablePersistence: true
            // emulatorPort: 8080,
            // emulatorHost: 'localhost',
            // settings: {
            // Firestore Settings - currently only works in SPA mode
            // }
          }
        }
      }
    ],
    '@nuxtjs/style-resources'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { loaders }) {
      loaders.scss.additionalData = '@use "sass:math";'
    }
  }
}
