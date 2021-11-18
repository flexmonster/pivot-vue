<template>
  <div>
    <h3 class="title-one page-title">
      Handling
      <a
        class="title-link"
        target="blank"
        href="https://www.flexmonster.com/api/events/?r=rm_vue"
        >Flexmonster events</a
      >
    </h3>

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
      ></ToggleButton>
    </div>
    <Pivot
      ref="pivot"
      toolbar
      v-bind:height="600"
      v-bind:report="'https://cdn.flexmonster.com/github/demo-report.json'"
      v-bind:ready="signOnAllEvents"
      v-bind:shareReportConnection="{
        url: 'https://olap.flexmonster.com:9500',
      }"
      v-bind:beforetoolbarcreated="customizeToolbar"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>

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
              v-bind:href="
                'https://www.flexmonster.com/api/' + log.event + '/?r=rm_vue'
              "
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

<script lang="ts">
import ToggleButton from "@/components/UIElements/ToggleButton.vue";
import Pivot from "vue-flexmonster/vue3";
import { defineComponent } from "vue";
import * as Flexmonster from "flexmonster/types/flexmonster";

export interface ILogElement {
  id: string;
  date: string;
  event: string;
}

export interface IHandlingEventsData {
  logs: ILogElement[];
  eventList: string[];
}

export default defineComponent({
  name: "HandlingEvents",
  components: { ToggleButton, Pivot },
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
    } as IHandlingEventsData;
  },
  methods: {
    customizeToolbar(toolbar: Flexmonster.Toolbar): void {
      toolbar.showShareReportTab = true;
    },
    printLog(log: string): void {
      this.logs.push({
        id: new Date().getTime() + log,
        date: new Date().toLocaleTimeString(),
        event: log,
      });
      requestAnimationFrame(() => {
        if (this.$refs.logsContainer) {
          (this.$refs.logsContainer as HTMLDivElement).scrollTop = (this.$refs.logsContainer as HTMLDivElement).scrollHeight;
        }
      });
    },
    signOffAllEvents: function () {
      for (const eventName of this.eventList) {
        //remove all handlers for specified event
        ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).off(eventName);
      }
    },
    signOnAllEvents(): void {
      for (const eventName of this.eventList) {
        //add handler for specified event
        ((this.$refs.pivot as typeof Pivot).flexmonster as Flexmonster.Pivot).on(eventName, () => {
          this.printLog(eventName);
        });
      }
    },
    toggleEvents($event: boolean): void {
      if ($event) {
        this.signOffAllEvents();
      } else {
        this.signOnAllEvents();
      }
    },
    clearLogs(): void {
      this.logs = [];
    },
  },
});
</script>
