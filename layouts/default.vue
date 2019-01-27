<template>
  <div class="app">
    <b-container>
      <app-header />

      <b-row>
        <b-col md="9">
          <div class="content">
            <nuxt />
          </div>
        </b-col>
      </b-row>

      <app-footer />
    </b-container>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'

export default {
  components: { AppHeader, AppFooter },
  head () {
    const canonical = `${process.env.DOMAIN}${this.$route.path}`

    return { link: [{ rel: 'canonical', href: canonical.replace('index.html', '') }] }
  },
}
</script>
