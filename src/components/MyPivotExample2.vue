<template>
  <div>
    <h1>Flexmonster <a href="https://www.flexmonster.com/api/events/">events</a> example</h1>
    <Pivot
      ref="pivot"
      toolbar 
      v-bind:report="'https://cdn.flexmonster.com/reports/report.json'"
      v-bind:reportcomplete="myeventHandler1"
      v-bind:cellclick="myeventHandler2"
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
  name: "Example_2",
  //2. Defining the component:
  //Uncomment the lines below:
  // components: {
  //    Pivot
  // },
  methods: {
    myeventHandler1: function() {
      alert("Report is complete!");
    },
    myeventHandler2: function() {
      alert("Cell is clicked!");
    }
  }

};
</script>
