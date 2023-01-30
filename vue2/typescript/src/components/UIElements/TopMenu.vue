<template>
  <header class="mainheader fixed-head">
    <div class="container-xl">
      <a href="https://www.flexmonster.com/?r=rm_vue" target="blank" class="logo">
        <img
          src="https://www.flexmonster.com/base/assets/img/svg/logo.svg" 
        />
      </a>
      <ul class="mainnav">
        <li>
          <a href="https://www.flexmonster.com/doc/integration-with-vue-2/?r=rm_vue" target="blank"
          >Integration with Vue 2</a>
        </li>
        <li>
          <a href="https://www.flexmonster.com/doc/?r=rm_vue" target="blank">Docs</a>
        </li>
        <li>
          <a href="https://www.flexmonster.com/help-center/?r=rm_vue" target="blank"
            >Help center</a
          >
        </li>
        <li>
          <a href="https://www.flexmonster.com/contact/?r=rm_vue" target="blank"
            >Contact us</a
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "TopMenu",
});
</script>