<template>
  <div>
    <h1 class="page-title">Integrating with amCharts</h1>
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
      v-bind:height="600"
      v-bind:report="'https://cdn.flexmonster.com/github/charts-report.json'"
      v-bind:reportcomplete="reportComplete"
      v-bind:shareReportConnection="{
        url: 'https://olap.flexmonster.com:9500',
      }"
      v-bind:beforetoolbarcreated="customizeToolbar"
      v-bind:licenseFilePath="'https://cdn.flexmonster.com/jsfiddle.charts.key'"
    ></Pivot>
    <div class="chart-container">
      <div
        id="amcharts-container"
        style="width: 100%; height: 500px"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
  // amCharts imports
  import * as am5 from "@amcharts/amcharts5";
  import * as am5percent from "@amcharts/amcharts5/percent";
  import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
  import Pivot from "vue-flexmonster";
  import Vue from "vue";

  //Importing Flexmonster Connector for amCharts:
  import "flexmonster/lib/flexmonster.amcharts";

  declare interface IWithAmchartsData {
    root: am5.Root | null;
  }

  export default Vue.extend({
    name: "WithAmcharts",
    data: function () {
      return {
        root: null,
      } as IWithAmchartsData;
    },
    methods: {
      customizeToolbar(toolbar: Flexmonster.Toolbar): void {
        toolbar.showShareReportTab = true;
      },
      createChart(chartData: Flexmonster.GetDataValueObject, rawData: Flexmonster.GetDataValueObject): void {
        /* Create root element and chart instance */
        let root = am5.Root.new("amcharts-container");
        let chart = root.container.children.push(
          am5percent.PieChart.new(root, {
            innerRadius: 100,
          })
        );

        /* Apply amCharts theme */
        root.setThemes([am5themes_Animated.new(root)]);

        /* Apply number format from Flexmonster */
        root.numberFormatter.set(
          "numberFormat",
          (this.$refs.pivot as typeof Pivot).flexmonster.amcharts?.getNumberFormatPattern((rawData.meta as any).formats[0])
        );

        /* Create and configure series for a bar chart */
        /* Create and configure series for a pie chart */
        const series = chart.series.push(
          am5percent.PieSeries.new(root, {
            valueField: (this.$refs.pivot as typeof Pivot).flexmonster.amcharts?.getMeasureNameByIndex(rawData, 0),
            categoryField: (this.$refs.pivot as typeof Pivot).flexmonster.amcharts?.getCategoryName(rawData),
            alignLabels: false,
          })
        );

        series.labels.template.setAll({
          textType: "circular",
          centerX: 0,
          centerY: 0,
        });

        series.children.push(
          am5.Label.new(root, {
            text: "[#999]TOTAL:[/]\n{valueSum.formatNumber()}",
            populateText: true,
            textAlign: "center",
            centerX: am5.p50,
            centerY: am5.p50,
            fontSize: 24,
            fontWeight: "500",
            fill: am5.color(0x555555),
            oversizedBehavior: "fit",
          })
        );

        series.slices.template.set("tooltipText", "{category}: {value}");

        series.data.setAll(chartData.data);

        /* Create initial animation */
        series.appear(1000);
        chart.appear(1000, 100);
      },
      updateChart(chartData: Flexmonster.GetDataValueObject, rawData: Flexmonster.GetDataValueObject): void {
        this.root?.dispose();
        this.createChart(chartData, rawData);
      },
      drawChart(): void {
        //Running Flexmonster's getData method for amCharts
        ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).amcharts?.getData(
          {},
          this.createChart.bind(this),
          this.updateChart.bind(this)
        );
      },
      reportComplete(): void {
        ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).off("reportcomplete");
        this.drawChart();
      },
    },
    beforeDestroy(): void {
      if (this.root) {
        this.root.dispose();
      }
    },
    // components: {
    //   Pivot,
    // },
  });
</script>
