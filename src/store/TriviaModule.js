import { triviaService } from '../utils/TriviaService'

export const TriviaModule = {
  state: {
    trivia: ''
  },
  getters: {
    getTrivia(state) {
      return state.trivia
    }
  },
  mutations: {},
  actions: {}
}