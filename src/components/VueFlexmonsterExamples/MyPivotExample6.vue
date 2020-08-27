<template>
  <div>
    <h3 class="title-one page-title">
        How to <a href="https://www.flexmonster.com/api/customizecell/">customize the grid cells</a> example
    </h3>
    <Pivot
      ref="pivot"
      toolbar
      v-bind:report="{
        dataSource: {
          filename: 'https://cdn.flexmonster.com/data/data.csv'
        },
        slice: {
                rows: [
                    {
                        uniqueName: 'Category'
                    },
                    {
                        uniqueName: '[Measures]'
                    }
                ],
                columns: [
                    {
                        uniqueName: 'Color'
                    }
                ],
                measures: [
                    {
                        uniqueName: 'Price',
                        aggregation: 'sum'
                    },
                    {
                        uniqueName: 'Discount',
                        aggregation: 'sum'
                    },
                    {
                        uniqueName: 'Quantity',
                        aggregation: 'sum'
                    }
                ]
        }
      }"
      v-bind:customizeCell="customizeCellFunction"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
  </div>
</template>

<script>
import tinycolor from "tinycolor2";

export default {
  name: "Example_6",
  methods: {
    customizeCellFunction: function (cell, data) {
      if (data.measure && data.measure.name == "Price") {
        let backgroundColor = "#00A45A";
        let textShadowColor = tinycolor(backgroundColor).darken(15).toString();
        let borderColor = tinycolor(backgroundColor).darken(3).toString();
        cell.style["background-color"] = backgroundColor;
        cell.style["color"] = "white";
        cell.style["font-weight"] = "bold";
        cell.style["text-shadow"] = `0px 2px 3px ${textShadowColor}`;
        cell.style["border-bottom"] = `1px solid ${borderColor}`;
        cell.style["border-right"] = `1px solid ${borderColor}`;
      }
    },
  },
};
</script>
