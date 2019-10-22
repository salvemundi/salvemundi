<template>
  <div id="app">
    <Navigation v-if="$route.path !== '/404'" />
    <router-view class="view" />
    <Footer v-if="$route.path !== '/404'" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "@/components/layout/Navigation.vue";
import Footer from "@/components/layout/Footer.vue";
@Component({
  components: {
    Navigation,
    Footer
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss">
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/global.scss";
@import "@/assets/styles/buttons.scss";
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
</style>
