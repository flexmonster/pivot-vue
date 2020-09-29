<template>
  <div>
    <h3 class="page-title">
      How to access
      <a
        class="title-link"
        target="blank"
        href="https://www.flexmonster.com/api/methods/"
        >Flexmonster API calls</a
      >
      example
    </h3>
    <div class="description-blocks">
      <ToggleButton
        v-on:clicked="toggleView"
        labelOn="Show Pie chart"
        labelOff="Show grid"
        id="viewToggle"
      ></ToggleButton>
      <ToggleButton
        v-on:clicked="toggleMode"
        labelOn="Make read-only"
        labelOff="Make interactive"
        id="modeToggle"
      ></ToggleButton>
    </div>
    <Pivot
      ref="pivot"
      v-bind:toolbar="false"
      v-bind:report="'https://cdn.flexmonster.com/reports/report.json'"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
  </div>
</template>

<script>
import ToggleButton from "../UIElements/ToggleButton";

export default {
  name: "Example_3",
  components: { ToggleButton },
  data: function () {
    return {
      activeButton: "",
    };
  },
  methods: {
    showChart: function () {
      this.$refs.pivot.flexmonster.showCharts("pie");
    },
    showGrid: function () {
      this.$refs.pivot.flexmonster.showGrid();
    },
    readOnly: function () {
      this.$refs.pivot.flexmonster.setOptions({
        grid: {
          showFilter: false,
          dragging: false,
        },
        chart: {
          showFilter: false,
        },
        configuratorButton: false,
        sorting: false,
        drillThrough: false,
      });
      this.hideContextMenu();
      this.$refs.pivot.flexmonster.refresh();
    },
    interactive: function () {
      this.$refs.pivot.flexmonster.setOptions({
        grid: {
          showFilter: true,
          dragging: true,
        },
        chart: {
          showFilter: true,
        },
        configuratorButton: true,
        sorting: true,
        drillThrough: true,
      });
      this.showContextMenu();
      this.$refs.pivot.flexmonster.refresh();
    },
    hideContextMenu: function () {
      this.$refs.pivot.flexmonster.customizeContextMenu(() => {
        return [];
      });
    },
    showContextMenu: function () {
      this.$refs.pivot.flexmonster.customizeContextMenu(null);
    },
    toggleView: function ($event) {
      if ($event) {
        this.showGrid();
      } else {
        this.showChart();
      }
    },
    toggleMode: function ($event) {
      if ($event) {
        this.interactive();
      } else {
        this.readOnly();
      }
    },
  },
};
</script>