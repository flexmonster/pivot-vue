<template>
  <div>
    <h3 class="title-one page-title"> How to <a href="https://www.flexmonster.com/doc/customizing-toolbar/">customize the Toolbar</a> example</h3>
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
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
  </div>
</template>

<script>
export default {
  name: "Example_5",
  methods: {
    showInfo: function () {
      this.$refs.pivot.flexmonster.alert({
        title: "Customizing Flexmonster",
        message:
          "How to customize the Toolbar: <a style='text-decoration:underline; color:blue' href='https://www.flexmonster.com/doc/customizing-toolbar/'>https://www.flexmonster.com/doc/customizing-toolbar/</a> <br>",
        type: "info",
        blocking: false,
      });
    },

    customizeToolbar: function (toolbar) {
      var tabs = toolbar.getTabs();
      toolbar.getTabs = () => {
        tabs = [];
        // add new tab
        tabs.push({
          id: "fm-tab-newtab",
          title: "New Tab",
          handler: this.showInfo,
          icon: toolbar.icons.open,
        });
        return tabs;
      };
    },
  },
};
</script>