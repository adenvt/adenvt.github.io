<template>
  <div class="animated fadeIn">
    <h1>
      Welcome
    </h1>

    <div class="post">
      <template v-for="post in data.list">
        <article
          :key="post.file"
          class="post--item"
        >
          <h2>
            <b-link :to="`/article/${post.file}`">
              {{ post.title }}
            </b-link>
          </h2>
          <p>
            {{ post.subtitle }}
          </p>
        </article>
      </template>
    </div>

    <pagination
      v-model="page"
      :total="data.meta.total_pages"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import Article from '@/utils/article'

export default {
  watchQuery: ['page'],
  components: { Pagination },
  data      : () => ({
    data: {
      list: [],
      meta: {},
    },
  }),
  asyncData ({ route }) {
    const page = parseInt(route.query.page || 1)

    return { data: Article.get(page) }
  },
  computed: {
    page: {
      get () {
        return parseInt(this.$route.query.page || 1)
      },
      set (page) {
        return this.$router.replace({ query: { page } })
      },
    },
  },
}
</script>
