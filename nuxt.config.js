const map    = require('lodash/map')
const chunk  = require('lodash/chunk')
const concat = require('lodash/concat')
const path   = require('path')
const glob   = require('glob-fs')({ gitignore: true })

module.exports = {
  mode: 'universal',
  env : { DOMAIN: process.env.DOMAIN || 'http://adenvt.github.io' },
  head: {
    htmlAttrs: { lang: 'id' },
    title    : 'Ade Novid (@adenvt) · Frontend Web Developer',
    meta     : [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid    : 'description',
        name   : 'description',
        content: 'Frontend Web Developer from Indonesia, specialize on Vue and Laravel framework',
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
