const map    = require('lodash/map')
const chunk  = require('lodash/chunk')
const concat = require('lodash/concat')
const path   = require('path')
const glob   = require('glob-fs')({ gitignore: true })
const pkg    = require('./package')

module.exports = {
  mode: 'universal',
  head: {
    htmlAttrs: { lang: 'id' },
    title    : 'adenov.id',
    meta     : [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid    : 'description',
        name   : 'description',
        content: pkg.description,
      },
    ],
    link: [
      {
        rel : 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Iceberg|Open+Sans:400,700' },
    ],
  },
  loading: { color: '#fff' },
  css    : [ '@/assets/scss/app.scss' ],
  plugins: [ '@/plugins/disqus' ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    'nuxt-simple-line-icons',
    ['bootstrap-vue/nuxt', { css: false }],
  ],
  markdownit: {
    preset : 'default',
    linkify: true,
    breaks : true,
  },
  build: {
    loaders: {
      vue: {
        transformAssetUrls: {
          'img'             : 'src',
          'image'           : 'xlink:href',
          'b-img'           : 'src',
          'b-img-lazy'      : ['src', 'blank-src'],
          'b-card'          : 'img-src',
          'b-card-img'      : 'img-src',
          'b-carousel-slide': 'img-src',
          'b-embed'         : 'src',
          'img-viewer'      : 'src',
        },
      },
    },
  },
  generate: {
    fallback: true,
    routes () {
      const files = glob.readdirSync('./article/*.md')
      const pages = chunk(files, 5)

      const home = map(pages, (page, index) => {
        return `/?page=${index + 1}`
      })

      const articles = map(files, (file, index) => {
        const slug = path.basename(file, '.md')

        return `/article/${slug}`
      })

      return concat(home, articles)
    },
  },
}
