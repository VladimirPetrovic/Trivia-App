import axios from 'axios'
export default class TriviaService {
    constructor() {
        axios.defaults.baseURL = 'http://jservice.io/api/'
    }

    getRandomTrivias() {
        return axios.get('random', {
            params: {
                count: 30
            }
        })
    }
    getRandomTriviaCategories() {
        return axios.get('categories', {
            params: {
                count: 10
            }
        })
    }
    getQuestionsForCategory(id) {
        return axios.get('category', {
            params: {
                id
            }
        })
    }
}

export const triviaService = new TriviaService()