<template>
  <div>
    <h3 class="page-title">
      Customizing
      <a
        class="title-link"
        target="blank"
        href="https://www.flexmonster.com/api/customizecell/?r=rm_vue"
        >the grid cells</a
      >
    </h3>
    <div class="description-blocks">
      <ToggleButton
        v-on:clicked="toggleCustomization"
        labelOn="The grid cells are customized"
        labelOff="The grid cells are not customized"
        id="customizationToggle"
      ></ToggleButton>
    </div>
    <Pivot
      ref="pivot"
      toolbar
      v-bind:ready="onReady"
      v-bind:shareReportConnection="{
        url: 'https://olap.flexmonster.com:9500',
      }"
      v-bind:height="600"
      v-bind:customizeCell="customizeCellFunction"
      v-bind:beforetoolbarcreated="customizeToolbar"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
  </div>
</template>

<script>
import ToggleButton from "../UIElements/ToggleButton";

export default {
  name: "CustomizingGrid",
  components: { ToggleButton },
  methods: {
    onReady: function () {
      this.$refs.pivot.flexmonster.setReport({
        dataSource: {
          filename: "https://cdn.flexmonster.com/data/data.csv",
        },
        slice: {
          rows: [
            {
              uniqueName: "Category",
            },
            {
              uniqueName: "[Measures]",
            },
          ],
          columns: [
            {
              uniqueName: "Color",
            },
          ],
          measures: [
            {
              uniqueName: "Price",
              aggregation: "sum",
            },
            {
              uniqueName: "Discount",
              aggregation: "sum",
            },
            {
              uniqueName: "Quantity",
              aggregation: "sum",
            },
          ],
        },
      });
    },
    customizeToolbar: function (toolbar) {
      toolbar.showShareReportTab = true;
    },
    customizeCellFunction: function (cell, data) {
      if (data.measure && data.measure.name == "Price") {
        let backgroundColor = "#00A45A";
        let textShadowColor = "#095231";
        let borderColor = "#009552";
        cell.style["background-color"] = backgroundColor;
        cell.style["color"] = "white";
        cell.style["font-weight"] = "bold";
        cell.style["text-shadow"] = `0px 2px 3px ${textShadowColor}`;
        cell.style["border-bottom"] = `1px solid ${borderColor}`;
        cell.style["border-right"] = `1px solid ${borderColor}`;
      }
    },
    removeCustomization: function () {
      this.$refs.pivot.flexmonster.customizeCell(null);
    },
    applyCustomization: function () {
      this.$refs.pivot.flexmonster.customizeCell(this.customizeCellFunction);
    },
    toggleCustomization: function ($event) {
      if ($event) {
        this.removeCustomization();
      } else {
        this.applyCustomization();
      }
    },
  },
};
</script>
