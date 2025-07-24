<template>
  <div>
    <h1 class="page-title">Integrating with Highcharts</h1>
    <div class="description-blocks first-description-block">
      <p>
        Integrate Flexmonster with Highcharts and see your data from a new perspective:
        <a
          href="https://www.flexmonster.com/doc/integration-with-highcharts/?r=rm_vue"
          target="_blank"
          class="title-link"
        >Integration with Highcharts</a>.
      </p>
    </div>
    <Pivot
      ref="pivot"
      toolbar
      height="600"
      report="https://cdn.flexmonster.com/github/highcharts-report.json"
      :shareReportConnection="{
        url: 'https://olap.flexmonster.com:9500',
      }"
      :beforetoolbarcreated="customizeToolbar"
      :reportcomplete="reportComplete"
      licenseFilePath="https://cdn.flexmonster.com/jsfiddle.charts.key"
    />
    <div class="chart-container">
      <div id="highcharts-container"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useTemplateRef, Ref } from "vue";
  import Pivot from "vue-flexmonster/vue3";

  import Highcharts from "highcharts";
  import "highcharts/modules/accessibility";
  // Importing Flexmonster Connector for Highcharts:
  import "flexmonster/lib/flexmonster.highcharts";

  const pivot: Ref<typeof Pivot | null> = useTemplateRef("pivot");

  function customizeToolbar(toolbar: Flexmonster.Toolbar): void {
    toolbar.showShareReportTab = true;
  }

  function reportComplete(): void {
    pivot.value.flexmonster.off("reportcomplete");
    drawChart();
  }

  function drawChart(): void {
    pivot.value.flexmonster.highcharts.getData(
      {
        type: "spline",
      },
      function (data: Flexmonster.GetDataValueObject) {
        Highcharts.chart("highcharts-container", data as Highcharts.Options);
      },
      function (data: Flexmonster.GetDataValueObject) {
        Highcharts.chart("highcharts-container", data as Highcharts.Options);
      }
    );
  }
</script>
