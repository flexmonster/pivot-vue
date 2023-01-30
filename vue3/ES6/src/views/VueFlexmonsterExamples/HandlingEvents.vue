<template>
  <div>
    <h1 class="title-one page-title">Handling Flexmonster events</h1>

    <div class="description-blocks first-description-block">
      <p>
        Perform an action (for example, click on a grid cell) to trigger a
        <a
          class="title-link"
          target="blank"
          href="https://www.flexmonster.com/api/events/?r=rm_vue"
          >Flexmonster event</a
        >. Scroll down to the log output to see which events get triggered.
      </p>
    </div>
    <div class="description-blocks">
      <ToggleButton
        v-on:clicked="toggleEvents"
        labelOn="Events are tracked"
        labelOff="Events are not tracked"
        id="eventsToggle"
      />
    </div>
    <Pivot
      ref="pivot"
      toolbar
      height="600"
      report="https://cdn.flexmonster.com/github/demo-report.json"
      v-bind:ready="signOnAllEvents"
      v-bind:shareReportConnection="{url: 'https://olap.flexmonster.com:9500'}"
      v-bind:beforetoolbarcreated="customizeToolbar"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    />

    <div class="section">
      <h3 class="title-4">Log Output</h3>
      <div class="event-logs-wrapper fullwidth">
        <div ref="logsContainer" class="content">
          <div v-for="log in logs" v-bind:key="log.id">
            <span class="log-label">[ Event ] {{ log.date }}:</span>
            {{ log.event }} [
            <a
              class="log-link"
              target="_blank"
              v-bind:href="'https://www.flexmonster.com/api/' + log.event + '/?r=rm_vue'"
              >see details</a
            >
            ]
          </div>
        </div>
      </div>
      <div class="section--button">
        <button class="button-red" v-on:click="clearLogs">
          Clear Log Output
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ToggleButton from "@/components/UIElements/ToggleButton.vue";
import { defineComponent } from 'vue';

export default /*#__PURE__*/defineComponent({
  name: "HandlingEvents",
  components: { ToggleButton },
  data: function () {
    return {
      logs: [],
      eventList: [
        "afterchartdraw",
        "aftergriddraw",
        "beforegriddraw",
        "beforetoolbarcreated",
        "cellclick",
        "celldoubleclick",
        "chartclick",
        "datachanged",
        "dataerror",
        "datafilecancelled",
        "dataloaded",
        "drillthroughclose",
        "drillthroughopen",
        "exportcomplete",
        "exportstart",
        "fieldslistclose",
        "fieldslistopen",
        "filterclose",
        "filteropen",
        "loadingdata",
        "loadinglocalization",
        "loadingolapstructure",
        "loadingreportfile",
        "localizationerror",
        "localizationloaded",
        "olapstructureerror",
        "olapstructureloaded",
        "openingreportfile",
        "printcomplete",
        "printstart",
        "querycomplete",
        "queryerror",
        "ready",
        "reportchange",
        "reportcomplete",
        "reportfilecancelled",
        "reportfileerror",
        "runningquery",
        "update",
      ],
    };
  },
  methods: {
    customizeToolbar: function(toolbar) {
      toolbar.showShareReportTab = true;
    },
    printLog: function (log) {
      this.logs.push({
        id: new Date().getTime() + log,
        date: new Date().toLocaleTimeString(),
        event: log,
      });
      requestAnimationFrame(() => {
        if(this.$refs.logsContainer){
          this.$refs.logsContainer.scrollTop = this.$refs.logsContainer.scrollHeight;
        }
      });
    },
    signOffAllEvents: function () {
      for (const eventName of this.eventList) {
        //remove all handlers for specified event
        this.$refs.pivot.flexmonster.off(eventName);
      }
    },
    signOnAllEvents: function () {
      for (const eventName of this.eventList) {
        //add handler for specified event
        this.$refs.pivot.flexmonster.on(eventName, () => {
          this.printLog(eventName);
        });
      }
    },
    toggleEvents: function ($event) {
      if ($event) {
        this.signOffAllEvents();
      } else {
        this.signOnAllEvents();
      }
    },
    clearLogs: function () {
      this.logs = [];
    },
  },
});
</script>
