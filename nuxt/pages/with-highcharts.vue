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
    <ClientOnly>
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
       <highcharts
          :options="chartOptions"
        />
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
  import { useTemplateRef, ref } from "vue";

  const pivot = useTemplateRef("pivot");
  let chartOptions = ref({});

  function customizeToolbar(toolbar) {
    toolbar.showShareReportTab = true;
  }

  function reportComplete() {
    pivot.value.flexmonster.off("reportcomplete");
    drawChart();
  }

  function drawChart() {
    pivot.value.flexmonster.highcharts.getData(
      {
        type: "spline",
      },
      function (data) {
        chartOptions.value = data;

      },
      function (data) {
        chartOptions.value = data;
      }
    );
  }
</script>
