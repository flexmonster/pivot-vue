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
      v-bind:shareReportConnection="{url: 'https://olap.flexmonster.com:9500'}"
      v-bind:beforetoolbarcreated="customizeToolbar"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
  </div>
</template>

<script>
import ToggleSwitch from "@/components/UIElements/ToggleSwitch";

export default {
  name: "UsingAPICalls",
  components: { ToggleSwitch },
  methods: {
    customizeToolbar: function(toolbar) {
      toolbar.showShareReportTab = true;
    },
    showChart: function () {
      this.$refs.pivot.flexmonster.showCharts("column");
    },
    showGrid: function () {
      this.$refs.pivot.flexmonster.showGrid();
    },
    readOnly: function () {
      this.$refs.pivot.flexmonster.setOptions({
        readOnly: true
      });
      this.$refs.pivot.flexmonster.refresh();
    },
    interactive: function () {
      this.$refs.pivot.flexmonster.setOptions({
        readOnly: false
      });
      this.$refs.pivot.flexmonster.refresh();
    },
    toggleView: function ($event) {
      if ($event) {
        this.showChart();
      } else {
        this.showGrid();
      }
    },
    toggleMode: function ($event) {
      if ($event) {
        this.readOnly();
      } else {
        this.interactive();
      }
    },
  },
};
</script>
