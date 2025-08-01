import HighchartsVue from "highcharts-vue";
import "highcharts/modules/accessibility";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(HighchartsVue);
});