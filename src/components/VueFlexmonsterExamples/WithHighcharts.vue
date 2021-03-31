<template>
  <div>
    <h3 class="page-title">
      Integrating
      <a
        class="title-link"
        target="blank"
        href="https://www.flexmonster.com/doc/integration-with-highcharts/"
        >with Highcharts</a
      >
    </h3>
    <Pivot
      ref="pivot"
      toolbar
      v-bind:report="'https://cdn.flexmonster.com/reports/report.json'"
      v-bind:reportcomplete="reportComplete"
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

export default {
  name: "WithHighcharts",
  methods: {
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
  },
};
</script>
