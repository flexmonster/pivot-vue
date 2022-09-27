<template>
  <div>
    <h1 class="page-title">Customizing the Toolbar</h1>
    <div class="description-blocks first-description-block">
      <p>You can add, remove, and update the Toolbar tabs.</p>
      <p>
        In this demo, we’ve removed all the tabs and added a custom
        <strong>New Tab</strong>. See our docs to learn more about the Toolbar
        and its customization:
        <a
          href="https://www.flexmonster.com/doc/customizing-toolbar/?r=rm_vue"
          target="_blank"
          class="title-link"
          >Customizing the Toolbar</a
        >.
      </p>
    </div>
    <Pivot
      ref="pivot"
      toolbar
      report="https://cdn.flexmonster.com/github/demo-report.json"
      height="600"
      v-bind:beforetoolbarcreated="customizeToolbar"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default /*#__PURE__*/defineComponent({
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
      let tabs = toolbar.getTabs();
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
});
</script>
