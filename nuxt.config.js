const map   = require('lodash/map')
const path  = require('path')
const merge = require('webpack-merge')
const glob  = require('glob-fs')({ gitignore: true })

const DOMAIN = process.env.DOMAIN || 'https://adenvt.github.io'

const files  = glob.readdirSync('./article/*.md')
const routes = map(files, (file) => {
  const slug = path.basename(file, '.md')

  return `/article/${slug}/`
})

module.exports = {
  mode: 'universal',
  env : { DOMAIN: DOMAIN },
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
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Iceberg|Open+Sans:400,700' },
    ],
  },
  loading: { color: '#fff' },
  css    : [ '@/assets/scss/app.scss' ],
  plugins: [ '@/plugins/disqus' ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-simple-line-icons',
    'nuxt-webfontloader',
    ['bootstrap-vue/nuxt', { css: false }],
  ],
  manifest: {
    name            : 'adenov.id',
    short_name      : 'adenov.id',
    description     : 'Ade Novid Personal Blog',
    theme_color     : '#42b883',
    background_color: '#ffffff',
    orientation     : 'portrait-primary',
    lang            : 'id',
  },
  webfontloader: { google: { families: ['Iceberg', 'Open+Sans:400,700'] } },
  build        : {
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
    extend (config) {
      return merge.smart(config, {
        module: {
          rules: [
            {
              test: /\.md$/,
              use : [
                {
                  loader : 'html-loader',
                  options: { minimize: true },
                },
                {
                  loader : '@nuxtjs/markdownit-loader',
                  options: {
                    preset : 'default',
                    linkify: true,
                    breaks : true,
                  },
                },
              ],
            },
          ],
        },
      })
    },
  },
  generate: {
    fallback: true,
    routes  : routes,
  },
  sitemap: {
    generate: true,
    hostname: DOMAIN,
    routes  : routes,
  },
}
