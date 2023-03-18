import { createStore } from 'vuex'
import useCounter from './composables/useCounter'

export default createStore({
    state: {
        counter: useCounter(),
    },
    mutations: {},
    actions: {},
    modules: {},
})
