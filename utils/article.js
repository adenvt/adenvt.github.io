import cheerio from 'cheerio'

const modules = require.context('../article/', false, /\.md$/)
const pages   = modules.keys().map((file) => {
  return read(file.replace(/(\.\/|\.md)/g, ''))
})

function read (file) {
  const raw = modules(`./${file}.md`)
  const $   = cheerio.load(raw)

  return {
    file    : file,
    raw     : raw,
    title   : $('section > h1').eq(0).text(),
    subtitle: $('section > blockquote').eq(0).text(),
  }
}

function getPaginatedItems (items, page = 1, limit = 5) {
  const offset         = (page - 1) * limit
  const paginatedItems = items.slice(offset).slice(0, limit)

  return {
    list: paginatedItems,
    meta: {
      page       : page,
      per_page   : limit,
      total      : items.length,
      total_pages: Math.ceil(items.length / limit),
    },
  }
}

export default {
  all () {
    return pages
  },
  get (page, limit = 5) {
    return getPaginatedItems(pages, page, limit)
  },
  read (file) {
    return read(file)
  },
}
