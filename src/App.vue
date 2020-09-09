<template>
  <section id="app">
    <TopMenu />
    <div class="wrap">
      <div class="side-menu-wrap">
        <div class="side-menu">
          <ol>
            <li
              v-for="tab in tabs0"
              v-bind:key="tab.key"
              v-bind:class="['tab-button', { active: currentTab === tab.key }]"
              v-on:click="currentTab = tab.key"
            >
              <a>{{ tab.label }}</a>
            </li>
          </ol>
          <div class="sub-title">API and Events</div>
          <ol>
            <li
              v-for="tab in tabs1"
              v-bind:key="tab.key"
              v-bind:class="['tab-button', { active: currentTab === tab.key }]"
              v-on:click="currentTab = tab.key"
            >
              <a>{{ tab.label }}</a>
            </li>
          </ol>
          <div class="sub-title">Customization</div>
          <ol>
            <li
              v-for="tab in tabs2"
              v-bind:key="tab.key"
              v-bind:class="['tab-button', { active: currentTab === tab.key }]"
              v-on:click="currentTab = tab.key"
            >
              <a>{{ tab.label }}</a>
            </li>
          </ol>
          <div class="sub-title">Integration</div>
          <ol>
            <li
              v-for="tab in tabs3"
              v-bind:key="tab.key"
              v-bind:class="['tab-button', { active: currentTab === tab.key }]"
              v-on:click="currentTab = tab.key"
            >
              <a>{{ tab.label }}</a>
            </li>
          </ol>
        </div>
        <div class="pivot-example-container">
          <component v-bind:is="currentTabComponent" class="tab"></component>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PivotTableDemo from "./components/VueFlexmonsterExamples/PivotTableDemo.vue";
import CallingEvents from "./components/VueFlexmonsterExamples/CallingEvents.vue";
import UsingAPICalls from "./components/VueFlexmonsterExamples/UsingAPICalls.vue";
import UpdatingData from "./components/VueFlexmonsterExamples/UpdatingData.vue";
import CustomizingToolbar from "./components/VueFlexmonsterExamples/CustomizingToolbar.vue";
import CustomizingGrid from "./components/VueFlexmonsterExamples/CustomizingGrid.vue";
import WithHighcharts from "./components/VueFlexmonsterExamples/WithHighcharts.vue";

import TopMenu from "./components/UIElements/TopMenu";

export default {
  name: "app",
  components: {
    PivotTableDemo,
    CallingEvents,
    UsingAPICalls,
    UpdatingData,
    CustomizingToolbar,
    CustomizingGrid,
    WithHighcharts,
    TopMenu,
  },
  data: function () {
    return {
      currentTab: "PivotTableDemo",
      tabs0: [{ key: "PivotTableDemo", label: "Pivot Table Demo" }],
      tabs1: [
        { key: "CallingEvents", label: "Calling Events" },
        { key: "UsingAPICalls", label: "Using API Calls" },
        { key: "UpdatingData", label: "Updating Data" },
      ],
      tabs2: [
        { key: "CustomizingToolbar", label: "Customizing The Toolbar" },
        { key: "CustomizingGrid", label: "Customizing The Grid" },
      ],
      tabs3: [{ key: "WithHighcharts", label: "with Highcharts" }],
    };
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab;
    },
  },
};
</script>

<style>
#app {
  padding: 120px 0 60px;
  font-family: "Open Sans", "Arial", sans-serif, serif;
  color: #555;
  line-height: 1;
  font-size: 15px;
  -webkit-font-smoothing: antialiased !important;
  text-rendering: optimizeLegibility !important;
}

.button-red {
  border: 2px solid #df3800;
  background: #fff;
  color: #df3800;
  text-transform: uppercase;
  cursor: pointer;
  margin: 5px 5px 5px 0;
  display: inline-block;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  font-weight: normal;
  padding: 10px 10px;
  font-size: 14px;
}

.button-red:hover,
.button-red:focus,
.active-button {
  border: 2px solid #df3800;
  background: #df3800;
  color: #fff;
}

.button-red:focus {
  outline: none;
}

.wrap {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.side-menu-wrap {
  background: #fff;
  position: relative;
  display: flex;
}

.pivot-example-container {
  float: left;
  width: 75%;
  min-width: 605px;
  padding: 30px 40px;
  background: #fff;
  padding-top: 0;
}

.page-title {
  margin-top: 0;
  margin-bottom: 18px;
  font-size: 28px;
  font-weight: normal;
  line-height: 1.35714;
  color: #555555;
  text-align: center;
}

.side-menu {
    float: left;
    width: 25%;
    min-width: 210px;
    border-right: 1px solid #eaeaea;
}

.side-menu ol,
.side-menu ul {
    list-style: none;
    padding: 0;
}

.sub-title {
    padding-right: 40px;
    color: #cdcdcd;
    text-align: right;
    font-size: 14px;
    margin-bottom: 5px;
    margin-top: 22px;
}

.side-menu li a {
    display: block;
    text-align: right;
    padding: 9px 40px 9px 0px;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    text-transform: uppercase;
    color: #555;
    font-size: 14px;
    line-height: 1.2;
    position: relative;
    cursor: pointer;
    text-decoration: none;
}

.side-menu li a:hover,
.side-menu li a.active,
.side-menu li.active a {
    color: #df3800;
}

.title-link {
    color: #00a45a;
    position: relative;
}

.title-link:hover:before {
    opacity: 1;
    width: 100%;
}

.title-link:before {
    bottom: -2px;
    width: 0;
    height: 2px;
    background: #00a45a;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    opacity: 0;
}

.title-link:before {
    display: block;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
}

.title-link:before {
    content: "";
    display: block;
    position: absolute;
}

</style>
