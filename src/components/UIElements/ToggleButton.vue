<template>
  <div class="button-toggle noselect" :id="id" v-on:click="onClick">
    <input
      class="button-checkbox"
      :id="labelOn"
      type="checkbox"
      v-model="checked"
    />
    <label :for="labelOn" class="button-checkbox-label">
      <span class="off">{{ labelOff }}</span>
      <span class="on">{{ labelOn }} </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "ToggleButton",
  props: {
    "labelOn": String,
    "labelOff": String,
    "id": String
  },
  data: function(){
     return {
       checked: false
     }
  },
  methods: {
    onClick: function() {
      this.$emit('clicked', this.checked)
    }
  }
};
</script>

<style>
.button-toggle .button-checkbox {
  position: absolute;
  left: -5000px;
}

input[type="checkbox"i] {
  background-color: initial;
  cursor: default;
  appearance: checkbox;
  box-sizing: border-box;
  margin: 3px 3px 3px 4px;
  padding: initial;
  border: initial;
}

.button-toggle .button-checkbox-label {
  cursor: pointer;
  display: block;
  background: #00a45a;
  height: 32px;
  width: 60px;
  border-radius: 50px;
  margin: 16px auto;
  position: relative;
}

.button-toggle .button-checkbox:checked + .button-checkbox-label {
  background-color: #df3800;
}

.button-toggle .button-checkbox:checked + .button-checkbox-label:before {
  left: 32px;
}

.button-toggle .button-checkbox-label:before {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  top: 4px;
  left: 4px;
  border-radius: 50px;
  height: 24px;
  width: 24px;
  background: white;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.button-toggle .button-checkbox:checked + .button-checkbox-label .off {
  color: #454545;
}

.button-toggle .button-checkbox:checked + .button-checkbox-label .on {
  color: #df3800;
}

.button-toggle .button-checkbox-label .on,
.button-toggle .button-checkbox-label .off {
  display: block;
  position: absolute;
  z-index: 0;
  left: 76px;
  opacity: 1;
  min-width: 200px;
  line-height: 32px;
  font-weight: 600;
  font-size: 16px;
  color: #454545;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.button-toggle .button-checkbox-label .off {
  left: auto;
  right: 76px;
  text-align: right;
  opacity: 1;
  color: #00a45a;
}
</style>
