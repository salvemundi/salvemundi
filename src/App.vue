<template>
  <div id="app">
    <Navigation v-if="$route.path.substr(0, 6) !== '/error'" />
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
@import "@/assets/styles/buttons.scss";
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

.view {
  margin-top: 100px;
}

#view {
  min-height: calc(100vh - 105px - 120px);
}
</style>
