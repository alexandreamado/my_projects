import { createApp } from 'vue'
import './style.css'
import router from "./router.js"
import Home from '../src/components/Home.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(Home)
app.use(router)   
app.use(far) 
app.use(library) 
app.use(FontAwesomeIcon) 
app.mount('#app')
