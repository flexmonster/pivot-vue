<template>
  <div>
    <h3 class="page-title">Pivot Table Demo (Composition API)</h3>
    <Pivot
      ref="pivot"
      toolbar
      v-bind:height="600"
      v-bind:report="'https://cdn.flexmonster.com/github/demo-report.json'"
      v-bind:shareReportConnection="{url: 'https://olap.flexmonster.com:9500'}"
      v-bind:beforetoolbarcreated="customizeToolbar"
      v-bind:reportcomplete="reportCompleteHandler"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: "CompositionAPIDemo",
  setup() {

    let pivot = ref(null);
    
    function customizeToolbar(toolbar){
      toolbar.showShareReportTab = true;
    }

    function reportCompleteHandler(){
      let report = pivot.value.flexmonster.getReport();
      console.log("Flexmonster report configuration >> ", report);
    }

    return {
      pivot,
      customizeToolbar,
      reportCompleteHandler
    }
  }
});
</script>
