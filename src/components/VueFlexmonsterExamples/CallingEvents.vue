<template>
  <div>
    <h3 class="title-one page-title">
      How to call
      <a class="title-link" target="blank" href="https://www.flexmonster.com/api/events/">Flexmonster events</a> example
    </h3>

    <div class="description-blocks first-description-block">
      <p>
        Perform an action (for example, click on a grid cell) to trigger a
        <a class="title-link" target="blank" href="https://www.flexmonster.com/api/events/">Flexmonster event</a>. Scroll down to the log output to see which events get triggered.
      </p>
    </div>

    <button class="button-red" v-on:click="signOffAllEvents">Sign off all events</button>
    <button class="button-red" v-on:click="signOnAllEvents">Sign on all events</button>
    
    <Pivot
      ref="pivot"
      toolbar
      v-bind:report="'https://cdn.flexmonster.com/reports/report.json'"
      v-bind:ready="signOnAllEvents"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
    <div class="description-blocks first-description-block">
      <button class="button-red" v-on:click="clearLogs">Clear Log Output</button>
      <div ref="logsContainer" class="logs-container">
        <div v-for="log in logs" v-bind:key="log.id" class="log">
          <span class="log-label">[ Event ] {{ log.date }}:</span>
          {{ log.event }} [
          <a
            class="log-link"
            target="_blank"
            v-bind:href="'https://www.flexmonster.com/api/'+log.event"
          >see details</a> ]
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallingEvents",
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
    printLog: function (log) {
      this.logs.push({
        id: new Date().getTime()+log,
        date: new Date().toLocaleTimeString(),
        event: log,
      });
      requestAnimationFrame(() => {
        this.$refs.logsContainer.scrollTop = this.$refs.logsContainer.scrollHeight;
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
    clearLogs: function () {
      this.logs = [];
    },
  },
};
</script>

<style>
.logs-container {
  margin-top: 10px;
  height: 100px;
  background: #444444;
  border: 1px solid #444444;
  overflow: auto;
  color: #fff;
  padding: 10px 15px;
  resize: vertical;
}

.logs-container .log {
  padding: 3px 0;
}

.logs-container .log-label {
  color: #8ae234;
  font-weight: 600;
}

.logs-container .log-link {
  color: #34e2e2;
  position: relative;
}

.logs-container .log-link:hover:before {
  opacity: 1;
  width: 100%;
}

.logs-container .log-link:before {
  content: "";
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  background: #34e2e2;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

.first-description-block {
  margin-top: 30px;
}

.description-blocks {
  margin: 30px 0 30px 0;
}
</style>
