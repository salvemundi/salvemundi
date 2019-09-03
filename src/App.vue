<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "./components/layout/Navigation.vue";
@Component({
  components: {
    Navigation
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss">
@import "@/assets/styles/global.scss";
@import "@/assets/styles/fonts.scss";

#app {
  width: 100%;
  height: 100%;
}
</style>
