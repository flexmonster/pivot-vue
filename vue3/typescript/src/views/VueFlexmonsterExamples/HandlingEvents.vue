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
        >Flexmonster event</a>. Scroll down to the log output to see which events get triggered.
      </p>
    </div>
    <div class="description-blocks">
      <ToggleButton
        id="eventsToggle"
        v-on:clicked="toggleEvents"
        labelOn="Events are tracked"
        labelOff="Events are not tracked"
      />
    </div>
    <Pivot
      ref="pivot"
      toolbar
      height="600"
      report="https://cdn.flexmonster.com/github/demo-report.json"
      :shareReportConnection="{ url: 'https://olap.flexmonster.com:9500' }"
      :beforetoolbarcreated="customizeToolbar"
      :ready="signOnAllEvents"
      _:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    />

    <div class="section">
      <h3 class="title-4">Log Output</h3>
      <div class="event-logs-wrapper fullwidth">
        <div
          ref="logsContainer"
          class="content"
        >
          <div
            v-for="log in logs"
            :key="log.id"
          >
            <span class="log-label">[ Event ] {{ log.date }}:</span>
            {{ log.event }} [
            <a
              class="log-link"
              target="_blank"
              :href="'https://www.flexmonster.com/api/' + log.event + '/?r=rm_vue'"
              >see details</a
            >
            ]
          </div>
        </div>
      </div>
      <div class="section--button">
        <button
          class="button-red"
          v-on:click="clearLogs"
        >
          Clear Log Output
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ToggleButton from "@/components/UIElements/ToggleButton.vue";
  import { ref, useTemplateRef, Ref } from "vue";
  import Pivot from "vue-flexmonster/vue3";

  export interface ILogElement {
    id: string;
    date: string;
    event: string;
  }

  const pivot: Ref<typeof Pivot | null> = useTemplateRef("pivot");
  const logsContainer = useTemplateRef("logsContainer");

  const logs: Ref<ILogElement[]> = ref([]);
  const eventList: string[] = [
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
  ];

  function customizeToolbar(toolbar: Flexmonster.Toolbar): void {
    toolbar.showShareReportTab = true;
  }

  function printLog(log: string): void {
    logs.value.push({
      id: new Date().getTime() + log,
      date: new Date().toLocaleTimeString(),
      event: log,
    });
    requestAnimationFrame(() => {
      if (logsContainer.value) {
        logsContainer.value.scrollTop = logsContainer.value.scrollHeight;
      }
    });
  }

  function signOffAllEvents(): void {
    for (const eventName of eventList) {
      // Remove all handlers for the specified event
      pivot.value.flexmonster.off(eventName);
    }
  }

  function signOnAllEvents(): void {
    for (const eventName of eventList) {
      // Add a handler for the specified event
      pivot.value.flexmonster.on(eventName, () => {
        printLog(eventName);
      });
    }
  }

  function toggleEvents($event: boolean): void {
    if ($event) {
      signOffAllEvents();
    } else {
      signOnAllEvents();
    }
  }

  function clearLogs(): void {
    logs.value = [];
  }
</script>
