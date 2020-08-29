<template>
  <div>
    <h3 class="title-one page-title">
      How to access
      <a
        class="title-link"
        target="blank"
        href="https://www.flexmonster.com/api/methods/"
      >Flexmonster API calls</a> example
    </h3>
    <button class="button-red" v-on:click="showChart">Show Pie Chart</button>
    <button class="button-red" v-on:click="showGrid">Show Grid</button>
    <button class="button-red" v-on:click="readOnly">Make read only</button>
    <button class="button-red" v-on:click="interactive">Make interactive</button>
    <Pivot
      ref="pivot"
      v-bind:toolbar="false"
      v-bind:report="'https://cdn.flexmonster.com/reports/report.json'"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
  </div>
</template>

<script>
export default {
  name: "Example_3",
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
      this.showContextMenu();
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
      this.hideContextMenu();
      this.$refs.pivot.flexmonster.refresh();
    },
    showContextMenu: function () {
      this.$refs.pivot.flexmonster.customizeContextMenu(() => {
        return [];
      });
    },
    hideContextMenu: function () {
      this.$refs.pivot.flexmonster.customizeContextMenu(null);
    },
  },
};
</script>