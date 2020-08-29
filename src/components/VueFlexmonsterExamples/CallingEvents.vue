<template>
  <div>
    <h3 class="title-one page-title">
      How to call
      <a
        class="title-link"
        target="blank"
        href="https://www.flexmonster.com/api/events/"
      >Flexmonster events</a> example
    </h3>
    <div class="description-blocks first-description-block">
      <p>
        Perform an action (for example, click on a grid cell) to trigger a
        <a
          class="title-link"
          target="blank"
          href="https://www.flexmonster.com/api/events/"
        >Flexmonster event</a>. Scroll down to the log output to see which events get triggered.
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
      <div id="logs" class="logs-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallingEvents",
  data: function () {
    return {
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
      var logs = document.getElementById("logs");

      var isScrolledToBottom =
        logs.scrollHeight - logs.clientHeight <= logs.scrollTop + 1;
      logs.innerHTML +=
        "<div class='log'><span class='log-label'>[ Event ] " +
        new Date().toLocaleTimeString("en-US") +
        ": </span>" +
        log +
        " [ <a class='log-link' target='blank' href='https://www.flexmonster.com/api/" +
        log +
        "'>see details</a> ]</div>";

      if (isScrolledToBottom) {
        logs.scrollTop = logs.scrollHeight - logs.clientHeight;
      }
    },
    signOffAllEvents: function () {
      for (var i = 0; i < this.eventList.length; i++) {
        //remove all handlers for specified event
        this.$refs.pivot.flexmonster.off(this.eventList[i]);
      }
    },
    signOnAllEvents: function () {
      for (var i = 0; i < this.eventList.length; i++) {
        //add handler for specified event
        let eventName = this.eventList[i];
        this.$refs.pivot.flexmonster.on(eventName, () => {
          this.printLog(eventName);
        });
      }
    },
    clearLogs: function () {
      var logs = document.getElementById("logs");
      logs.innerHTML = "";
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
  bottom: -2px;
  width: 0;
  height: 2px;
  background: #34e2e2;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  opacity: 0;
}

.logs-container .log-link:before {
  display: block;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

.logs-container .log-link:before {
  content: "";
  display: block;
  position: absolute;
}

.first-description-block {
  margin-top: 30px;
}

.description-blocks {
  margin: 30px 0 30px 0;
}
</style>
