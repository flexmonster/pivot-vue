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

<script lang="ts">
import ToggleButton from "@/components/UIElements/ToggleButton.vue";
import Pivot from "vue-flexmonster";
import Flexmonster from "flexmonster/types/flexmonster";
import Vue from "vue";

export default Vue.extend({
  name: "CustomizingGrid",
  components: { ToggleButton },
  methods: {
    onReady: function () {
      ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).setReport({
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
    customizeToolbar(toolbar: Flexmonster.Toolbar): void {
      toolbar.showShareReportTab = true;
    },
    customizeCellFunction(
      cell: Flexmonster.CellBuilder,
      data: Flexmonster.CellData
    ): void {
      if (data.measure && data.measure.uniqueName == "Price") {
        let backgroundColor = "#00A45A";
        let textShadowColor = "#095231";
        let borderColor = "#009552";
        cell.style = {
          ...cell.style,
          "background-color": backgroundColor,
          "color": "white",
          "font-weight": "bold",
          "text-shadow": `0px 2px 3px ${textShadowColor}`,
          "border-bottom": `1px solid ${borderColor}`,
          "border-right": `1px solid ${borderColor}`,
        };
      }
    },
    removeCustomization(): void {
      (
        (this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot
      ).customizeCell(() => null);
    },
    applyCustomization(): void {
      (
        (this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot
      ).customizeCell(this.customizeCellFunction);
    },
    toggleCustomization($event: boolean): void {
      if ($event) {
        this.removeCustomization();
      } else {
        this.applyCustomization();
      }
    },
  },
});
</script>
