<template>
  <div>
    <h1 class="page-title">Customizing the Toolbar</h1>
    <div class="description-blocks first-description-block">
      <p>You can add, remove, and update the Toolbar tabs.</p>
      <p>
        In this demo, we’ve removed all the tabs and added a custom
        <strong>New Tab</strong>. See our docs to learn more about the Toolbar and its customization:
        <a
          href="https://www.flexmonster.com/doc/customizing-toolbar/?r=rm_vue"
          target="_blank"
          class="title-link"
        >Customizing the Toolbar</a>.
      </p>
    </div>
    <Pivot
      ref="pivot"
      toolbar
      height="600"
      report="https://cdn.flexmonster.com/github/demo-report.json"
      :beforetoolbarcreated="customizeToolbar"
      _:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    />
  </div>
</template>

<script setup lang="ts">
  import Flexmonster from "flexmonster";
import { Ref } from "vue";
import { useTemplateRef } from "vue";
  import Pivot from "vue-flexmonster/vue3";

  const pivot: Ref<typeof Pivot | null> = useTemplateRef("pivot");

  function showInfo(): void {
    pivot.value.flexmonster.alert({
      title: "Customizing Flexmonster",
      message:
        "How to customize the Toolbar: <a style='text-decoration:underline; color:#00A45A' target='blank' href='https://www.flexmonster.com/doc/customizing-toolbar/?r=rm_vue'>https://www.flexmonster.com/doc/customizing-toolbar/</a> <br>",
      type: "info",
      blocking: false,
    });
  }

  function customizeToolbar(toolbar: Flexmonster.Toolbar): void {
    let tabs: Flexmonster.ToolbarTab[] = toolbar.getTabs();
    toolbar.getTabs = () => {
      tabs = [];
      // Add a new tab
      tabs.push({
        id: "fm-tab-newtab",
        title: "New Tab",
        handler: showInfo,
        icon: toolbar.icons.open,
      });
      return tabs;
    };
  }
</script>
