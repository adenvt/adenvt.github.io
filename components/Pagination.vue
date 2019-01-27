<template>
  <div class="paging">
    <b-btn-group>
      <b-btn
        variant="green"
        name="prev"
        :disabled="value <= 1"
        @click="prev"
      >
        <i class="icon-arrow-left" />
      </b-btn>
      <b-btn
        variant="green"
        name="next"
        :disabled="value >= total"
        @click="next"
      >
        <i class="icon-arrow-right" />
      </b-btn>
    </b-btn-group>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    total: Number,
  },
  methods: {
    prev () {
      const page = Math.max(1, this.value - 1)

      this.$emit('input', page)
    },
    next () {
      const page = Math.min(this.total, this.value + 1)

      this.$emit('input', page)
    },
  },
}
</script>
