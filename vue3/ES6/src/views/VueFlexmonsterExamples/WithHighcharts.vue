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

<script>
import Highcharts from "highcharts";
//Importing Flexmonster's connector for Highcharts:
import "flexmonster/lib/flexmonster.highcharts";

import { defineComponent } from 'vue';

export default /*#__PURE__*/defineComponent({
  name: "WithHighcharts",
  methods: {
    customizeToolbar: function(toolbar) {
      toolbar.showShareReportTab = true;
    },
    drawChart: function () {
      this.$refs.pivot.flexmonster.highcharts.getData(
        {
          type: "area",
        },
        function (data) {
          Highcharts.chart("highcharts-container", data);
        },
        function (data) {
          Highcharts.chart("highcharts-container", data);
        }
      );
    },

    reportComplete: function () {
      this.$refs.pivot.flexmonster.off("reportcomplete");
      this.drawChart();
    },
  }
});
</script>
