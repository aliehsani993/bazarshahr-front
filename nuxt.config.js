export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target:'static',
  srcDir: __dirname,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bazarshahr',
    htmlAttrs: {
      lang: 'fa'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favico.png'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'swiper/swiper-bundle.css',
    '~/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/price.js',
    '~/plugins/axios.js',
    '~/plugins/linkable.js',
    {src: '@/plugins/nuxt-swiper-plugin.js', mode: 'client'},
  ],

  server: {
    host: '0',
    port: 3000
  },

  router: {
    middleware: ['auth']
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
    "@nuxtjs/moment",
  ],

  moment: {
    defaultLocale: "fa",
    locales: ["fa"],
    timezone: {matchZones: "Iran"},
    plugins: ["moment-jalaali"]
  },

  fontawesome: {
    icons: {
      solid: [
        'faHome',
        'faCog',
        'faStar',
        'faSearch',
        'faChevronLeft',
        'faStore',
        'faCheck',
        'faPen',
        'faArrowRight',
        'faFilter',
        'faSortAmountDown',
        'faShieldAlt',
        'faTrash',
        'faMapMarkerAlt',
        'faTimes',
        'faEnvelope',
        'faPhone',
        'faUser',
        'faShoppingCart',
        'faHeart',
        'faEye',
        'faKey',
        'faSignOutAlt'
      ]
    }
  },

  styleResources: {
    scss: ['~/assets/scss/_variables.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/robots',
    '@nuxtjs/proxy'
  ],

  i18n: {
    locales: [
      {
        code: 'fa',
        name: 'فاررسی',
        dir: 'rtl'
      },
      {
        code: 'en',
        name: 'English',
        dir: 'ltr'
      },
    ],
    vueI18nLoader: true,
    defaultLocale: 'fa',
    vueI18n: {fallbackLocale: 'en'},
  },

  auth: {
    redirect: {
      login: '/auth/login',
      home: '/',
      logout: '/auth/login',
      callback: false, // not used here in our case
    },
    strategies: {
      localPassword: {
        _scheme: 'local',
        token: {
          type: 'Bearer'
        },
        endpoints: {
          login: {url: '/auth/login/password', method: 'post', propertyName: 'data.auth_token'},
          logout: {url: '/auth/logout', method: 'post'},
          user: {url: '/user/profile', method: 'get', propertyName: 'data'}
        }
      },
      local: {
        _scheme: 'local',
        token: {
          type: 'Bearer'
        },
        endpoints: {
          login: {url: '/auth/login/otp/verify', method: 'post', propertyName: 'data.auth_token'},
          logout: {url: '/auth/logout', method: 'post'},
          user: {url: '/user/profile', method: 'get', propertyName: 'data'}
        }
      }
    }
  },

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    proxy: true
  },
  proxy:{
    '/v1/': {
      target: 'https://api.bazarshahr.dev/v1',
      pathRewrite: {'^/v1/': ''},
      changeOrigin: true
    }
  }
}
