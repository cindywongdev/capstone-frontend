import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import router stuff
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

// create router instance
const router = createRouter({
    // provide history implementation
    history: createWebHistory(),
    // inject routes
    routes
})

// create vue app
createApp(App)
// use router instance
.use(router)
// mount app to dom
.mount('#app')