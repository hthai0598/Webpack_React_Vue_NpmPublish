import storeVue from '@/store/storeVue.js'
export default {
    storeVue,
    install(Vue, options) {
        Vue.prototype.$store = storeVue
    }
}