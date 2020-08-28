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
    <button v-on:click="turnOffAllEvents">Turn off all events</button>
    <button v-on:click="turnOnAllEvents">Turn on all events</button>
    <Pivot
      ref="pivot"
      toolbar
      v-bind:report="'https://cdn.flexmonster.com/reports/report.json'"
      v-bind:ready="turnOnAllEvents"
      _v-bind:licenseKey="'XXXX-XXXX-XXXX-XXXX-XXXX'"
    ></Pivot>
    <div id="logs" class="logs-container"></div>
  </div>
</template>

<script>
export default {
  name: "CallingEvents",
  data: function () {
    return {
      eventList: [
        {
          eventName: "afterchartdraw",
          eventHandler: this.afterchartdrawHandler,
        },
        {
          eventName: "aftergriddraw",
          eventHandler: this.aftergriddrawHandler,
        },
        {
          eventName: "beforegriddraw",
          eventHandler: this.beforegriddrawHandler,
        },
        {
          eventName: "beforetoolbarcreated",
          eventHandler: this.beforetoolbarcreatedHandler,
        },
        {
          eventName: "cellclick",
          eventHandler: this.cellclickHandler,
        },
        {
          eventName: "celldoubleclick",
          eventHandler: this.celldoubleclickHandler,
        },
        {
          eventName: "chartclick",
          eventHandler: this.chartclickHandler,
        },
        {
          eventName: "datachanged",
          eventHandler: this.datachangedHandler,
        },
        {
          eventName: "dataerror",
          eventHandler: this.dataerrorHandler,
        },
        {
          eventName: "datafilecancelled",
          eventHandler: this.datafilecancelledHandler,
        },
        {
          eventName: "dataloaded",
          eventHandler: this.dataloadedHandler,
        },
        {
          eventName: "drillthroughclose",
          eventHandler: this.drillthroughcloseHandler,
        },
        {
          eventName: "drillthroughopen",
          eventHandler: this.drillthroughopenHandler,
        },
        {
          eventName: "exportcomplete",
          eventHandler: this.exportcompleteHandler,
        },
        {
          eventName: "exportstart",
          eventHandler: this.exportstartHandler,
        },
        {
          eventName: "fieldslistclose",
          eventHandler: this.fieldslistcloseHandler,
        },
        {
          eventName: "fieldslistopen",
          eventHandler: this.fieldslistopenHandler,
        },
        {
          eventName: "filterclose",
          eventHandler: this.filtercloseHandler,
        },
        {
          eventName: "filteropen",
          eventHandler: this.filteropenHandler,
        },
        {
          eventName: "loadingdata",
          eventHandler: this.loadingdataHandler,
        },
        {
          eventName: "loadinglocalization",
          eventHandler: this.loadinglocalizationHandler,
        },
        {
          eventName: "loadingolapstructure",
          eventHandler: this.loadingolapstructureHandler,
        },
        {
          eventName: "loadingreportfile",
          eventHandler: this.loadingreportfileHandler,
        },
        {
          eventName: "localizationerror",
          eventHandler: this.localizationerrorHandler,
        },
        {
          eventName: "localizationloaded",
          eventHandler: this.localizationloadedHandler,
        },
        {
          eventName: "olapstructureerror",
          eventHandler: this.olapstructureerrorHandler,
        },
        {
          eventName: "olapstructureloaded",
          eventHandler: this.olapstructureloadedHandler,
        },
        {
          eventName: "openingreportfile",
          eventHandler: this.openingreportfileHandler,
        },
        {
          eventName: "printcomplete",
          eventHandler: this.printcompleteHandler,
        },
        {
          eventName: "printstart",
          eventHandler: this.printstartHandler,
        },
        {
          eventName: "querycomplete",
          eventHandler: this.querycompleteHandler,
        },
        {
          eventName: "queryerror",
          eventHandler: this.queryerrorHandler,
        },
        {
          eventName: "ready",
          eventHandler: this.readyHandler,
        },
        {
          eventName: "reportchange",
          eventHandler: this.reportchangeHandler,
        },
        {
          eventName: "reportcomplete",
          eventHandler: this.reportcompleteHandler,
        },
        {
          eventName: "reportfilecancelled",
          eventHandler: this.reportfilecancelledHandler,
        },
        {
          eventName: "reportfileerror",
          eventHandler: this.reportfileerrorHandler,
        },
        {
          eventName: "runningquery",
          eventHandler: this.runningqueryHandler,
        },
        {
          eventName: "update",
          eventHandler: this.updateHandler,
        },
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
    turnOffAllEvents: function () {
      for (var i = 0; i < this.eventList.length; i++) {
        //remove handler for specified event
        this.$refs.pivot.flexmonster.off(
          this.eventList[i].eventName,
          this.eventList[i].eventHandler
        );
      }
    },
    turnOnAllEvents: function () {
      for (var i = 0; i < this.eventList.length; i++) {
        //add handler for specified event
        this.$refs.pivot.flexmonster.on(
          this.eventList[i].eventName,
          this.eventList[i].eventHandler
        );
      }
    },
    afterchartdrawHandler: function () {
      this.printLog("afterchartdraw");
    },
    aftergriddrawHandler: function () {
      this.printLog("aftergriddraw");
    },
    beforegriddrawHandler: function () {
      this.printLog("beforegriddraw");
    },
    beforetoolbarcreatedHandler: function () {
      this.printLog("beforetoolbarcreated");
    },
    cellclickHandler: function () {
      this.printLog("cellclick");
    },
    celldoubleclickHandler: function () {
      this.printLog("celldoubleclick");
    },
    chartclickHandler: function () {
      this.printLog("chartclick");
    },
    datachangedHandler: function () {
      this.printLog("datachanged");
    },
    dataerrorHandler: function () {
      this.printLog("dataerror");
    },
    datafilecancelledHandler: function () {
      this.printLog("datafilecancelled");
    },
    dataloadedHandler: function () {
      this.printLog("dataloaded");
    },
    drillthroughcloseHandler: function () {
      this.printLog("drillthroughclose");
    },
    drillthroughopenHandler: function () {
      this.printLog("drillthroughopen");
    },
    exportcompleteHandler: function () {
      this.printLog("exportcomplete");
    },
    exportstartHandler: function () {
      this.printLog("exportstart");
    },
    fieldslistcloseHandler: function () {
      this.printLog("fieldslistclose");
    },
    fieldslistopenHandler: function () {
      this.printLog("fieldslistopen");
    },
    filtercloseHandler: function () {
      this.printLog("filterclose");
    },
    filteropenHandler: function () {
      this.printLog("filteropen");
    },
    loadingdataHandler: function () {
      this.printLog("loadingdata");
    },
    loadinglocalizationHandler: function () {
      this.printLog("loadinglocalization");
    },
    loadingolapstructureHandler: function () {
      this.printLog("loadingolapstructure");
    },
    loadingreportfileHandler: function () {
      this.printLog("loadingreportfile");
    },
    localizationerrorHandler: function () {
      this.printLog("localizationerror");
    },
    localizationloadedHandler: function () {
      this.printLog("localizationloaded");
    },
    olapstructureerrorHandler: function () {
      this.printLog("olapstructureerror");
    },
    olapstructureloadedHandler: function () {
      this.printLog("olapstructureloaded");
    },
    openingreportfileHandler: function () {
      this.printLog("openingreportfile");
    },
    printcompleteHandler: function () {
      this.printLog("printcomplete");
    },
    printstartHandler: function () {
      this.printLog("printstart");
    },
    querycompleteHandler: function () {
      this.printLog("querycomplete");
    },
    queryerrorHandler: function () {
      this.printLog("queryerror");
    },
    readyHandler: function () {
      this.printLog("ready");
    },
    reportchangeHandler: function () {
      this.printLog("reportchange");
    },
    reportcompleteHandler: function () {
      this.printLog("reportcomplete");
    },
    reportfilecancelledHandler: function () {
      this.printLog("reportfilecancelled");
    },
    reportfileerrorHandler: function () {
      this.printLog("reportfileerror");
    },
    runningqueryHandler: function () {
      this.printLog("runningquery");
    },
    updateHandler: function () {
      this.printLog("update");
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
