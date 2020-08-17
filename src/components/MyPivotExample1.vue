<template>
  <div>
    <h1>Simple usage example</h1>
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
  name: "Example_3",
  //2. Defining the component:
  //Uncomment the lines below:
  // components: {
  //    Pivot
  // },

};
</script>
