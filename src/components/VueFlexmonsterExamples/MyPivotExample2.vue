<template>
  <div>
    <h3 class="title-one page-title">How to call <a href="https://www.flexmonster.com/api/events/">Flexmonster events</a> example</h3>
    <Pivot
      ref="pivot"
      toolbar 
      v-bind:report="'https://cdn.flexmonster.com/reports/report.json'"
      v-bind:reportcomplete="myeventHandler1"
      v-bind:cellclick="myeventHandler2"
      v-bind:reportchange="myeventHandler3"
      v-bind:updated="myeventHandler4"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
  </div>
</template>

<script>

export default {
  name: "Example_2",
  methods: {
    myeventHandler1: function() {
      alert("The initial report is complete!");

      //remove handlers for event 
      this.$refs.pivot.flexmonster.off("reportcomplete");

      //add handler for specified event
      this.$refs.pivot.flexmonster.on("reportcomplete", this.myeventHandler5);
    },
    myeventHandler2: function() {
      alert("Cell is clicked!");
    },
    myeventHandler3: function() {
      alert("Report is changed!");
    },
    myeventHandler4: function() {
      alert("Report is updated!");
    },
    myeventHandler5: function() {
      alert("Report is complete!");
    }
  }

};
</script>
