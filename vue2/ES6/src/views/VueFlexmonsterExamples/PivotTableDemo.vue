<template>
  <div>
    <h3 class="page-title">Pivot Table Demo</h3>
    <Pivot
      ref="pivot"
      toolbar
      v-bind:height="600"
      v-bind:report="'https://cdn.flexmonster.com/github/demo-report.json'"
      v-bind:shareReportConnection="{url: 'https://olap.flexmonster.com:9500'}"
      v-bind:beforetoolbarcreated="customizeToolbar"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
  </div>
</template>

<script>
//Using the vue-flexmonster module (local registration):
//1. Importing the vue-flexmonster module:
//Uncomment the lines below:
// import Pivot from "vue-flexmonster";
// import 'flexmonster/flexmonster.css';

export default {
  name: "PivotTableDemo",
  methods: {
    customizeToolbar: function(toolbar) {
      toolbar.showShareReportTab = true;
    }
  }
  //2. Defining the component:
  //Uncomment the lines below:
  // components: {
  //    Pivot
  // },
};
</script>
