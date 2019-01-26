<template>
  <div class="animated fadeIn error">
    <h1>
      {{ error.statusCode }}
    </h1>
    <p>
      {{ error.message }}
    </p>
    <b-link to="/">
      « back
    </b-link>
  </div>
</template>

<script>
export default {
  props     : ['error'],
  transition: {
    name: 'page',
    mode: 'out-in',
  },
}
</script>
