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
          <b-button class="ml-auto" variant="samu" v-if="!loggedIn" href="/home/prelogon" style="margin-right: 10px">{{$t('join_us_now')}}</b-button>
          <b-dropdown variant="samu" :text="$t('select_language')" id="language">
            <b-dropdown-item v-on:click="switchLanguage('nl')" id="dutch">Nederlands</b-dropdown-item>
            <b-dropdown-item v-on:click="switchLanguage('en')" id="english">English</b-dropdown-item>
          </b-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if="$route.path.split('/')[1] !== 'dashboard'">
          <b-nav-item href="/home#about">{{$t('about_us')}}</b-nav-item>
          <b-nav-item href="/home#committees">{{$t('committees')}}</b-nav-item>
          <b-nav-item href="/home#korting">{{$t('discount')}}</b-nav-item>
          <b-nav-item to="/home/me">{{$t('my_account')}}</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if="$route.path.split('/')[1] === 'dashboard'">
          <b-nav-item href="/dashboard/member" v-if="$store.getters.hasScopeForMember">{{$t('member')}}</b-nav-item>
          <b-nav-item href="/dashboard/accountancy" v-if="$store.getters.hasScopeForAccountancy">{{$t('accountancy')}}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default Vue.extend({
  data() {
    return {
      expanded: false,
      loggedIn: false,
      permissions: {
        members: false,
      },
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY + 100 > window.innerHeight) {
        this.expanded = true;
      } else {
        this.expanded = false;
      }
    },
    switchLanguage(lang: string) {
        this.$store.dispatch('setLanguage', lang);
    },
  },
  computed: {
    hasScopeForMember() {
      return this.$store.state.permission.permissions.includes('user:read');
    },
  },
  async created() {
    this.loggedIn = await this.$store.dispatch('isLoggedIn');
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
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
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: white;
  z-index: 9999;

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

  #nav-collapse {
    &.collapsing,
    &.show {
    margin-top: 20px;
    border-radius: 3px;

    .navbar-nav.button {
      padding: 20px 10px;
    }
      background: white;
      .nav-item {
        font-weight: 700;
        letter-spacing: 0.05rem;
        font-size: 0.8rem;
        line-height: 0.8rem;
        padding: 0.5rem 0.5rem;
      }
    }
  }
}
</style>

<i18n src="@/lang/components/Navigation.json"></i18n>