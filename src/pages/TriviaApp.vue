<template>
  <div class="container">
    <ul class="list-group mt-1" v-for="trivia in trivias" :key="trivia.id">
      <li class="list-group-item" @click="showAnswer(trivia)">{{ trivia.question }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      trivias: 'getRandomTrivias'
    })
  },
  methods: {
    ...mapActions([
      'fetchRandomTrivias'
    ]),
    showAnswer(trivia) {
      alert(trivia.answer)
    }
  },
  created() {
    this.fetchRandomTrivias()
  }
}
</script>
