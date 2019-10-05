<template scoped>
  <nav class="samu-nav">
    <b-container>
      <b-col sm="2" class="samu-nav__brand">
        <router-link to="/">
          <img src="@/assets/images/logoPaars.png" alt="logo" />
        </router-link>
      </b-col>
      <b-col sm="2" v-if="!isLoggedIn()">
        <SaMuButton to="preLogon" size="small" class="samu-nav__click-to-action">Meld je nu aan!</SaMuButton>
      </b-col>
      <b-col class="samu-nav__right">
        <ul class="purple">
          <li>Over ons</li>
          <li>Evenementen</li>
          <li>Commissies</li>
          <li>Merchandise</li>
          <li>Korting</li>
          <li v-if="isLoggedIn()">Mijn account</li>
        </ul>
      </b-col>
    </b-container>
  </nav>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import SaMuButton from '@/components/basic/SaMuButton.vue';

@Component({
  components: {
    SaMuButton,
  },
})
export default class Navigation extends Vue {

  private isLoggedIn() {
    const list: any = {};
    document.cookie.split(';').forEach((cookie) => {
      const parts = cookie.split('=');
      const key = parts.shift();

      if (key !== undefined) {
        list[key.trim()] = decodeURI(parts.join('='));
      }
    });

    return !!list.auth;
  }
}
</script>
<style lang="scss" scoped>
.samu-nav {
  position: fixed;
  width: 100vw;
  padding: 15px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: white;

  &__brand {
    img {
      width: 100%;
    }
  }

  &__click-to-action {
    margin-left: 40px;
  }

  &__right {
    text-align: right
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