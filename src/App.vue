<template>
  <section id="app">
    <TopMenu />
    <div class="wrap">
      <SideMenu />
      <div class="pivot-example-container">
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
import TopMenu from "./components/UIElements/TopMenu";
import SideMenu from "./components/UIElements/SideMenu";

export default {
  name: "app",
  components: { TopMenu, SideMenu },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  padding: 120px 0 60px;
  font-family: "Open Sans", "Arial", sans-serif, serif;
  color: #555;
  line-height: 1;
  margin: 14px 0;
  font-size: 15px;
  -webkit-font-smoothing: antialiased !important;
  text-rendering: optimizeLegibility !important;
}

.button-red,
button-red:focus {
  cursor: pointer;
  border: 2px solid #df3800;
  border-radius: 4px;
  color: #df3800;
  background: transparent;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.35714;
  padding: 12px 19px;
  margin: 5px 5px 5px 0;
  position: relative;
  width: auto;
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.button-red:hover,
.active-button {
  background: #df3800;
  color: #fff;
}

.button-red:focus {
  outline: none;
}

.wrap {
  margin: 0 auto;
  padding-left: 80px;
  padding-right: 80px;
  background: #fff;
  position: relative;
  display: flex;
}

.pivot-example-container {
  float: left;
  width: 100%;
  padding: 30px 40px;
  background: #fff;
  padding-top: 0;
}

.page-title {
  margin-top: 0;
  margin-bottom: 18px;
  font-size: 28px;
  font-weight: normal;
  line-height: 1.35714;
  color: #555555;
}

p {
  line-height: 1.75;
}

.title-link {
  color: #00a45a;
  position: relative;
}

.title-link:hover:before {
  opacity: 1;
  width: 100%;
}

.title-link:before {
  bottom: -2px;
  width: 0;
  height: 2px;
  background: #00a45a;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  opacity: 0;
}

.title-link:before {
  display: block;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

.title-link:before {
  content: "";
  display: block;
  position: absolute;
}

.chart-container {
  margin-top: 70px;
}
</style>
