<template>
  <section id="sample-app">
    <TopMenu />
    <div class="wrap">
      <div>
        <SideMenu />
      </div>
      <div class="pivot-example-container">
        <router-view />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import TopMenu from "@/components/UIElements/TopMenu.vue";
import SideMenu from "@/components/UIElements/SideMenu.vue";
import Vue from "vue";

export default Vue.extend({
  name: "app",
  components: { TopMenu, SideMenu },
});
</script>