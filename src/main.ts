import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify.ts'
import router from './router.ts'
import store from './store.ts'

createApp(App)
.use(vuetify)
.use(router)
.use(store)
.mount('#app')
