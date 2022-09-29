<template>
  <div>
    <h1 class="page-title">Pivot Table Demo (Composition API)</h1>
    <div class="description-blocks first-description-block">
      <p>
        In this demo, Flexmonster is embedded in the Vue 3 project using 
        <a
          href="https://vuejs.org/guide/extras/composition-api-faq.html"
          target="_blank"
          class="title-link"
          >Composition API</a
        >.
      </p>
      <p>Learn more about this example in our documentation: 
        <a
          href="https://www.flexmonster.com/doc/flexmonster-in-vue-3/?r=rm_vue/#composition-api"
          target="_blank"
          class="title-link"
          >Creating the pivot table using CompositionAPI</a
        >.</p>
    </div>
    <Pivot
      ref="pivot"
      toolbar
      height="600"
      report="https://cdn.flexmonster.com/github/demo-report.json"
      v-bind:shareReportConnection="{url: 'https://olap.flexmonster.com:9500'}"
      v-bind:beforetoolbarcreated="customizeToolbar"
      v-bind:reportcomplete="reportCompleteHandler"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

let pivot = ref(null);
    
function customizeToolbar(toolbar){
  toolbar.showShareReportTab = true;
}

function reportCompleteHandler(){
  let report = pivot.value.flexmonster.getReport();
  console.log("Flexmonster report configuration >> ", report);
}
</script>
