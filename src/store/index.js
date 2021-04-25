import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sevenParam: [],
        fourParam: []
    },
    getters: {
        sevenParam: state => state.sevenParam,
        fourParam: state => state.fourParam,
    },
    mutations: {
        setSParam(state, data) {
            state.sevenParam = [...state.sevenParam, data]
        },
        setFParam(state, data) {
            state.fourParam = [...state.fourParam, data]
        }
    },
    actions: {},
    modules: {}
})