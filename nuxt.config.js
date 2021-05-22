import firebaseConfig from "./firebase.config";
export default {
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: firebaseConfig,
        services: {
          auth: true,
          firestore: true,
          storage: true,
          // functions: true,
          // database: true,
          // messaging: true,
          // performance: true,
          // analytics: true,
          // remoteConfig: true
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
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
