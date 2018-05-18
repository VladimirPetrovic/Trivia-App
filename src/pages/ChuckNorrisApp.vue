<template>
  <div class="container">
    <h3>
      <span
        style="display:block; width:100%; word-wrap:break-word; color: #fff; background-color: #28a745; padding: 10px; border-radius: 5px; margin-top: 10px;">
        {{ joke }}
      </span>
    </h3>
    <div>
      <input
        type="text"
        class="form-control"
        v-model="category"
        placeholder="Unesite kategoriju" />
      <button
        type="button"
        class="btn btn-primary mt-3"
        @click="getNewJoke"
      >
        New Joke
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      category: ''
    }
  },
  computed: {
    ...mapGetters({
      joke: 'getJoke'
    })
  },
  created() {
    this.getNewJoke()
  },
  methods: {
    ...mapActions([
      'fetchJoke'
    ]),
    getNewJoke() {
      this.fetchJoke(this.category)
    }
  }
}
</script>
