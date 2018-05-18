<template>
  <div class="container">
    {{ joke }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      joke: 'getJoke'
    })
  },
  created() {
    this.$store.dispatch('fetchJoke')
  },
}
</script>
