import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/app.css'

const pinia = createPinia()
createApp(App)
  .use(autoAnimatePlugin)
  .use(pinia)
  .mount('#app')
