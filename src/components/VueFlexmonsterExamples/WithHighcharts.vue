<template>
  <div>
    <h3 class="page-title">
      How to
      <a
        class="title-link"
        target="blank"
        href="https://www.flexmonster.com/doc/integration-with-highcharts/"
      >integrate with Highcharts</a> example
    </h3>
    <Pivot
      ref="pivot"
      toolbar
      v-bind:report="'https://cdn.flexmonster.com/reports/report.json'"
      _v-bind:licenseFilePath="'https://cdn.flexmonster.com/jsfiddle.charts.key'"
      v-bind:reportcomplete="reportComplete"
      v-bind:licenseKey="'Z7Y4-10A24L-3B5Q5J-5L196A-452136-6W0F6L-0Y3A49-0I4042-226R6A-430W1B-4N5L'"
    ></Pivot>
    <br />
    <div id="highcharts-container"></div>
  </div>
</template>

<script>
import Highcharts from "highcharts";
//Importing Flexmonster's connector for Highcharts:
import "flexmonster/lib/flexmonster.highcharts";

export default {
  name: "Example_7",
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
