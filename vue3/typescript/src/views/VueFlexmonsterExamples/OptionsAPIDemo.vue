<template>
  <div>
    <h1 class="page-title">Pivot Table Demo (Options API)</h1>
    <div class="description-blocks first-description-block">
      <p>
        In this demo, Flexmonster is embedded in the Vue 3 project using
        <a
          href="https://vuejs.org/guide/introduction.html#options-api"
          target="_blank"
          class="title-link"
        >Options API</a>.
      </p>
      <p>
        Learn more about this example in our documentation:
        <a
          href="https://www.flexmonster.com/doc/flexmonster-in-vue-3/?r=rm_vue/#options-api"
          target="_blank"
          class="title-link"
        >Creating the pivot table using Options API</a>.
      </p>
    </div>
    <Pivot
      ref="pivot"
      toolbar
      height="600"
      report="https://cdn.flexmonster.com/github/demo-report.json"
      :shareReportConnection="{ url: 'https://olap.flexmonster.com:9500' }"
      :beforetoolbarcreated="customizeToolbar"
      :reportcomplete="reportCompleteHandler"
      _:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import Pivot from "vue-flexmonster/vue3";

  export default defineComponent({
    name: "OptionsAPIDemo",
    components: {
      Pivot,
    },
    methods: {
      customizeToolbar(toolbar: Flexmonster.Toolbar): void {
        toolbar.showShareReportTab = true;
      },
      reportCompleteHandler(): void {
        let report = ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).getReport();
        console.log("Flexmonster report configuration >> ", report);
      },
    },
  });
</script>
