<script setup>
import TopMenu from "../components/TopMenu.vue";
import SideMenu from "../components/SideMenu.vue";
import "../app.css";
</script>

<template>
  <Head>
    <Title>Flexmonster Pivot Table & Charts</Title>
  </Head>
  <section id="sample-app">
    <TopMenu />
    <div class="wrap">
      <div>
        <SideMenu />
      </div>
      <div class="pivot-example-container">
        <slot />
      </div>
    </div>
  </section>
</template>
