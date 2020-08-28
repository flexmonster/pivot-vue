<template>
  <div>
    <h3 class="title-one page-title">How to call <a class="title-link" target="blank" href="https://www.flexmonster.com/api/events/">Flexmonster events</a> example</h3>
    <div class="description-blocks first-description-block">
      <p>Perform an action (for example, click on a grid cell) to trigger a <a class="title-link" target="blank" href="https://www.flexmonster.com/api/events/">Flexmonster event</a>. Scroll down to the log output to see which events get triggered.</p>
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
  data: function(){
    return {
      eventList: [
        {
          "eventName": "afterchartdraw",
          "event": this.afterchartdrawHandler
        },
        {
          "eventName": "aftergriddraw",
          "event": this.aftergriddrawHandler
        },
        {
          "eventName": "beforegriddraw",
          "event": this.beforegriddrawHandler
        },
        {
          "eventName": "beforetoolbarcreated",
          "event": this.beforetoolbarcreatedHandler
        },
        {
          "eventName": "cellclick",
          "event": this.cellclickHandler
        },
        {
          "eventName": "celldoubleclick",
          "event": this.celldoubleclickHandler
        },
        {
          "eventName": "chartclick",
          "event": this.chartclickHandler
        },
        {
          "eventName": "datachanged",
          "event": this.datachangedHandler
        },
        {
          "eventName": "dataerror",
          "event": this.dataerrorHandler
        },
        {
          "eventName": "datafilecancelled",
          "event": this.datafilecancelledHandler
        },
        {
          "eventName": "dataloaded",
          "event": this.dataloadedHandler
        },
        {
          "eventName": "drillthroughclose",
          "event": this.drillthroughcloseHandler
        },
        {
          "eventName": "drillthroughopen",
          "event": this.drillthroughopenHandler
        },
        {
          "eventName": "exportcomplete",
          "event": this.exportcompleteHandler
        },
        {
          "eventName": "exportstart",
          "event": this.exportstartHandler
        },
        {
          "eventName": "fieldslistclose",
          "event": this.fieldslistcloseHandler
        },
        {
          "eventName": "fieldslistopen",
          "event": this.fieldslistopenHandler
        },
        {
          "eventName": "filterclose",
          "event": this.filtercloseHandler
        },
        {
          "eventName": "filteropen",
          "event": this.filteropenHandler
        },
        {
          "eventName": "loadingdata",
          "event": this.loadingdataHandler
        },
        {
          "eventName": "loadinglocalization",
          "event": this.loadinglocalizationHandler
        },
        {
          "eventName": "loadingolapstructure",
          "event": this.loadingolapstructureHandler
        },
        {
          "eventName": "loadingreportfile",
          "event": this.loadingreportfileHandler
        },
        {
          "eventName": "localizationerror",
          "event": this.localizationerrorHandler
        },
        {
          "eventName": "localizationloaded",
          "event": this.localizationloadedHandler
        },
        {
          "eventName": "olapstructureerror",
          "event": this.olapstructureerrorHandler
        },
        {
          "eventName": "olapstructureloaded",
          "event": this.olapstructureloadedHandler
        },
        {
          "eventName": "openingreportfile",
          "event": this.openingreportfileHandler
        },
        {
          "eventName": "printcomplete",
          "event": this.printcompleteHandler
        },
        {
          "eventName": "printstart",
          "event": this.printstartHandler
        },
        {
          "eventName": "querycomplete",
          "event": this.querycompleteHandler
        },
        {
          "eventName": "queryerror",
          "event": this.queryerrorHandler
        },
        {
          "eventName": "ready",
          "event": this.readyHandler
        },
        {
          "eventName": "reportchange",
          "event": this.reportchangeHandler
        },
        {
          "eventName": "reportcomplete",
          "event": this.reportcompleteHandler
        },
        {
          "eventName": "reportfilecancelled",
          "event": this.reportfilecancelledHandler
        },
        {
          "eventName": "reportfileerror",
          "event": this.reportfileerrorHandler
        },
        {
          "eventName": "runningquery",
          "event": this.runningqueryHandler
        },
        {
          "eventName": "update",
          "event": this.updateHandler
        }
      ]
    }
  },
  methods: {
    printLog: function(log){
      var logs = document.getElementById("logs");
      
      var isScrolledToBottom = logs.scrollHeight - logs.clientHeight <= logs.scrollTop + 1;
      logs.innerHTML += "<div class='log'><span class='log-label'>[ Event ] " + (new Date()).toLocaleTimeString('en-US') + ": </span>" + log + " [ <a class='log-link' target='blank' href='https://www.flexmonster.com/api/"+log+"'>see details</a> ]</div>";

      if(isScrolledToBottom){
        logs.scrollTop = logs.scrollHeight - logs.clientHeight;
      }      
    },
    turnOffAllEvents: function() {
      for(var i=0; i<this.eventList.length; i++){
        //remove handler for specified event
        this.$refs.pivot.flexmonster.off(this.eventList[i].eventName, this.eventList[i].event);
      }
    },
    turnOnAllEvents: function() {
      for(var i=0; i<this.eventList.length; i++){
        //add handler for specified event
        this.$refs.pivot.flexmonster.on(this.eventList[i].eventName, this.eventList[i].event);
      }
    },
    afterchartdrawHandler: function(){
      this.printLog("afterchartdraw");
    },
    aftergriddrawHandler: function(){
      this.printLog("aftergriddraw");
    },
    beforegriddrawHandler: function(){
      this.printLog("beforegriddraw");
    },
    beforetoolbarcreatedHandler: function(){
      this.printLog("beforetoolbarcreated");
    },
    cellclickHandler: function(){
      this.printLog("cellclick");
    },
    celldoubleclickHandler: function(){
      this.printLog("celldoubleclick");
    },
    chartclickHandler: function(){
      this.printLog("chartclick");
    },
    datachangedHandler: function(){
      this.printLog("datachanged");
    },
    dataerrorHandler: function(){
      this.printLog("dataerror");
    },
    datafilecancelledHandler: function(){
      this.printLog("datafilecancelled");
    },
    dataloadedHandler: function(){
      this.printLog("dataloaded");
    },
    drillthroughcloseHandler: function(){
      this.printLog("drillthroughclose");
    },
    drillthroughopenHandler: function(){
      this.printLog("drillthroughopen");
    },
    exportcompleteHandler: function(){
      this.printLog("exportcomplete");
    },
    exportstartHandler: function(){
      this.printLog("exportstart");
    },
    fieldslistcloseHandler: function(){
      this.printLog("fieldslistclose");
    },
    fieldslistopenHandler: function(){
      this.printLog("fieldslistopen");
    },
    filtercloseHandler: function(){
      this.printLog("filterclose");
    },
    filteropenHandler: function(){
      this.printLog("filteropen");
    },
    loadingdataHandler: function(){
      this.printLog("loadingdata");
    },
    loadinglocalizationHandler: function(){
      this.printLog("loadinglocalization");
    },
    loadingolapstructureHandler: function(){
      this.printLog("loadingolapstructure");
    },
    loadingreportfileHandler: function(){
      this.printLog("loadingreportfile");
    },
    localizationerrorHandler: function(){
      this.printLog("localizationerror");
    },
    localizationloadedHandler: function(){
      this.printLog("localizationloaded");
    },
    olapstructureerrorHandler: function(){
      this.printLog("olapstructureerror");
    },
    olapstructureloadedHandler: function(){
      this.printLog("olapstructureloaded");
    },
    openingreportfileHandler: function(){
      this.printLog("openingreportfile");
    },
    printcompleteHandler: function(){
      this.printLog("printcomplete");
    },
    printstartHandler: function(){
      this.printLog("printstart");
    },
    querycompleteHandler: function(){
      this.printLog("querycomplete");
    },
    queryerrorHandler: function(){
      this.printLog("queryerror");
    },
    readyHandler: function(){
      this.printLog("ready");
    },
    reportchangeHandler: function(){
      this.printLog("reportchange");
    },
    reportcompleteHandler: function(){
      this.printLog("reportcomplete");
    },
    reportfilecancelledHandler: function(){
      this.printLog("reportfilecancelled");
    },
    reportfileerrorHandler: function(){
      this.printLog("reportfileerror");
    },
    runningqueryHandler: function(){
      this.printLog("runningquery");
    },
    updateHandler: function(){
      this.printLog("update");
    }
    
  }

};
</script>

<style>
.logs-container{
  margin-top: 10px;
  height: 100px;
  background: #444444;
  overflow:auto;
  color: #FFF;
  padding: 10px 15px;
}
.logs-container .log{
  padding: 3px 0;
}
.logs-container .log-label{
  color: #8AE234;
  font-weight: 600;
}
.logs-container .log-link {
  color: #34E2E2;
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
  background: #34E2E2;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  opacity: 0;
}

.logs-container .log-link:before{
  display: block;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

.logs-container .log-link:before{
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
