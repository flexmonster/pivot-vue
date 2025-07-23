<template>
  <div>
    <h1 class="page-title">Using Flexmonster API calls</h1>
    <div class="description-blocks first-description-block">
      <p>
        Flexmonster provides
        <a
          href="https://www.flexmonster.com/api/methods/?r=rm_vue"
          target="_blank"
          class="title-link"
        >API calls</a> for interacting with the component. 
        As an example, we've added the toggle buttons below.
        Use them to switch between the views or make
        Flexmonster read-only.
      </p>
    </div>
    <div class="description-blocks">
      <ToggleSwitch
        id="viewToggle"
        v-on:clicked="toggleView"
        labelOn="Grid"
        labelOff="Column chart"
      />
      <ToggleSwitch
        id="modeToggle"
        v-on:clicked="toggleMode"
        labelOn="Interactive"
        labelOff="Read-only"
      />
    </div>
    <Pivot
      ref="pivot"
      toolbar
      height="600"
      report="https://cdn.flexmonster.com/github/demo-report.json"
      :shareReportConnection="{ url: 'https://olap.flexmonster.com:9500' }"
      :beforetoolbarcreated="customizeToolbar"
      _:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    />
  </div>
</template>

<script setup>
  import ToggleSwitch from "@/components/UIElements/ToggleSwitch.vue";
  import { useTemplateRef } from "vue";

  const pivot = useTemplateRef("pivot");

  function customizeToolbar(toolbar) {
    toolbar.showShareReportTab = true;
  }

  function showChart() {
    pivot.value.flexmonster.showCharts("column");
  }

  function showGrid() {
    pivot.value.flexmonster.showGrid();
  }

  function readOnly() {
    pivot.value.flexmonster.setOptions({
      readOnly: true,
    });
    pivot.value.flexmonster.refresh();
  }

  function interactive() {
    pivot.value.flexmonster.setOptions({
      readOnly: false,
    });
    pivot.value.flexmonster.refresh();
  }

  function toggleView($event) {
    if ($event) {
      showChart();
    } else {
      showGrid();
    }
  }

  function toggleMode($event) {
    if ($event) {
      readOnly();
    } else {
      interactive();
    }
  }
</script>
