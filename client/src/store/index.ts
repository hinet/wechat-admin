import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Menu from "./modules/Menu";
const store = createStore({ 
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        "menu": Menu
    },
    plugins: [
        createPersistedState({
            storage: window.localStorage
        })
    ]
 })
export default store;