<template>
  <div class="container">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="joke.iconUrl" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Joke</h5>
        <p class="card-text">{{ joke.value }}.</p>
      </div>
    </div>
    <div>
      <input
        type="text"
        class="form-control mt-4"
        @input="setCategory"
        placeholder="Unesite kategoriju" />
      <button
        type="button"
        class="btn btn-primary mt-2"
        @click="getNewJoke"
      >
        New Joke
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { store } from '../store'

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
  beforeRouteEnter(to, from, next) {
    store.dispatch('fetchJoke', next)
  },
  methods: {
    ...mapMutations([
      'setJokeCategory'
    ]),
    setCategory(event) {
      this.setJokeCategory(event.target.value)
    },
    getNewJoke() {
      store.dispatch('fetchJoke', () => {})
    }
  }
}
</script>
