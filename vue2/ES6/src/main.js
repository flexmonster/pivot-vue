import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router'
import './App.css';

//Using the vue-flexmonster module as a plugin (global registration):
//1. Importing the vue-flexmonster module and css: 
import Pivot from "vue-flexmonster";
import PivotTableDemo from './views/VueFlexmonsterExamples/PivotTableDemo.vue'

import 'flexmonster/flexmonster.css';
//You can use a different theme by specifying the corresponding path
//For example, to load the Green theme:
//import 'flexmonster/theme/green/flexmonster.css';

//2. Referring to the vue-flexmonster module as a plugin: 
Vue.use(Pivot);
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
