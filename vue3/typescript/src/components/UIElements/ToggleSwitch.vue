<template>
  <div class="toggle-switch noselect" :id="id">
    <input
      class="button-checkbox"
      :id="labelOn"
      type="checkbox"
      v-model="checked"
      @click="onClick"
    />
    <label :for="labelOn" class="button-checkbox-label">
      <span class="on">{{ checked ? labelOn : labelOff }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export interface IToggleSwitchData {
  checked: boolean;
}

export default defineComponent({
  name: "ToggleSwitch",
  inheritAttrs: false,
  props: {
    labelOn: String,
    labelOff: String,
    id: String,
  },
  data: function () {
    return {
      checked: true,
    } as IToggleSwitchData;
  },
  methods: {
    onClick() : void {
      this.$emit("clicked", this.checked);
    },
  },
});
</script>
