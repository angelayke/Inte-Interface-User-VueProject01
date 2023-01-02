import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'


import './assets/main.css'

const app = createApp(App)

app.use(router)

app.use(createPinia())
app.component('QuillEditor', QuillEditor);


app.mount('#app')
