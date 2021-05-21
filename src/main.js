import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import http from '@/http'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp({})
app.config.globalProperties.$http = http

createApp(App).use(router).use(VueAxios, axios).mount('#app')
