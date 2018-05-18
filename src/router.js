import Vue from 'vue'
import VueRouter from 'vue-router'

import TriviaApp from './pages/TriviaApp.vue'
import ChuckNorrisApp from './pages/ChuckNorrisApp.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: TriviaApp, name: 'home' },
    { path: '/chuck-norris', component: ChuckNorrisApp, name: 'chuck-norris' }
]

export const router = new VueRouter({
    mode: 'history',
    routes
})