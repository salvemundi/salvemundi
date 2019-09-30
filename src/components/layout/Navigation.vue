<template>
  <nav class="nav">
    <b-container>
      <div class="nav__brand">
        <router-link to="/">
          <img v-if="$route.path === '/'" src="@/assets/images/logoWit.png" alt="logo" />
          <img v-if="$route.path !== '/'" src="@/assets/images/logoPaars.png" alt="logo" />
        </router-link>
      </div>
      <SaMuButton to="preLogon" size="small" className="nav__click-to-action">Meld je nu aan!</SaMuButton>
      <div class="nav__right">
        <ul :class="$route.path !== '/' ? 'purple' : ''">
          <li>Over ons</li>
          <li>Evenementen</li>
          <li>Commissies</li>
          <li>Merchandise</li>
          <li>Korting</li>
          <li>Mijn account</li>
        </ul>
      </div>
    </b-container>
  </nav>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import SaMuButton from '@/components/basic/SaMuButton.vue';

@Component({
  components: {
    SaMuButton,
  },
})
export default class Navigation extends Vue {}
</script>
<style lang="scss">
.nav {
  position: fixed;
  left: 0;
  right: 0;
  padding: 15px 5%;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &__brand {
    img {
      width: 100px;
    }
  }

  &__click-to-action {
    margin-left: 40px;
  }

  &__right {
    margin-left: auto;
    padding: 2px;
  }

  ul {
    list-style-type: none;
    display: flex;

    &.purple li {
      color: black;
      font-weight: normal;
    }

    li {
      font-weight: bold;
      font-size: 14px;
      color: white;
      padding: 12px 8px;
    }
  }
}
</style>