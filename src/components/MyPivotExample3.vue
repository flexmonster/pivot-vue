<template>
  <div>
    <h1><a href="https://www.flexmonster.com/doc/customizing-toolbar/">Toolbar customization</a> and <a href="https://www.flexmonster.com/api/customizecell/">customizeCell example</a></h1>
    <Pivot
      ref="pivot"
      toolbar
      v-bind:report="{
        dataSource: {
          type: 'json',
          data: [
            {
              'Category': 'Accessories',
              'Size': '262 oz',
              'Color': 'red',
              'Destination': 'Australia',
              'Business Type': 'Specialty Bike Shop',
              'Country': 'Australia',
              'Price': 174,
              'Quantity': 225,
              'Discount': 23
            }, 
            {
              'Category': 'Accessories',
              'Size': '214 oz',
              'Color': 'yellow',
              'Destination': 'Canada',
              'Business Type': 'Specialty Bike Shop',
              'Country': 'Canada',
              'Price': 502,
              'Quantity': 90,
              'Discount': 17
            }, 
            {
              'Category': 'Components',
              'Size': '235 oz',
              'Color': 'green',
              'Destination': 'Australia',
              'Business Type': 'Warehouse',
              'Country': 'Australia',
              'Price': 551,
              'Quantity': 1950,
              'Discount': 51
            }, 
            {
              'Category': 'Components',
              'Size': '307 oz',
              'Color': 'white',
              'Destination': 'United Kingdom',
              'Business Type': 'Warehouse',
              'Country': 'Canada',
              'Price': 842,
              'Quantity': 8212,
              'Discount': 55
            }
          ]
        },
        slice: {
          rows: [
            {
              uniqueName: 'Country'
            },
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
              uniqueName: 'Price'
            },
            {
              uniqueName: 'Quantity'
            }
          ]
        },
        options: {
            configuratorActive: false
        }
      }"
      v-bind:beforetoolbarcreated="customizeToolbar"
      v-bind:customizeCell="customizeCellFunction"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
  </div>
</template>

<script>
//Using the vue-flexmonster module (local registration):

//1. Importing the vue-flexmonster module: 
//Uncomment the lines below:
// import {Pivot} from "vue-flexmonster";
// import 'flexmonster/flexmonster.css';

export default {
  name: "Example_1",  
  //2. Defining the component:
  //Uncomment the lines below:
  // components: {
  //    Pivot
  // },
  methods: {
    showInfo: function() {
      this.$refs.pivot.flexmonster.alert({
        title: "Customizing Flexmonster",
        message: "1) How to customize the Toolbar: <a style='text-decoration:underline; color:blue' href='https://www.flexmonster.com/doc/customizing-toolbar/'>https://www.flexmonster.com/doc/customizing-toolbar/</a> <br><br> 2) Using customizeCell: <a style='text-decoration:underline; color:blue' href='https://www.flexmonster.com/api/customizecell/'>https://www.flexmonster.com/api/customizecell/</a>",
        type: "info",
        blocking: false
      });
    },
    
    customizeToolbar: function(toolbar) {
      var tabs = toolbar.getTabs();
      toolbar.getTabs = () => {
        tabs = [];
        // add new tab
        tabs.unshift({
          id: "fm-tab-newtab",
          title: "New Tab",
          handler: this.showInfo,
          icon: toolbar.icons.open
        });
        return tabs;
      };
    },

    customizeCellFunction: function(cell, data){
      if (data.measure) {
        cell.attr["measure"] = data.measure.name;
      }
    }

  }
};
</script>
