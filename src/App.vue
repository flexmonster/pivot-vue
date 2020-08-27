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
        <div class="container">
          <component v-bind:is="currentTabComponent" class="tab"></component>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Example_1 from "./components/VueFlexmonsterExamples/MyPivotExample1.vue";
import Example_2 from "./components/VueFlexmonsterExamples/MyPivotExample2.vue";
import Example_3 from "./components/VueFlexmonsterExamples/MyPivotExample3.vue";
import Example_4 from "./components/VueFlexmonsterExamples/MyPivotExample4.vue";
import Example_5 from "./components/VueFlexmonsterExamples/MyPivotExample5.vue";
import Example_6 from "./components/VueFlexmonsterExamples/MyPivotExample6.vue";
import Example_7 from "./components/VueFlexmonsterExamples/MyPivotExample7.vue";

import TopMenu from "./components/UIElements/TopMenu";

export default {
  name: "app",
  components: {
    Example_1,
    Example_2,
    Example_3,
    Example_4,
    Example_5,
    Example_6,
    Example_7,
    TopMenu,
  },
  data: function () {
    return {
      currentTab: "Example_1",
      tabs0: [{ key: "Example_1", label: "Pivot Table Demo" }],
      tabs1: [
        { key: "Example_2", label: "Calling Events" },
        { key: "Example_3", label: "Using API Calls" },
        { key: "Example_4", label: "Updating Data" },
      ],
      tabs2: [
        { key: "Example_5", label: "Customizing Toolbar" },
        { key: "Example_6", label: "Customizing Grid" },
      ],
      tabs3: [{ key: "Example_7", label: "with Highcharts" }],
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
button {
  border: 2px solid #df3800;
  background: #fff;
  color: #df3800;
  text-transform: uppercase;
  cursor: pointer;
  margin: 5px;
  display: inline-block;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  font-weight: normal;
  padding: 10px 10px;
  font-size: 14px;
}
button:hover,
button:focus {
  border: 2px solid #df3800;
  background: #df3800;
  color: #fff;
}
button:focus {
  outline: none;
}
#fm-pivot-view #fm-grid-view div[measure="Price"] {
  background-color: #b2dbbf;
}
.container {
  float: left;
  width: 75%;
  padding: 30px 40px;
  background: #fff;
  padding-top: 0;
}

.section-inner-first.section-inner-first .title-one {
  margin-top: 0;
}
.title-one {
  font-size: 28px;
  line-height: 1.35714;
  color: #555555;
  margin-top: 15px;
  text-align: center;
}

.page-title {
  margin-bottom: 18px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

.side-menu {
  float: left;
  width: 25%;
  border-right: 1px solid #eaeaea;
}
ol,
ul {
  list-style: none;
}
.side-menu-wrap .sub-title {
  padding-right: 40px;
  color: #cdcdcd;
  text-align: right;
  font-size: 14px;
  margin-bottom: 5px;
  margin-top: 22px;
}
.side-menu-wrap .side-menu li a {
  display: block;
  text-align: right;
  padding: 9px 40px 9px 20px;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  text-transform: uppercase;
  color: #555;
  font-size: 14px;
  line-height: 1.2;
  position: relative;
  cursor: pointer;
}
.side-menu-wrap .side-menu li a:hover,
.side-menu-wrap .side-menu li a.active,
.side-menu-wrap .side-menu li.active a {
  color: #df3800;
}
</style>
