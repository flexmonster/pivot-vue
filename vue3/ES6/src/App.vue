<script setup>
import TopMenu from "./components/UIElements/TopMenu.vue";
import SideMenu from "./components/UIElements/SideMenu.vue";
</script>

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
