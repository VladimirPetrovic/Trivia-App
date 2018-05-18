import { chuckNorrisService } from '../utils/ChuckNorrisService'

export const ChuckModule = {
  state: {
    joke: ''
  },
  getters: {
    getJoke(state) {
      return state.joke
    }
  },
  mutations: {
    setJoke(state, joke) {
      state.joke = joke
    }
  },
  actions: {
    fetchJoke(store) {
      let joke = ''
      chuckNorrisService.getRandomJoke().then(({ value }) => {
        store.commit('setJoke', value)
      })


      // store.commit('setJoke', joke)
    }
  }
}