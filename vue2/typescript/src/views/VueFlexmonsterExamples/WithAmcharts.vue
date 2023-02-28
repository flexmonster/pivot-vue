<template>
    <div>
        <h1 class="page-title">Integrating with amCharts</h1>
        <div class="description-blocks first-description-block">
            <p>
                Extend Flexmonster’s visualization functionality by integrating with the
                amCharts library:
                <a href="https://www.flexmonster.com/doc/integration-with-amcharts/?r=rm_vue" target="_blank"
                    class="title-link">Integration with amCharts</a>.
            </p>
        </div>
        <Pivot ref="pivot" toolbar v-bind:height="600"
            v-bind:report="'https://cdn.flexmonster.com/github/demo-report.json'" v-bind:reportcomplete="reportComplete"
            v-bind:shareReportConnection="{
                url: 'https://olap.flexmonster.com:9500',
            }" v-bind:beforetoolbarcreated="customizeToolbar"
            v-bind:licenseFilePath="'https://cdn.flexmonster.com/jsfiddle.charts.key'"></Pivot>
        <div class="chart-container">
            <div id="amcharts-container" style="width: 100%; height: 500px"></div>
        </div>
    </div>
</template>

<script lang="ts">
// amCharts imports
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
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
            let chart = root.container.children.push(am5xy.XYChart.new(root, {
            }));

            /* Apply amCharts theme */
            root.setThemes([
                am5themes_Animated.new(root),
            ]);

            /* Apply number format from Flexmonster */
            root.numberFormatter.set("numberFormat", (this.$refs.pivot as typeof Pivot).flexmonster.amcharts?.getNumberFormatPattern((rawData.meta as any).formats[0]));

            /* Create and configure Y axis */
            let yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
                categoryField: (this.$refs.pivot as typeof Pivot).flexmonster.amcharts?.getCategoryName(rawData)!,
                renderer: am5xy.AxisRendererY.new(root, {
                    cellStartLocation: 0.1,
                    cellEndLocation: 0.9
                })
            }));

            /* Create and configure X axis */
            let xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererX.new(root, {}),
            }));

            xAxis.set("numberFormatter", am5.NumberFormatter.new(root, {
                "numberFormat": "#a"
            }));

            /* Create and configure series for a bar chart */
            let series = chart.series.push(am5xy.ColumnSeries.new(root, {
                name: (this.$refs.pivot as typeof Pivot).flexmonster.amcharts?.getMeasureNameByIndex(rawData, 0),
                xAxis: xAxis,
                yAxis: yAxis as any,
                sequencedInterpolation: true,
                valueXField: (this.$refs.pivot as typeof Pivot).flexmonster.amcharts?.getMeasureNameByIndex(rawData, 0),
                categoryYField: (this.$refs.pivot as typeof Pivot).flexmonster.amcharts?.getCategoryName(rawData),
                tooltip: am5.Tooltip.new(root, {
                    labelText: '{name}: [bold]{valueX}[/]'
                })
            }));

            chart.set("cursor", am5xy.XYCursor.new(root, {
                behavior: "none",
                xAxis: xAxis,
                yAxis: yAxis
            }));

            /* Add data processed by Flexmonster to the chart */
            yAxis.data.setAll(chartData.data);
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
            (
                (this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot
            ).amcharts?.getData(
                {},
                this.createChart.bind(this),
                this.updateChart.bind(this)
            );
        },
        reportComplete(): void {
            ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).off(
                "reportcomplete"
            );
            this.drawChart();
        }
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