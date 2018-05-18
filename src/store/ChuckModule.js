import { chuckNorrisService } from '../utils/ChuckNorrisService'

export const ChuckModule = {
  state: {
    joke: null,
    jokeCategory: ''
  },
  getters: {
    getJoke(state) {
      return state.joke
    }
  },
  mutations: {
    setJoke(state, joke) {
      state.joke = joke
    },
    setJokeCategory(state, jokeCategory) {
      state.jokeCategory = jokeCategory
    }
  },
  actions: {
    fetchJoke(store, next) {
      chuckNorrisService.getRandomJoke(store.state.jokeCategory).then((joke) => {
        store.commit('setJoke', joke)
        next()
      })
    }
  }
}