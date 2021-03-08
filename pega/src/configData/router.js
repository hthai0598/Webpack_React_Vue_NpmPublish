import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import About from '../pages/About'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
    ]
})