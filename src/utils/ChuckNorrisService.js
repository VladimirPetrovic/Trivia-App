import ChuckClient from 'chucknorris-io'

export default class ChuckNorrisService {
  constructor() {
    this.client = new ChuckClient()
  }
  getRandomJoke(category = '') {
    return this.client.getRandomJoke(category)
  }
}

export const chuckNorrisService = new ChuckNorrisService()