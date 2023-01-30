<template>
  <div>
    <h1 class="page-title">Pivot Table Demo</h1>
    <div class="description-blocks first-description-block">
      <p>
        Flexmonster is a fast and powerful JavaScript pivot grid for data
        visualization and reporting.
      </p>
      <p>
        With Flexmonster, you can create reports based on many data sources,
        including JSON, CSV, MongoDB, and SQL databases. Our component is easy
        to customize and configure, so it can be seamlessly integrated into any
        project.
      </p>
      <p>
        Visit
        <a
            href="https://www.flexmonster.com/doc/?r=rm_vue"
            target="_blank"
            class="title-link"
        >our documentation</a>
        for step-by-step guidance on Flexmonster.
      </p>
    </div>
    <Pivot
      ref="pivot"
      toolbar
      v-bind:height="600"
      v-bind:report="'https://cdn.flexmonster.com/github/demo-report.json'"
      v-bind:shareReportConnection="{
        url: 'https://olap.flexmonster.com:9500',
      }"
      v-bind:beforetoolbarcreated="customizeToolbar"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
  </div>
</template>

<script lang="ts">
//Using the vue-flexmonster module (local registration):
//1. Importing the vue-flexmonster module:
//Uncomment the lines below:
// import Pivot from "vue-flexmonster";
// import 'flexmonster/flexmonster.css';
import Vue from "vue";

export default Vue.extend({
  name: "PivotTableDemo",
  methods: {
    customizeToolbar(toolbar: Flexmonster.Toolbar): void {
      toolbar.showShareReportTab = true;
    },
  },
  //2. Defining the component:
  //Uncomment the lines below:
  // components: {
  //    Pivot
  // }
});
</script>