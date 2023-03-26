import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import router stuff
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { createAuth0 } from '@auth0/auth0-vue'

// create router instance
const router = createRouter({
    // provide history implementation
    history: createWebHistory(),
    // inject routes
    routes
})

// get variables from env
const { VITE_AUTH0_DOMAIN, VITE_AUTH0_CLIENT_ID, VITE_AUTH0_CALLBACK_URL } = import.meta.env

// create vue app
createApp(App)
// use router instance
.use(router)
// use auth0
.use(
    createAuth0({
        domain: VITE_AUTH0_DOMAIN,
        clientId: VITE_AUTH0_CLIENT_ID,
        authorizationParams: {
            redirect_uri: VITE_AUTH0_CALLBACK_URL
        }
    })
)
// mount app to dom
.mount('#app')