<template>
  <div>
    <h3 class="title-one page-title">Simple Usage Example</h3>
    <Pivot
      ref="pivot"
      toolbar
      v-bind:report="'https://cdn.flexmonster.com/reports/report.json'"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
  </div>
</template>

<script>
//Using the vue-flexmonster module (local registration):
//1. Importing the vue-flexmonster module:
//Uncomment the lines below:
// import {Pivot} from "vue-flexmonster";
// import 'flexmonster/flexmonster.css';

export default {
  name: "PivotTableDemo",
  //2. Defining the component:
  //Uncomment the lines below:
  // components: {
  //    Pivot
  // },
};
</script>
