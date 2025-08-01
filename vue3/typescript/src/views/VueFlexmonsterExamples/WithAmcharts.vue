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
        style="width: 100%; height: 600px"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useTemplateRef, onBeforeUnmount, Ref } from "vue";
  import Pivot from "vue-flexmonster/vue3";

  // Importing amCharts
  import * as am5 from "@amcharts/amcharts5";
  import * as am5percent from "@amcharts/amcharts5/percent";
  import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

  // Importing Flexmonster Connector for amCharts:
  import "flexmonster/lib/flexmonster.amcharts";

  const pivot: Ref<typeof Pivot | null> = useTemplateRef("pivot");
  let root: am5.Root | null = null;

  function customizeToolbar(toolbar: Flexmonster.Toolbar): void {
    toolbar.showShareReportTab = true;
  }

  function reportComplete(): void {
    pivot.value.flexmonster.off("reportcomplete");
    drawChart();
  }

  function drawChart(): void {
    // Running Flexmonster's getData() method for amCharts
    pivot.value.flexmonster.amcharts.getData({}, createChart, updateChart);
  }

  function createChart(chartData: Flexmonster.GetDataValueObject, rawData: Flexmonster.GetDataValueObject): void {
    // Initializing the root element
    root = am5.Root.new("amcharts-container");
    // Applying the amCharts theme
    root.setThemes([am5themes_Animated.new(root)]);
    // Applying number format from Flexmonster
    root.numberFormatter.set("numberFormat", pivot.value.flexmonster.amcharts.getNumberFormatPattern((rawData.meta as any).formats[0]));

    // Creating a chart instance
    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        innerRadius: 100,
      })
    );

    const series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: pivot.value.flexmonster.amcharts.getMeasureNameByIndex(rawData, 0),
        categoryField: pivot.value.flexmonster.amcharts.getCategoryName(rawData),
      })
    );

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

    series.slices.template.set("tooltipText", "{category}: {value} ({valuePercentTotal.formatNumber('0.00')}%)");
    series.labels.template.set("visible", false);
    series.ticks.template.set("visible", false);

    series.data.setAll(chartData.data);

    const legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.percent(50),
      x: am5.percent(50),
      layout: am5.GridLayout.new(root, {
        maxColumns: 3,
        fixedWidthGrid: true
      }),
      height: am5.percent(20),
      verticalScrollbar: am5.Scrollbar.new(root, {
        orientation: "vertical"
      }),
    }));
    legend.data.setAll(series.dataItems);
    legend.valueLabels.template.set("forceHidden", true);

    chart.appear(1000, 100);
    series.appear(1000, 100);
  }

  function updateChart(chartData: Flexmonster.GetDataValueObject, rawData: Flexmonster.GetDataValueObject): void {
    root?.dispose();
    createChart(chartData, rawData);
  }

  onBeforeUnmount(() => {
    // Disposing of the chart instance when the component is unmounted
    root?.dispose();
  });
</script>
