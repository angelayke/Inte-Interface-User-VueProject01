import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// Make BootstrapVue available throughout your project app au lieu de Vue
app.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin app au lieu de Vue
app.use(IconsPlugin)

app.mount('#app')
