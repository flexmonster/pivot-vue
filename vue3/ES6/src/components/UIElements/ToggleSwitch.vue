<template>
  <div class="toggle-switch noselect" :id="id">
    <input
      class="button-checkbox"
      :id="labelOn"
      type="checkbox"
      v-model="checked"
      v-on:click="onClick"
    />
    <label :for="labelOn" class="button-checkbox-label">
      <span class="on">{{ checked ? labelOn : labelOff }}</span>
    </label>
  </div>
</template>

<script>
export default {
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
    };
  },
  methods: {
    onClick: function () {
      this.$emit("clicked", this.checked);
    },
  },
};
</script>
