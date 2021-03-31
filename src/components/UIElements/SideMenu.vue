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
      <li class="tab-button">
        <router-link to="/with-amcharts">WITH AMCHARTS</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
};
</script>
