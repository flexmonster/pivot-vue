<template>
  <div class="side-menu">
    <ol>
      <li class="tab-button">
        <router-link to="/pivot-table-demo">PIVOT TABLE DEMO</router-link>
      </li>
    </ol>
    <div class="sub-title">API and Events</div>
    <ol>
      <li class="tab-button">
        <router-link to="/calling-events">CALLING EVENTS</router-link>
      </li>
      <li class="tab-button">
        <router-link to="/using-api-calls">USING API CALLS</router-link>
      </li>
      <li class="tab-button">
        <router-link to="/updating-data">UPDATING DATA</router-link>
      </li>
    </ol>
    <div class="sub-title">Customization</div>
    <ol>
      <li class="tab-button">
        <router-link to="/customizing-toolbar"
          >CUSTOMIZING THE TOOLBAR</router-link
        >
      </li>
      <li class="tab-button">
        <router-link to="/customizing-grid">CUSTOMIZING THE GRID</router-link>
      </li>
    </ol>
    <div class="sub-title">Integration</div>
    <ol>
      <li class="tab-button">
        <router-link to="/with-highcharts">WITH HIGHCHARTS</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
};
</script>

<style>
.side-menu {
  float: left;
  min-width: 240.67px;
  border-right: 1px solid #eaeaea;
}

.side-menu ol,
.side-menu ul {
  list-style: none;
  margin: 0;
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
.side-menu li a.router-link-exact-active,
.side-menu li.active a.router-link-exact-active {
  color: #df3800;
}

.side-menu li a.router-link-exact-active:before,
.side-menu-wrap .side-menu li.active a:before {
  content: " ";
  position: absolute;
  right: -1px;
  height: calc(100% - 16px);
  width: 3px;
  background: #df3800;
}
</style>
