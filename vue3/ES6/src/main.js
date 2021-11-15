import { createApp } from 'vue'
import App from './App.vue'
import './App.css';
import router from './router'

import 'flexmonster/flexmonster.css';
//You can use a different theme by specifying the corresponding path
//For example, to load the Green theme:
//import 'flexmonster/theme/green/flexmonster.css';

//Using the vue-flexmonster module as a plugin (global registration):
//1. Importing the vue-flexmonster module: 
import Pivot from "vue-flexmonster/vue3";

const app = createApp(App)

//2. Referring to the vue-flexmonster module as a plugin: 
app.use(Pivot)
app.use(router)
app.mount('#app')
