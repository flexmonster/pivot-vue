<template>
  <div>
    <h3 class="page-title">
      How to access
      <a
        class="title-link"
        target="blank"
        href="https://www.flexmonster.com/api/methods/"
      >Flexmonster API calls</a> example
    </h3>
    <button class="button-red" v-on:click="showChart" :class="{'active-button': activeButton === 'showChart'}">Show Pie Chart</button>
    <button class="button-red" v-on:click="showGrid" :class="{'active-button': activeButton === 'showGrid'}">Show Grid</button>
    <button class="button-red" v-on:click="readOnly" :class="{'active-button': activeButton === 'readOnly'}">Make read only</button>
    <button class="button-red" v-on:click="interactive" :class="{'active-button': activeButton === 'interactive'}">Make interactive</button>
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
  data: function(){
    return {
      activeButton: ''
    }
  },
  methods: {
    showChart: function () {
      this.activeButton = 'showChart';
      this.$refs.pivot.flexmonster.showCharts("pie");
    },
    showGrid: function () {
      this.activeButton = 'showGrid';
      this.$refs.pivot.flexmonster.showGrid();
    },
    readOnly: function () {
      this.activeButton = 'readOnly';
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
      this.activeButton = 'interactive';
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
  },
};
</script>