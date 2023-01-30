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
          >Customizing the grid</a
        >.
      </p>
      <p>In this demo, the <strong>Price</strong> measure is customized.</p>
    </div>
    <div class="description-blocks">
      <ToggleButton
        v-on:clicked="toggleCustomization"
        labelOn="The grid cells are customized"
        labelOff="The grid cells are not customized"
        id="customizationToggle"
      />
    </div>
    <Pivot
      ref="pivot"
      toolbar
      report="https://cdn.flexmonster.com/github/customizing-grid-report.json"
      v-bind:shareReportConnection="{
        url: 'https://olap.flexmonster.com:9500',
      }"
      height="600"
      v-bind:customizeCell="customizeCellFunction"
      v-bind:beforetoolbarcreated="customizeToolbar"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    />
  </div>
</template>

<script>
import ToggleButton from "@/components/UIElements/ToggleButton.vue";
import { defineComponent } from 'vue';

export default /*#__PURE__*/defineComponent({
  name: "CustomizingGrid",
  components: { ToggleButton },
  methods: {
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
});
</script>
