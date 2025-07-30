<template>
  <div>
    <h1 class="page-title">Integrating with amCharts 4</h1>
    <div class="description-blocks first-description-block">
      <p>
        Extend Flexmonster’s visualization functionality by integrating with the amCharts library:
        <a
          href="https://www.flexmonster.com/doc/integration-with-amcharts/?r=rm_vue"
          target="_blank"
          class="title-link"
        >Integration with amCharts</a>.
      </p>
    </div>
    <Pivot
      ref="pivot"
      toolbar
      height="600"
      report="https://cdn.flexmonster.com/github/charts-report.json"
      :shareReportConnection="{
        url: 'https://olap.flexmonster.com:9500',
      }"
      :beforetoolbarcreated="customizeToolbar"
      :reportcomplete="reportComplete"
      licenseFilePath="https://cdn.flexmonster.com/jsfiddle.charts.key"
    />
    <div class="chart-container">
      <div
        id="amcharts-container"
        style="width: 100%; height: 500px"
      ></div>
    </div>
  </div>
</template>

<script setup>
  import { useTemplateRef, onBeforeUnmount } from "vue";

  // Importing amCharts
  import * as am4core from "@amcharts/amcharts4/core";
  import * as am4charts from "@amcharts/amcharts4/charts";
  import am4themes_animated from "@amcharts/amcharts4/themes/animated";

  // Importing Flexmonster Connector for amCharts:
  import "flexmonster/lib/flexmonster.amcharts";

  // Applying the amCharts theme
  am4core.useTheme(am4themes_animated);

  const pivot = useTemplateRef("pivot");
  let chart;

  function customizeToolbar(toolbar) {
    toolbar.showShareReportTab = true;
  }

  function reportComplete() {
    pivot.value.flexmonster.off("reportcomplete");
    drawChart();
  }

  function drawChart() {
    // Running Flexmonster's getData() method for amCharts
    pivot.value.flexmonster.amcharts.getData({}, createChart, updateChart);
  }

  function createChart(chartData, rawData) {
    // Creating a chart instance
    chart = am4core.create("amcharts-container", am4charts.PieChart);

    // Adding data processed by Flexmonster to the chart
    chart.data = chartData.data;

    // Creating and configuring series for a pie chart
    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.category = pivot.value.flexmonster.amcharts.getCategoryName(rawData);
    pieSeries.dataFields.value = pivot.value.flexmonster.amcharts.getMeasureNameByIndex(rawData, 0);
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 3;
    pieSeries.slices.template.strokeOpacity = 1;

    // Creating initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  }

  function updateChart(chartData, rawData) {
    chart.dispose();
    createChart(chartData, rawData);
  }

  onBeforeUnmount(() => {
    if (chart) {
      chart.dispose();
    }
  });
</script>
