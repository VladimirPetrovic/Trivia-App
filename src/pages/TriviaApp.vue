<template>
  <div class="container">
    <div v-if="!showCategories && trivias.length">
      <ul class="list-group mt-1" v-for="trivia in trivias" :key="trivia.id">
        <li class="list-group-item" @click="showAnswer(trivia)">{{ trivia.question }}</li>
      </ul>
      <button
            type="button"
            class="btn btn-secondary mt-2"
            @click="showCategories = !showCategories"
          >
            Back to categories
          </button>
    </div>
    <div v-if="showCategories" class="mb-1">
      <ul class="list-group mt-1" v-for="triviaCategory in triviaCategories" :key="triviaCategory.id">
        <li class="list-group-item">
            {{ triviaCategory.title }}
          <button
            type="button"
            class="btn btn-primary float-right"
            @click="getQuestionsForCategory(triviaCategory.id)"
          >
            Show questions
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store } from '../store'

export default {
  data() {
    return {
      showCategories: true
    }
  },
  computed: {
    ...mapGetters({
      trivias: 'getRandomTrivias',
      triviaCategories: 'getRandomTriviaCategories'
    })
  },
  methods: {
    ...mapActions([
      'fetchQuestionsForCategory',
    ]),
    showAnswer(trivia) {
      alert(trivia.answer)
    },
    getQuestionsForCategory(triviaCategoryId) {
      this.fetchQuestionsForCategory(triviaCategoryId)
      setTimeout(() => {
        this.showCategories = false
      }, 250)
    }
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('fetchRandomTriviaCategories', next)
  },
}
</script>
