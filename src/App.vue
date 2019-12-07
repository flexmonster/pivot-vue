<template>
  <div id="app">
    <button v-for="tab in tabs" v-bind:key="tab" v-bind:class="['tab-button', { active: currentTab === tab }]" v-on:click="currentTab = tab">{{ tab }}</button>
    <component v-bind:is="currentTabComponent" class="tab"></component>
  </div>
</template>

<script>
import Example_1 from './components/MyPivotExample1.vue'
import Example_2 from './components/MyPivotExample2.vue'
import Example_3 from './components/MyPivotExample3.vue'


export default {
  name: 'app',
  components: {
    Example_1, Example_2, Example_3
  },
  data: function(){
     return {
    currentTab: 'Example_1',
    tabs: ['Example_1', 'Example_2', 'Example_3']
     }
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  border: 2px solid #df3800;
  background: #fff;
  color: #df3800;
  text-transform: uppercase;
  cursor: pointer;
  margin: 5px;
  display: inline-block;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  font-weight: normal;
  padding: 10px 10px;
  font-size: 14px;
}
button:hover, button:focus {
  border: 2px solid #df3800;
  background: #df3800;
  color: #fff;
}
button:focus {
  outline: none;
}
#fm-pivot-view #fm-grid-view div[measure="Price"] {
  background-color: #B2DBBF;
}
</style>
