const Chuck = require('chucknorris-io'),
  client = new Chuck();

export default class ChuckNorrisService {
  getRandomJoke() {
    return client.getRandomJoke()
  }
}

export const chuckNorrisService = new ChuckNorrisService()