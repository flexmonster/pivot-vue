<template>
  <div
    class="toggle-button noselect"
    :id="id"
  >
    <input
      class="button-checkbox"
      :id="labelOn"
      type="checkbox"
      v-model="checked"
      v-on:click="$emit('clicked', checked)"
    />
    <label
      :for="labelOn"
      class="button-checkbox-label"
    >
      <span class="on">{{ checked ? labelOn : labelOff }}</span>
    </label>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  defineProps({
    labelOn: String,
    labelOff: String,
    id: String,
  });
  defineOptions({
    inheritAttrs: false,
  });

  const checked = ref(true);
</script>
