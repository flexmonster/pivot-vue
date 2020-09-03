<template>
  <div>
    <h3 class="page-title">
      How to
      <a
        class="title-link"
        target="blank"
        href="https://www.flexmonster.com/api/updatedata/"
      >update the data in Flexmonster</a> example
    </h3>
    <button class="button-red" v-on:click="updateTheData">Update the data</button>
    <Pivot ref="pivot" toolbar v-bind:ready="onReady" _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"></Pivot>
  </div>
</template>

<script>
export default {
  name: "Example_4",
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
        }
      ]
    };
  },
  methods: {
    onReady: function(){
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
};
</script>
