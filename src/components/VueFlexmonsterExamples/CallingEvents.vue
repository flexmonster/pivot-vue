<template>
  <div>
    <h3 class="title-one page-title">
      How to call
      <a
        class="title-link"
        target="blank"
        href="https://www.flexmonster.com/api/events/"
        >Flexmonster events</a
      >
      example
    </h3>

    <div class="description-blocks first-description-block">
      <p>
        Perform an action (for example, click on a grid cell) to trigger a
        <a
          class="title-link"
          target="blank"
          href="https://www.flexmonster.com/api/events/"
          >Flexmonster event</a
        >. Scroll down to the log output to see which events get triggered.
      </p>
    </div>
    <div class="description-blocks">
      <ToggleButton
        v-on:clicked="toggleEvents"
        labelOn="Sign off all events"
        labelOff="Sign on all events"
        id="eventsToggle"
      ></ToggleButton>
    </div>
    <Pivot
      ref="pivot"
      toolbar
      v-bind:report="'https://cdn.flexmonster.com/reports/report.json'"
      v-bind:ready="signOnAllEvents"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>

    <div class="section">
      <h3 class="title-4">Log Output</h3>
      <div class="section--button">
        <button class="button-red" v-on:click="clearLogs">
          Clear Log Output
        </button>
      </div>

      <div class="code-wrapper2 fullwidth">
        <div ref="logsContainer" class="code-wrapper2--body">
          <div v-for="log in logs" v-bind:key="log.id">
            <span class="log-label">[ Event ] {{ log.date }}:</span>
            {{ log.event }} [
            <a
              class="log-link"
              target="_blank"
              v-bind:href="'https://www.flexmonster.com/api/' + log.event"
              >see details</a
            >
            ]
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToggleButton from "../UIElements/ToggleButton";

export default {
  name: "CallingEvents",
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
    printLog: function (log) {
      this.logs.push({
        id: new Date().getTime() + log,
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
    toggleEvents: function ($event) {
      if ($event) {
        this.signOnAllEvents();
      } else {
        this.signOffAllEvents();
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
  overflow: auto;
  color: #fff;
  padding: 10px 15px;
  resize: vertical;
}

.log {
  padding: 3px 0;
}

.log-label {
  color: #8ae234;
  font-weight: 600;
}

.log-link {
  color: #34e2e2;
  position: relative;
}

.log-link:hover:before {
  opacity: 1;
  width: 100%;
}

.log-link:before {
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

.section {
  margin-top: 45px;
  position: relative;
}
.title-4 {
  font-weight: 600;
  font-size: 18px;
  line-height: 1.44444;
}
.section--button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  margin-bottom: 5px;
}
.code-wrapper2.fullwidth {
  max-width: 100%;
  font-size: 14px;
  line-height: 1.42857;
}
.code-wrapper2 {
  position: relative;
  max-width: 736px;
  margin: 0 auto;
  background: #333;
  border-radius: 8px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  padding: 20px 20px 20px 24px;
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: 0.02em;
  text-align: left;
  color: #fff;
  margin-bottom: 32px;
}
.code-wrapper2--body {
  height: 95px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  white-space: nowrap;
  overflow-y: auto;
  text-align: left;
  overflow: auto;
}
</style>
