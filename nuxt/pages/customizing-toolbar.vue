<template>
  <div>
    <h1 class="page-title">Customizing the Toolbar</h1>
    <div class="description-blocks first-description-block">
      <p>You can add, remove, and update the Toolbar tabs.</p>
      <p>
        In this demo, we've removed all the tabs and added a custom
        <strong>New Tab</strong>. See our docs to learn more about the Toolbar and its customization:
        <a
          href="https://www.flexmonster.com/doc/customizing-toolbar/?r=rm_vue"
          target="_blank"
          class="title-link"
        >Customizing the Toolbar</a>.
      </p>
    </div>
    <ClientOnly>
      <Pivot
        ref="pivot"
        toolbar
        height="600"
        report="https://cdn.flexmonster.com/github/demo-report.json"
        :beforetoolbarcreated="customizeToolbar"
        _:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
  import { useTemplateRef } from "vue";

  const pivot = useTemplateRef("pivot");

  function showInfo() {
    pivot.value.flexmonster.alert({
      title: "Customizing Flexmonster",
      message:
        "How to customize the Toolbar: <a style='text-decoration:underline; color:#00A45A' target='blank' href='https://www.flexmonster.com/doc/customizing-toolbar/?r=rm_vue'>https://www.flexmonster.com/doc/customizing-toolbar/</a> <br>",
      type: "info",
      blocking: false,
    });
  }

  function customizeToolbar(toolbar) {
    let tabs = toolbar.getTabs();
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
