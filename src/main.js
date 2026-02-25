import "bootstrap"
import './assets/main.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import globalComputed from './mixin/computed.js'

const app = createApp(App)

//GET URL FROM HEADER
let languageName = import.meta.env.VITE_LANGUAGE_NAME
let webPageUrl = import.meta.env.VITE_WEB_PAGE_URL
let isLocalHost = import.meta.env.VITE_IS_LOCALHOST
let dataPolicyName = import.meta.env.VITE_DATA_POLICY_NAME

app.config.globalProperties.$languageName = languageName
app.config.globalProperties.$webPageUrl = webPageUrl
app.config.globalProperties.$isLocalHost = isLocalHost
app.config.globalProperties.$dataPolicyName = dataPolicyName

app.use(router)
app.mixin(globalComputed)

app.mount('#app')