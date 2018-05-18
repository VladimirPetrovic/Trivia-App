import Vue from 'vue'
import VueRouter from 'vue-router'

import TriviaApp from './pages/TriviaApp.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: TriviaApp, name: 'home' }
]

export const router = new VueRouter({
    mode: 'history',
    routes
})