import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import home from './modules/home'
import app from './modules/app'
import video from './modules/video'
import headline from './modules/headline'
import record from './modules/record'
import search from './modules/search'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        user,
        home,
        video,
        headline,
        record,
        search
    },
    getters
})

export default store