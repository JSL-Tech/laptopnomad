export default {
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'base',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/index.css',
  ],
  styleResources: {
    scss: [
        '~/assets/css/abstracts/_variables.scss',
        '~/assets/css/abstracts/_mixins.scss',
    ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/persistedState.client.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          projectId: process.env.PROJECT_ID,
          storageBucket:process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID,
          measurementId: process.env.MEASUREMENT_ID
        },
        services: {
          storage: true,
          // Initializes Firebase Authentication and makes it available via $fire.auth and $fireModule.auth
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedMutation: 'auth/onAuthStateChangedMutation',
              // onAuthStateChangedAction: 'auth/onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false, // default
            // emulatorPort: 9099,
            // emulatorPort: process.env.NODE_ENV === 'development' ? 9099 : undefined,
            // emulatorHost: 'http://localhost',
          },
          firestore: {
            memoryOnly: false, // default
            chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
            enablePersistence: true,
            // emulatorPort: 8080,
            // emulatorHost: 'localhost',
            // settings: {
              // Firestore Settings - currently only works in SPA mode
            // }
          }
        }
      }
    ],
    '@nuxtjs/style-resources',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
