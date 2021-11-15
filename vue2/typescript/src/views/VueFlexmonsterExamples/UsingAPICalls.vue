<template>
  <div>
    <h3 class="page-title">
      Using
      <a
        class="title-link"
        target="blank"
        href="https://www.flexmonster.com/api/methods/?r=rm_vue"
        >Flexmonster API calls</a
      >
    </h3>
    <div class="description-blocks">
      <ToggleSwitch
        v-on:clicked="toggleView"
        labelOn="Grid"
        labelOff="Column chart"
        id="viewToggle"
      ></ToggleSwitch>
      <ToggleSwitch
        v-on:clicked="toggleMode"
        labelOn="Interactive"
        labelOff="Read-only"
        id="modeToggle"
      ></ToggleSwitch>
    </div>
    <Pivot
      ref="pivot"
      toolbar
      v-bind:height="600"
      v-bind:report="'https://cdn.flexmonster.com/github/demo-report.json'"
      v-bind:shareReportConnection="{
        url: 'https://olap.flexmonster.com:9500',
      }"
      v-bind:beforetoolbarcreated="customizeToolbar"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
  </div>
</template>

<script lang="ts">
import ToggleSwitch from "@/components/UIElements/ToggleSwitch.vue";
import {Pivot} from "vue-flexmonster";
import Flexmonster from "flexmonster/types/flexmonster";
import Vue from "vue";

export default Vue.extend({
  name: "UsingAPICalls",
  components: { ToggleSwitch },
  methods: {
    customizeToolbar(toolbar: Flexmonster.Toolbar): void {
      toolbar.showShareReportTab = true;
    },
    showChart(): void {
      ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).showCharts(
        "column"
      );
    },
    showGrid(): void {
      ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).showGrid();
    },
    readOnly(): void {
      ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).setOptions({
        readOnly: true,
      });
      ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).refresh();
    },
    interactive(): void {
      ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).setOptions({
        readOnly: false,
      });
      ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).refresh();
    },
    toggleView($event: boolean): void {
      if ($event) {
        this.showChart();
      } else {
        this.showGrid();
      }
    },
    toggleMode($event: boolean): void {
      if ($event) {
        this.readOnly();
      } else {
        this.interactive();
      }
    },
  },
});
</script>
