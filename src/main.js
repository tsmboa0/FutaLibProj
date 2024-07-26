import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/style.css'

function initialState () {
    return { 
        email: '',
        // name: '',
    }
}

const newStore = createStore({
    // plugins: [
    //     createPersistedState({
    //         storage: window.sessionStorage,
    //     }),
    // ],
    state: initialState,
    mutations: {
        // addName (state, name) {
        //     state.elecProvider = name
        // },
        addEmail (state, topic) {
            state.email = topic
        },
        reset (state) {
            // acquire initial state
            const s = initialState()
            Object.keys(s).forEach(key => {
              state[key] = s[key]
            })
          }
    },
});



window.$ = window.jQuery = require('jquery');

createApp(App).use(newStore).use(router).mount('#app')
