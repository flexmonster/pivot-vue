<template>
  <div>
    <h1 class="page-title">Integrating with amCharts</h1>
    <div class="description-blocks first-description-block">
      <p>
        Extend Flexmonster’s visualization functionality by integrating with the
        amCharts library:
        <a
          href="https://www.flexmonster.com/doc/integration-with-amcharts/?r=rm_vue"
          target="_blank"
          class="title-link"
          >Integration with amCharts</a
        >.
      </p>
    </div>
    <Pivot
      ref="pivot"
      toolbar
      height="600"
      report="https://cdn.flexmonster.com/github/demo-report.json"
      v-bind:reportcomplete="reportComplete"
      v-bind:shareReportConnection="{
        url: 'https://olap.flexmonster.com:9500',
      }"
      v-bind:beforetoolbarcreated="customizeToolbar"
      licenseFilePath="https://cdn.flexmonster.com/jsfiddle.charts.key"
    />
    <div class="chart-container">
      <div id="amcharts-container" style="width: 100%; height: 500px"></div>
    </div>
  </div>
</template>

<script>
// amCharts imports
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Apply amCharts theme */
am4core.useTheme(am4themes_animated);

// Importing Flexmonster Connector for amCharts:
import "flexmonster/lib/flexmonster.amcharts";
import { defineComponent } from 'vue';

export default /*#__PURE__*/defineComponent({
  name: "WithAmcharts4",
  methods: {
    customizeToolbar: function (toolbar) {
      toolbar.showShareReportTab = true;
    },
    reportComplete: function () {
      this.$refs.pivot.flexmonster.off("reportcomplete");
      this.drawChart();
    },

    drawChart: function () {
      //Running Flexmonster's getData method for amCharts
      this.$refs.pivot.flexmonster.amcharts.getData(
        {},
        this.createChart.bind(this),
        this.updateChart.bind(this)
      );
    },

    createChart: function (chartData, rawData) {
      /* Apply amCharts theme */
      am4core.useTheme(am4themes_animated);

      /* Create chart instance */
      let chart = am4core.create("amcharts-container", am4charts.PieChart);

      /* Add data processed by Flexmonster to the chart */
      chart.data = chartData.data;

      /* Set an inner radius to transform a pie chart into a donut chart */
      chart.innerRadius = am4core.percent(50);

      /* Create and configure series for a pie chart */
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.category =
        this.$refs.pivot.flexmonster.amcharts.getCategoryName(rawData);
      pieSeries.dataFields.value =
        this.$refs.pivot.flexmonster.amcharts.getMeasureNameByIndex(rawData, 0);
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;

      /* Create initial animation */
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;

      this.chart = chart;
    },

    updateChart: function (chartData, rawData) {
      this.chart.dispose();
      this.createChart(chartData, rawData);
    },
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
});
</script>
