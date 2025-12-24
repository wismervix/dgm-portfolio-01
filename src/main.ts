// import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'
import { createBootstrap } from 'bootstrap-vue-next'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css'
import "@fortawesome/fontawesome-free/js/all.js";

const app = createApp(App)

app.use(createPinia())
// app.use(router)
app.use(createBootstrap())

app.mount('#app')
