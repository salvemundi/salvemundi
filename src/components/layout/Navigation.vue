<template>
  <b-navbar toggleable="lg">
    <b-container>
      <b-navbar-brand href="#">
        <img width="100" v-if="$route.path === '/'" src="@/assets/images/logoWit.png" alt="logo" />
        <img width="100" v-if="$route.path !== '/'" src="@/assets/images/logoPaars.png" alt="logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-button variant="samu">Meld je aan!</b-button>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Over ons</b-nav-item>
          <b-nav-item href="#">Evenementen</b-nav-item>
          <b-nav-item href="#">Commissies</b-nav-item>
          <b-nav-item href="#">Merchandise</b-nav-item>
          <b-nav-item href="#">Korting</b-nav-item>
          <b-nav-item href="#">Mijn account</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Navigation extends Vue {}
</script>
<style lang="scss">
nav.navbar {
  position: fixed;
  left: 0;
  right: 0;
  padding: 15px 5%;
  display: flex;
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .click-to-action {
    margin-left: 3.5rem;
    button {
      font-weight: bold;
    }
  }

  .nav-item {
    font-family: Poppins;
    font-weight: bold;
    font-size: 14px;
    align-items: center;

    a.nav-link {
      color: #ffffff;
    }
  }
}
</style>