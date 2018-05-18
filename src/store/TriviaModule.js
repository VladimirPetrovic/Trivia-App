import { triviaService } from '../utils/TriviaService'

export const TriviaModule = {
  state: {
    trivias: []
  },
  getters: {
    getRandomTrivias(state) {
      return state.trivias
    }
  },
  mutations: {
    setRandomTrivias(state, trivias) {
      state.trivias = trivias
    }
  },
  actions: {
    fetchRandomTrivias(store) {
      triviaService.getRandomTrivias().then(({ data }) => {
        store.commit('setRandomTrivias', data)
      })
    }
  }
}