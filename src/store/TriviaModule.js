import { triviaService } from '../utils/TriviaService'

export const TriviaModule = {
  state: {
    trivias: [],
    triviaCategories: [],
  },
  getters: {
    getRandomTrivias(state) {
      return state.trivias
    },
    getRandomTriviaCategories(state) {
      return state.triviaCategories
    }
  },
  mutations: {
    setRandomTrivias(state, trivias) {
      state.trivias = trivias
    },
    setRandomTriviaCategories(state, triviaCategories) {
      state.triviaCategories = triviaCategories
    }
  },
  actions: {
    fetchRandomTrivias(store) {
      triviaService.getRandomTrivias().then(({ data }) => {
        store.commit('setRandomTrivias', data)
      })
    },
    fetchRandomTriviaCategories(store, next) {
      triviaService.getRandomTriviaCategories().then(({ data }) => {
        store.commit('setRandomTriviaCategories', data)
        next()
      })
    },
    fetchQuestionsForCategory(store, id) {
      triviaService.getQuestionsForCategory(id).then(({ data }) => {
          store.commit('setRandomTrivias', data.clues)
      })
    }
  }
}