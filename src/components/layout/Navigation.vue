<template>
  <nav class="nav">
    <b-container>
      <div class="nav__brand">
        <img src="@/assets/images/logo.png" alt="logo" />
      </div>
      <div class="nav__click-to-action">
        <a class="button--small">Meld je aan!</a>
      </div>
      <div class="nav__right">
        <ul>
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
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {}
</script>
<style lang="scss">
.nav {
  position: absolute;
  left: 0;
  right: 0;
  padding: 15px 150px;
  display: flex;

  &__brand {
    img {
      width: 100px;
    }
  }

  &__click-to-action {
    margin-left: 40px;
    padding: 10px;
  }

  &__right {
    margin-left: auto;
    padding: 2px;
  }

  ul {
    list-style-type: none;
    display: flex;

    li {
      font-weight: bold;
      font-size: 14px;

      color: white;

      padding: 12px 8px;
    }
  }
}

// TODO: TEMP, FIX WHEN DEFAULTS ARE MADE

.button--small {
  width: 100px;
  display: block;
  background: #663265;
  border-radius: 2px;
  padding: 6px;

  font-weight: bold;
  font-size: 12px;

  text-align: center;

  color: #ffffff;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.4);
}
</style>