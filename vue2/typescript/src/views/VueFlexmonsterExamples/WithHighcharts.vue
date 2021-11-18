<template>
  <div>
    <h3 class="page-title">
      Integrating
      <a
        class="title-link"
        target="blank"
        href="https://www.flexmonster.com/doc/integration-with-highcharts/?r=rm_vue"
        >with Highcharts</a
      >
    </h3>
    <Pivot
      ref="pivot"
      toolbar
      v-bind:height="600"
      v-bind:report="'https://cdn.flexmonster.com/github/demo-report.json'"
      v-bind:reportcomplete="reportComplete"
      v-bind:shareReportConnection="{
        url: 'https://olap.flexmonster.com:9500',
      }"
      v-bind:beforetoolbarcreated="customizeToolbar"
      v-bind:licenseFilePath="'https://cdn.flexmonster.com/jsfiddle.charts.key'"
    ></Pivot>
    <div class="chart-container">
      <div id="highcharts-container"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Highcharts from "highcharts";
//Importing Flexmonster's connector for Highcharts:
import "flexmonster/lib/flexmonster.highcharts";
import Pivot from "vue-flexmonster";
import Flexmonster from "flexmonster/types/flexmonster";
import Vue from 'vue';

export default Vue.extend({
  name: "WithHighcharts",
  methods: {
    customizeToolbar(toolbar : Flexmonster.Toolbar) : void {
      toolbar.showShareReportTab = true;
    },
    drawChart() : void {
      ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).highcharts?.getData(
        {
          type: "area",
        },
        function (data: Flexmonster.GetDataValueObject) {
          Highcharts.chart("highcharts-container", data as Highcharts.Options);
        },
        function (data: Flexmonster.GetDataValueObject) {
          Highcharts.chart("highcharts-container", data as Highcharts.Options);
        }
      );
    },

    reportComplete() : void {
      ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).off("reportcomplete");
      this.drawChart();
    },
  },
  // components: {
  //   Pivot
  // }
});
</script>
