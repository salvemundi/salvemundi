<template>
  <b-navbar
    toggleable="lg"
    v-bind:class="{'stripped': strippedDown, 'purple': $route.path !== '/'}"
  >
    <b-container>
      <b-navbar-brand>
        <img width="100" v-if="$route.path === '/' || !strippedDown" src="@/assets/images/logoWit.png" alt="logo" />
        <img width="100" v-if="$route.path !== '/' && strippedDown" src="@/assets/images/logoPaars.png" alt="logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-button variant="samu">Meld je aan!</b-button>
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
      strippedDown: false
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY + 100 > window.innerHeight) {
        this.strippedDown = true;
      } else {
        this.strippedDown = false;
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
  position: fixed;
  left: 0;
  right: 0;
  padding: 15px 5%;
  display: flex;
  z-index: 10;

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

  &.stripped {
    background: rgb(102, 50, 101);
    transition: all 0.5s ease;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &.purple {
    background: rgba(102, 50, 101, 1);

    a.nav-link {
      color: white;
    }
  }
}
</style>