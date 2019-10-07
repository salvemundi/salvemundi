<template>
  <div id="app">
    <Navigation v-if="$route.path.substr(0, 6) !== '/error' && $route.path !== '/home'" />
    <router-view id="view" />
    <Footer v-if="$route.path.substr(0, 6) !== '/error'" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/layout/Navigation.vue';
import Footer from '@/components/layout/Footer.vue';
@Component({
  components: {
    Navigation,
    Footer,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/global.scss";
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

#app {
  width: 100%;
  height: 100%;
}

#view {
  min-height: calc(100vh - 105px - 123px);
}
</style>
