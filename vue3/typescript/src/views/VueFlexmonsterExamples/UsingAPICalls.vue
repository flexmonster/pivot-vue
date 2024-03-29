<template>
  <div>
    <h1 class="page-title">Using Flexmonster API calls</h1>
    <div class="description-blocks first-description-block">
      <p>
        Flexmonster provides
        <a
          href="https://www.flexmonster.com/api/methods/?r=rm_vue"
          target="_blank"
          class="title-link"
          >API calls</a
        >
        for interacting with the component. As an example, we've added the
        toggle buttons below. Use them to switch between the views or make
        Flexmonster read-only.
      </p>
    </div>
    <div class="description-blocks">
      <ToggleSwitch
        v-on:clicked="toggleView"
        labelOn="Grid"
        labelOff="Column chart"
        id="viewToggle"
      />
      <ToggleSwitch
        v-on:clicked="toggleMode"
        labelOn="Interactive"
        labelOff="Read-only"
        id="modeToggle"
      />
    </div>
    <Pivot
      ref="pivot"
      toolbar
      height="600"
      report="https://cdn.flexmonster.com/github/demo-report.json"
      v-bind:shareReportConnection="{
        url: 'https://olap.flexmonster.com:9500',
      }"
      v-bind:beforetoolbarcreated="customizeToolbar"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    />
  </div>
</template>

<script lang="ts">
import ToggleSwitch from "@/components/UIElements/ToggleSwitch.vue";
import Pivot from "vue-flexmonster/vue3";
import { defineComponent } from "vue";

export default defineComponent({
  name: "UsingAPICalls",
  components: { ToggleSwitch, Pivot },
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
