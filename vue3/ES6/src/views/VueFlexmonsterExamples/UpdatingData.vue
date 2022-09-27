<template>
  <div>
    <h1 class="page-title">Updating the data in Flexmonster</h1>
    <div class="description-blocks first-description-block">
      <p>
        This demo shows how to refresh the data at runtime and keep the slice,
        options, and formatting the same.
      </p>
      <p>
        Try it yourself: configure the component as you wish and click the
        <strong>UPDATE DATA</strong> button.
      </p>
      <p>
        Learn more about updating the data in
        <a
          href="https://www.flexmonster.com/api/updatedata/?r=rm_vue"
          target="_blank"
          class="title-link"
          >our documentation</a
        >.
      </p>
    </div>
    <button class="button-red" v-on:click="updateTheData">Update data</button>
    <Pivot
      ref="pivot"
      toolbar
      height="400"
      v-bind:shareReportConnection="{
        url: 'https://olap.flexmonster.com:9500',
      }"
      v-bind:beforetoolbarcreated="customizeToolbar"
      v-bind:ready="onReady"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default /*#__PURE__*/defineComponent({
  name: "UpdatingData",
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
    customizeToolbar: function (toolbar) {
      toolbar.showShareReportTab = true;
    },
    onReady: function () {
      //Connect Flexmonster to the data
      this.$refs.pivot.flexmonster.connectTo({ data: this.data });
    },
    updateTheData: function () {
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
      this.$refs.pivot.flexmonster.updateData({ data: this.data });
    },
  },
});
</script>
