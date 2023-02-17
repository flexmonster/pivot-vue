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

<script>
import TopMenu from "./components/UIElements/TopMenu.vue";
import SideMenu from "./components/UIElements/SideMenu.vue";
export default {
  name: "app",
  components: { TopMenu, SideMenu },
};
</script> 
