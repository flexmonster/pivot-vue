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

<script setup>
  import ToggleButton from "@/components/UIElements/ToggleButton.vue";
  import { ref, useTemplateRef } from "vue";

  const pivot = useTemplateRef("pivot");
  const logsContainer = useTemplateRef("logsContainer");

  const logs = ref([]);
  const eventList = [
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

  function customizeToolbar(toolbar) {
    toolbar.showShareReportTab = true;
  }

  function printLog(log) {
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

  function signOffAllEvents() {
    for (const eventName of eventList) {
      // Remove all handlers for the specified event
      pivot.value.flexmonster.off(eventName);
    }
  }

  function signOnAllEvents() {
    for (const eventName of eventList) {
      // Add a handler for the specified event
      pivot.value.flexmonster.on(eventName, () => {
        printLog(eventName);
      });
    }
  }

  function toggleEvents($event) {
    if ($event) {
      signOffAllEvents();
    } else {
      signOnAllEvents();
    }
  }

  function clearLogs() {
    logs.value = [];
  }
</script>
