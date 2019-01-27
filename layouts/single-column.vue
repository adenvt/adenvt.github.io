<template>
  <div class="app">
    <b-container>
      <app-header />

      <b-row>
        <b-col cols="12">
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
import BaseLayout from './default'

export default { extends: BaseLayout }
</script>
