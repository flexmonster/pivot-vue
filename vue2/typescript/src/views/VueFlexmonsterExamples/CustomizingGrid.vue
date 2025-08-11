<template>
  <div>
    <h1 class="page-title">Customizing the grid</h1>
    <div class="description-blocks first-description-block">
      <p>
        Style the grid by adding links, applying custom CSS, or formatting the
        cells. Check our docs for details:
        <a
          href="https://www.flexmonster.com/doc/customizing-grid/?r=rm_vue"
          target="_blank"
          class="title-link"
        >Customizing the grid cells</a>.
      </p>
      <p>In this demo, the <strong>Price</strong> measure is customized.</p>
    </div>
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
      v-bind:report="'https://cdn.flexmonster.com/github/customizing-grid-report.json'"
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
import Vue from "vue";

export default Vue.extend({
  name: "CustomizingGrid",
  components: { ToggleButton },
  methods: {
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