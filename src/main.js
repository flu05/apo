import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import {router} from "@/rotalar/routes.js";
const Pinia=createPinia();
const app=createApp(App)
app.use(Pinia);
app.use(router);
app.mount('#app');
createApp(App).use(createPinia()).mount('#app')
