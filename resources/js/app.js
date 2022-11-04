import './bootstrap';

import { createApp } from "vue/dist/vue.esm-bundler";
import App from "./App.vue";
import ElementPlus, {ElButton} from 'element-plus'
import router from './router'



const app = createApp({
    components: {
        App
    }
})

// Api requests
import api from "./api.js";

app.config.globalProperties.$api = api
app.use(ElementPlus)
app.use(router)
app.mount('#app')