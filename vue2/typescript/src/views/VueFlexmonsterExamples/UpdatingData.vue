<template>
  <div>
    <h3 class="page-title">
      <a
        class="title-link"
        target="blank"
        href="https://www.flexmonster.com/api/updatedata/?r=rm_vue"
        >Updating the data</a
      >
      in Flexmonster
    </h3>
    <button class="button-red" v-on:click="updateTheData">Update data</button>
    <Pivot
      ref="pivot"
      toolbar
      v-bind:height="600"
      v-bind:shareReportConnection="{
        url: 'https://olap.flexmonster.com:9500',
      }"
      v-bind:beforetoolbarcreated="customizeToolbar"
      v-bind:ready="onReady"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
  </div>
</template>

<script lang="ts">
import Pivot from "vue-flexmonster";
import Flexmonster from "flexmonster/types/flexmonster";
import Vue from "vue";

export default Vue.extend({
  name: "UpdatingData",
  // components: {
  //   Pivot,
  // },
  data: function () {
    return {
      data: [
        {
          Category: "Accessories",
          Size: "262 oz",
          Color: "red",
          Destination: "Australia",
          "Business Type": "Specialty Bike Shop",
          Country: "Australia",
          Price: 100,
          Quantity: 225,
          Discount: 23,
        },
        {
          Category: "Components",
          Size: "235 oz",
          Color: "green",
          Destination: "Australia",
          "Business Type": "Warehouse",
          Country: "Australia",
          Price: 200,
          Quantity: 1950,
          Discount: 51,
        },
      ],
    };
  },
  methods: {
    customizeToolbar(toolbar: Flexmonster.Toolbar): void {
      toolbar.showShareReportTab = true;
    },
    onReady(): void {
      //Connect Flexmonster to the data
      ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).connectTo({
        data: this.data,
      });
    },
    updateTheData(): void {
      //If the data in Vue got updated, for example:
      this.data = [
        {
          Category: "Accessories",
          Size: "262 oz",
          Color: "red",
          Destination: "Australia",
          "Business Type": "Specialty Bike Shop",
          Country: "Australia",
          Price: Math.floor(Math.random() * Math.floor(1000)),
          Quantity: 225,
          Discount: 23,
        },
        {
          Category: "Components",
          Size: "307 oz",
          Color: "white",
          Destination: "United Kingdom",
          "Business Type": "Warehouse",
          Country: "Canada",
          Price: Math.floor(Math.random() * Math.floor(1000)),
          Quantity: 8212,
          Discount: 55,
        },
      ];
      //then the data needs to be updated in Flexmonster as well
      //this can be done via Flexmonster's updateData() API call:
      ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).updateData({
        data: this.data,
      });
    },
  },
});
</script>
