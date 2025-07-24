<template>
  <div>
    <h1 class="page-title">Pivot Table Demo</h1>
    <div class="description-blocks first-description-block">
      <p>
        Flexmonster is a fast and powerful JavaScript pivot grid for data
        visualization and reporting.
      </p>
      <p>
        With Flexmonster, you can create reports based on many data sources,
        including JSON, CSV, MongoDB, and SQL databases. Our component is easy
        to customize and configure, so it can be seamlessly integrated into any
        project.
      </p>
      <p>
        Visit
        <a
            href="https://www.flexmonster.com/doc/?r=rm_vue"
            target="_blank"
            class="title-link"
        >our documentation</a> for step-by-step guidance on Flexmonster.
      </p>
    </div>
    <Pivot
      toolbar
      height="600"
      report="https://cdn.flexmonster.com/github/demo-report.json"
      :shareReportConnection="{
        url: 'https://olap.flexmonster.com:9500',
      }"
      :beforetoolbarcreated="customizeToolbar"
      _:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    />
  </div>
</template>

<script setup lang="ts">
// Using the vue-flexmonster module (local registration)
import Pivot from "vue-flexmonster/vue3";
// Uncomment the line below to import Flexmonster styles:
// import "flexmonster/flexmonster.css";

function customizeToolbar(toolbar: Flexmonster.Toolbar): void {
  // Customizing the Toolbar to show the Share tab
  toolbar.showShareReportTab = true;
}
</script>
