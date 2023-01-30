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

<script lang="ts">
import Highcharts from "highcharts";
//Importing Flexmonster Connector for Highcharts:
import "flexmonster/lib/flexmonster.highcharts";
import Pivot from "vue-flexmonster/vue3";
import { defineComponent } from "vue";

export default defineComponent({
  name: "WithHighcharts",
  methods: {
    customizeToolbar(toolbar: Flexmonster.Toolbar): void {
      toolbar.showShareReportTab = true;
    },
    drawChart(): void {
      (
        (this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot
      ).highcharts?.getData(
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
    },

    reportComplete(): void {
      ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).off(
        "reportcomplete"
      );
      this.drawChart();
    },
  },
  components: {
    Pivot,
  },
});
</script>
