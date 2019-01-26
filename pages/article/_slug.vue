<template>
  <article class="animated fadeIn">
    <b-link
      class="back-btn"
      to="/"
    >
      « back
    </b-link>

    <div
      class="article-body"
      v-html="data.raw"
    />

    <vue-disqus
      class="mt-5"
      shortname="adenovid"
      :identifier="$route.path"
    />
  </article>
</template>

<script>
import Article from '@/utils/article'

export default {
  data: () => ({
    data: {
      file    : '',
      raw     : '',
      title   : '',
      subtitle: '',
    },
  }),
  asyncData ({ params, error }) {
    try {
      return { data: Article.read(params.slug) }
    } catch (err) {
      if (err) {
        return error({
          statusCode: 404,
          message   : 'Page not found',
        })
      }
    }
  },
}
</script>
