<template>
  <div>
    <h1 class="page-title">Customizing the Toolbar</h1>
    <div class="description-blocks first-description-block">
      <p>You can add, remove, and update the Toolbar tabs.</p>
      <p>
        In this demo, we’ve removed all the tabs and added a custom
        <strong>New Tab</strong>. See our docs to learn more about the Toolbar
        and its customization:
        <a
          href="https://www.flexmonster.com/doc/customizing-toolbar/?r=rm_vue"
          target="_blank"
          class="title-link"
          >Customizing the Toolbar</a
        >.
      </p>
    </div>
    <Pivot
      ref="pivot"
      toolbar
      v-bind:report="'https://cdn.flexmonster.com/github/demo-report.json'"
      v-bind:height="600"
      v-bind:beforetoolbarcreated="customizeToolbar"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
  </div>
</template>

<script lang="ts">
import Pivot from "vue-flexmonster";
import Flexmonster from "flexmonster/types/flexmonster";
import Vue from "vue";

export default Vue.extend({
  name: "CustomizingToolbar",
  // components: {
  //   Pivot,
  // },
  methods: {
    showInfo(): void {
      (
        (this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot
      ).alert({
        title: "Customizing Flexmonster",
        message:
          "How to customize the Toolbar: <a style='text-decoration:underline; color:#00A45A' target='blank' href='https://www.flexmonster.com/doc/customizing-toolbar/?r=rm_vue'>https://www.flexmonster.com/doc/customizing-toolbar/</a> <br>",
        type: "info",
        blocking: false,
      });
    },

    customizeToolbar(toolbar: Flexmonster.Toolbar): void {
      var tabs: Flexmonster.ToolbarTab[] = toolbar.getTabs();
      toolbar.getTabs = () => {
        tabs = [];
        // add new tab
        tabs.push({
          id: "fm-tab-newtab",
          title: "New Tab",
          handler: this.showInfo,
          icon: toolbar.icons.open,
        });
        return tabs;
      };
    },
  },
});
</script>
