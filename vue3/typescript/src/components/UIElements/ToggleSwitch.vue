<template>
  <div
    class="toggle-switch noselect"
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

<script setup lang="ts">
  import { ref, Ref } from "vue";

  defineProps<{
    labelOn: string,
    labelOff: string,
    id: string,
  }>();
  defineOptions({
    inheritAttrs: false,
  });

  const checked: Ref<boolean> = ref(true);
</script>
