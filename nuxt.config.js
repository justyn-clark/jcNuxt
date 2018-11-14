const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'JC Nuxt VueJS App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    style: [
      { cssText: ':root { --main-cool-color: #526488 }', type: 'text/css' }
    ],
    script: [
      { innerHTML: '{ "@context": "http://schema.org" }', type: 'application/ld+json' }
    ],
    // Each key:value maps to the equivalent attribute:value of the <html> element.
    // Example output: <html foo="bar" amp></html>
    htmlAttrs: {
      class: 'jc',
      amp: undefined
    },

    // Each key:value maps to the equivalent attribute:value of the <body> element.
    // Example output: <body bar="baz">Foo Bar</body>
    bodyAttrs: {
      class: 'jc'
    },

    // Maps to a newly-created <base> element, where object properties map to attributes.
    // Example output: <base target="_blank" href="/">
    base: {
      target: '_blank',
      href: '/'
    },

    // Each item in the array maps to a newly-created <noscript> element,
    // where object properties map to attributes.
    noscript: [
      { innerHTML: 'This website requires JavaScript.' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // '@/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    ['nuxt-sass-resources-loader', '@/assets/scss/styles.scss'],


  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    analyze: true,
    cssSourceMap: true,
    extractCSS: {
      allChunks: true
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
