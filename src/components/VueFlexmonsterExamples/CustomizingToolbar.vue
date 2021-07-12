<template>
  <div>
    <h3 class="page-title">
      Customizing
      <a
        class="title-link"
        target="blank"
        href="https://www.flexmonster.com/doc/customizing-toolbar/?r=rm_vue"
        >the Toolbar</a
      >
    </h3>
    <Pivot
      ref="pivot"
      toolbar
      v-bind:report="'https://cdn.flexmonster.com/github/demo-report.json'"
      v-bind:height="600"
      v-bind:beforetoolbarcreated="customizeToolbar"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
  </div>
</template>

<script>
export default {
  name: "CustomizingToolbar",
  methods: {
    showInfo: function () {
      this.$refs.pivot.flexmonster.alert({
        title: "Customizing Flexmonster",
        message:
          "How to customize the Toolbar: <a style='text-decoration:underline; color:#00A45A' target='blank' href='https://www.flexmonster.com/doc/customizing-toolbar/?r=rm_vue'>https://www.flexmonster.com/doc/customizing-toolbar/</a> <br>",
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
