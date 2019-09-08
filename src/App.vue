<template>
  <div id="app">
    <Navigation v-if="$route.path !== '/notFound'" />
    <router-view />
    <Footer v-if="$route.path !== '/notFound'" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/layout/Navigation.vue';
import Footer from '@/components/layout/Footer.vue';
@Component({
  components: {
    Navigation, Footer,
  },
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
