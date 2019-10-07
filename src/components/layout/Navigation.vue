<template scoped>
  <div class="samu-nav-wrapper">
    <div class="samu-nav-placeholder"></div>
    <nav class="samu-nav">
      <b-container fluid>
        <b-row align-v="center" no-gutters>
          <b-col cols="2">
            <router-link to="/home">
              <img src="@/assets/images/logoPaars.png" alt="logo" />
            </router-link>
          </b-col>
          <b-col cols="2" v-if="!isLoggedIn()" class="samu-nav__click-to-action">
            <SaMuButton to="/home/preLogon" size="default" >Meld je nu aan!</SaMuButton>
          </b-col>
          <b-col cols class="samu-nav__navigation">
            <img src="@/assets/images/hamburger.svg" class="samu-nav__navigation__hamburger" @click="toggleHamburger()" />
            <ul v-if="$route.path.split('/')[1] === 'home'" class="samu-nav__navigation__items">
              <li>Over ons</li>
              <li>Evenementen</li>
              <li>Commissies</li>
              <li>Merchandise</li>
              <li>Korting</li>
              <li v-if="isLoggedIn()">Dashboard</li>
            </ul>
            <ul v-if="$route.path.split('/')[1] === 'dashboard'" class="samu-nav__navigation__items">
              <li><SaMuLink to="/dashboard/member">Ledenadministratie</SaMuLink></li>
              <li>Profiel</li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </nav>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import SaMuButton from '@/components/basic/SaMuButton.vue';
import SaMuLink from '@/components/basic/SaMuLink.vue';
import isLoggedIn from '@/lib/authentication';

@Component({
  components: {
    SaMuButton,
    SaMuLink,
  },
})
export default class Navigation extends Vue {

  private isLoggedIn() {
    return isLoggedIn();
  }

  private toggleHamburger() {
    const menuClassName = 'samu-nav__navigation__items';
    const navClassName = 'samu-nav';
    const menu: any = document.getElementsByClassName(menuClassName)[0];
    const nav: any = document.getElementsByClassName(navClassName)[0];
    if (menu.className === menuClassName) {
      menu.className += ' active';
      nav.className += ' large__' + this.$route.path.split('/')[1];

    } else {
      menu.className = menuClassName;
      nav.className = navClassName;
    }
  }
}
</script>
<style lang="scss" scoped>
.samu-nav-wrapper {
  height: 105px;
}
.samu-nav-placeholder {
  position: sticky;
  width: 100vw;
  height: 105px;
}

.samu-nav {
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 105px;
  padding: 15px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: white;
  z-index: 9999;

  &.large__home {
    height: 330px;
  }

  &.large__dashboard {
    height: 250px;
  }

  .row > div:first-child {
    margin-right: 20px
  }

  img {
    max-height: 75px;
    max-width: 100%;
  }

  &__click-to-action {
    min-width: 108px;
  }

  &__navigation {
    &__hamburger {
      display: block;
      position: absolute;
      right: 0px;
      width: 30px;
      top: 50%;
      transform: translateY(-50%);

      @media screen and (min-width: 768px) {
        display: none;
      }
    }

    &__items {
      float: right;
      list-style-type: none;
      display: none;

      @media screen and (min-width: 768px) {
        display: flex;
      }

      li {
        float: left;
        font-weight: normal;
        font-size: 14px;
        color: black;
        padding: 12px 8px;
      }
    }

    &__items.active {
      float: none;
      position: fixed;
      display: block;
      top: 90px;
      width: 100vw;
      left: 0px;

      li {
        float: none;
        display: block;
        text-align: left;
        width: 100vw;
      }
    }
  }
}
</style>