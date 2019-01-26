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
import AppHeader from '@/components/Header.vue'
import AppFooter from '@/components/Footer.vue'

export default { components: { AppHeader, AppFooter } }
</script>
