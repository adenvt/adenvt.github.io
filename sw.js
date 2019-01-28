importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/23490a56f05318e0f18c.js",
    "revision": "4c7d623aed62735737c73ab6b7593edc"
  },
  {
    "url": "/_nuxt/48cc1ae0aea5ef10aed9.js",
    "revision": "72bfee9055a49c3424f1c32e9c200930"
  },
  {
    "url": "/_nuxt/792e835f7be77ac28750.js",
    "revision": "88d454a0b095440d4849239e98bb06c3"
  },
  {
    "url": "/_nuxt/96f4300db7f4eab5f333.js",
    "revision": "958387666da6978e0032e81ffb4fa617"
  },
  {
    "url": "/_nuxt/ae1ed3c821de21368313.js",
    "revision": "c01040850924056fbada5d46cf6f2242"
  },
  {
    "url": "/_nuxt/b4cfceac74a44fa2286a.js",
    "revision": "5ba63a648f931e7459dba3c04ca72321"
  },
  {
    "url": "/_nuxt/d2e0648963069588db53.js",
    "revision": "17a8728a1a06478a0f10001137be40ec"
  },
  {
    "url": "/_nuxt/f2b4071a08e279a11596.js",
    "revision": "9cccba9d55d1b6b83fb8ce2142577092"
  },
  {
    "url": "/_nuxt/fc9cbb5b11e4c81c5da2.js",
    "revision": "686e4126fa5c2853da9a3e0cbdee1241"
  }
], {
  "cacheId": "adenvt.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
