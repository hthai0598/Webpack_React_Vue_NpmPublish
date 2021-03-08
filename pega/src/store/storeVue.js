import actions from '@/store/actions.js'
import mutations from '@/store/mutations.js'
import state from '@/store/state.js'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions
})

