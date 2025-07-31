<template>
  <div>
    <h1 class="page-title">Integrating with amCharts</h1>
    <div class="description-blocks first-description-block">
      <p>
        Extend Flexmonster's visualization functionality by integrating with the amCharts library:
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

<script>
  // amCharts imports
  import * as am5 from "@amcharts/amcharts5";
  import * as am5percent from "@amcharts/amcharts5/percent";
  import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

  //Importing Flexmonster Connector for amCharts:
  import "flexmonster/lib/flexmonster.amcharts";

  export default {
    name: "WithAmcharts",
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
        this.$refs.pivot.flexmonster.amcharts.getData({}, this.createChart.bind(this), this.updateChart.bind(this));
      },

      createChart: function (chartData, rawData) {
        /* Create root element and chart instance */
        this.root = am5.Root.new("amcharts-container");
        let chart = this.root.container.children.push(
          am5percent.PieChart.new(this.root, {
            innerRadius: 100,
          })
        );

        /* Apply amCharts theme */
        this.root.setThemes([am5themes_Animated.new(this.root)]);

        /* Apply number format from Flexmonster */
        this.root.numberFormatter.set("numberFormat", this.$refs.pivot.flexmonster.amcharts.getNumberFormatPattern(rawData.meta.formats[0]));

        /* Create and configure series for a pie chart */
        const series = chart.series.push(
          am5percent.PieSeries.new(this.root, {
            valueField: this.$refs.pivot.flexmonster.amcharts.getMeasureNameByIndex(rawData, 0),
            categoryField: this.$refs.pivot.flexmonster.amcharts.getCategoryName(rawData),
            alignLabels: false,
          })
        );
        
        series.labels.template.setAll({
          textType: "circular",
          centerX: 0,
          centerY: 0,
        });

        series.children.push(
          am5.Label.new(this.root, {
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

      updateChart: function (chartData, rawData) {
        this.chart.dispose();
        this.createChart(chartData, rawData);
      },
    },
    beforeDestroy() {
      if (this.chart) {
        this.chart.dispose();
      }
    },
  };
</script>
