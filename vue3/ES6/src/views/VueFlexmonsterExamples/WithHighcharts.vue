<template>
  <div>
    <h1 class="page-title">Integrating with Highcharts</h1>
    <div class="description-blocks first-description-block">
      <p>
        Integrate Flexmonster with Highcharts and see your data from a new
        perspective:
        <a
          href="https://www.flexmonster.com/doc/integration-with-highcharts/?r=rm_vue"
          target="_blank"
          class="title-link"
          >Integration with Highcharts</a
        >.
      </p>
    </div>
    <Pivot
      ref="pivot"
      toolbar
      height="600"
      report="https://cdn.flexmonster.com/github/highcharts-report.json"
      v-bind:reportcomplete="reportComplete"
      v-bind:shareReportConnection="{
        url: 'https://olap.flexmonster.com:9500',
      }"
      v-bind:beforetoolbarcreated="customizeToolbar"
      licenseFilePath="https://cdn.flexmonster.com/jsfiddle.charts.key"
    />
    <div class="chart-container">
      <div id="highcharts-container"></div>
    </div>
  </div>
</template>

<script>
import Highcharts from "highcharts";
// Importing Flexmonster Connector for Highcharts:
import "flexmonster/lib/flexmonster.highcharts";

import { defineComponent } from "vue";

export default /*#__PURE__*/ defineComponent({
  name: "WithHighcharts",
  methods: {
    customizeToolbar: function (toolbar) {
      toolbar.showShareReportTab = true;
    },
    drawChart: function () {
      this.$refs.pivot.flexmonster.highcharts.getData(
        {
          type: "spline",
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
});
</script>
