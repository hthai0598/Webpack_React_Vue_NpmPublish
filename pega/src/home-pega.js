// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import "./assets/css/main.css"

import Home from './pages/Home'
import { commonHelper } from '@/utils/helper.js'

Vue.config.productionTip = false

//vuex
import Vuex from 'vuex'
Vue.use(Vuex)

import storePlugin from '@/store/storePlugin'
Vue.use(storePlugin)

const enumFunc = {
    popupLoaded: 'popupLoaded',
    popupRelatedLoaded: 'popupRelatedLoaded',
    loaded: 'loaded',
    popupClosed:'popupClosed'
}

export default {
    init: function (func = {},) {
        let functions = () => {
            return func;
        }
        Vue.mixin({
            data() {
                return {
                    user: commonHelper.getCookie('user') != null ? commonHelper.getCookie('user') : null,
                    origin: window.location.pathname,
                    titlePage: document.title,
                    category: false,
                }
            },
            created() {
                this.buildMethod = functions();
            }
        })
        if (functions().domainApi == null || functions().domainApi == undefined || functions().domainApi == "") {
            throw new Error("domainApi is not empty !!!")
        }
        if (functions().domain == null || functions().domain == undefined || functions().domain == "") {
            throw new Error("domain is not empty !!!")
        }
        if (functions().elm[0] == "#") {
            var dom = document.getElementById(functions().elm.replace("#", ""));
            const vuecomp = Vue.extend(Home);
            const component = new vuecomp().$mount()
            dom.append(component.$el)
        }
        else {
            throw new Error("Only allow attributes Id example (#id)")
        };
    },
    methods: {
        popupLoaded: function (func) {
            if (func.hasOwnProperty(enumFunc.popupLoaded)) {
                return func.popupLoaded();
            }
        },
        popupRelatedLoaded: function (func) {
            if (func.hasOwnProperty(enumFunc.popupLoaded)) {
                return func.popupLoaded();
            }
        },
        loaded: function (func) {
            if (func.hasOwnProperty(enumFunc.loaded)) {
                return func.loaded();
            }
        },
        popupClosed: function (func) {
            if (func.hasOwnProperty(enumFunc.popupClosed)) {
                return func.popupClosed();
            }
        }
    },
}
