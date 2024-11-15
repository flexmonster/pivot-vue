import Pivot from "vue-flexmonster/vue3";
import "flexmonster/flexmonster.css";
//Import modules for charts to make them client-only
import 'flexmonster/lib/flexmonster.amcharts'
import 'flexmonster/lib/flexmonster.highcharts'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Pivot', Pivot);
})