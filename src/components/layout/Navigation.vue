<template>
  <b-navbar toggleable="lg">
    <b-container>
      <b-navbar-brand>
        <router-link to="/">
          <img width="100" src="@/assets/images/logoPaars.png" alt="logo" />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-button class="ml-4" variant="samu">Meld je aan!</b-button>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Over ons</b-nav-item>
          <b-nav-item href="#">Evenementen</b-nav-item>
          <b-nav-item href="#">Commissies</b-nav-item>
          <b-nav-item href="#">Merchandise</b-nav-item>
          <b-nav-item href="#">Korting</b-nav-item>
          <b-nav-item to="login">Mijn account</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default Vue.extend({
  data() {
    return {
      expanded: false
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY + 100 > window.innerHeight) {
        this.expanded = true;
      } else {
        this.expanded = false;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }
});
</script>
<style lang="scss">
nav.navbar {
  position: sticky;
  left: 0;
  top: 0;
  right: 0;
  padding: 15px 5px;
  display: flex;
  z-index: 10;
  height: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .nav-item {
    font-family: Poppins;
    font-weight: bold;
    font-size: 14px;
    align-items: center;

    a.nav-link {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;

      color: #000000;

      &:focus,
      &:active,
      &:hover {
        text-decoration-line: underline;
        font-weight: bold;
        color: #663265;
      }
    }
  }
}
</style>