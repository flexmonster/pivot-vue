<template>
  <div>
    <h1 class="page-title">Updating the data in Flexmonster</h1>
    <div class="description-blocks first-description-block">
      <p>This demo shows how to refresh the data at runtime and keep the slice, options, and formatting the same.</p>
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
        >our documentation</a>.
      </p>
    </div>
    <button
      class="button-red"
      v-on:click="updateTheData"
    >
      Update data
    </button>
    <Pivot
      ref="pivot"
      toolbar
      height="400"
      :shareReportConnection="{
        url: 'https://olap.flexmonster.com:9500',
      }"
      :beforetoolbarcreated="customizeToolbar"
      :ready="onReady"
      _:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    />
  </div>
</template>

<script setup>
  import { ref, useTemplateRef } from "vue";

  const pivot = useTemplateRef("pivot");
  let data = ref([
    {
      "Category": "Accessories",
      "Size": "262 oz",
      "Color": "red",
      "Destination": "Australia",
      "Business Type": "Specialty Bike Shop",
      "Country": "Australia",
      "Price": 100,
      "Quantity": 225,
      "Discount": 23,
    },
    {
      "Category": "Components",
      "Size": "235 oz",
      "Color": "green",
      "Destination": "Australia",
      "Business Type": "Warehouse",
      "Country": "Australia",
      "Price": 200,
      "Quantity": 1950,
      "Discount": 51,
    },
  ]);

  function customizeToolbar(toolbar) {
    toolbar.showShareReportTab = true;
  }

  function onReady() {
    // Connect Flexmonster to the data
    pivot.value.flexmonster.connectTo({ data: data.value });
  }

  function updateTheData() {
    // If the data in Vue got updated, for example:
    data.value = [
      {
        "Category": "Accessories",
        "Size": "262 oz",
        "Color": "red",
        "Destination": "Australia",
        "Business Type": "Specialty Bike Shop",
        "Country": "Australia",
        "Price": Math.floor(Math.random() * Math.floor(1000)),
        "Quantity": 225,
        "Discount": 23,
      },
      {
        "Category": "Components",
        "Size": "307 oz",
        "Color": "white",
        "Destination": "United Kingdom",
        "Business Type": "Warehouse",
        "Country": "Canada",
        "Price": Math.floor(Math.random() * Math.floor(1000)),
        "Quantity": 8212,
        "Discount": 55,
      },
      {
        "Category": "Clothes",
        "Size": "400 oz",
        "Color": "blue",
        "Destination": "Belgium",
        "Business Type": "Warehouse",
        "Country": "France",
        "Price": Math.floor(Math.random() * Math.floor(1000)),
        "Quantity": 7978,
        "Discount": 30,
      },
    ];
    // Then the data needs to be updated in Flexmonster as well
    // This can be done via Flexmonster's updateData() API call
    pivot.value.flexmonster.updateData({ data: data.value });
  }
</script>
