<template>
  <nav class="nav">
    <div class="container">
      <div class="nav__brand">
        <img src="@/assets/images/logo.png" alt="logo" />
      </div>
      <div class="nav__click-to-action">
        <a class="button">Meld je aan!</a>
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
    </div>
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
  display: flex;
  padding: 15px 150px;

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
      font-family: Poppins;
      font-weight: bold;
      font-size: 14px;

      color: white;

      padding: 12px 8px;
    }
  }
}

// TODO: TEMP, FIX WHEN DEFAULTS ARE MADE

.button {
  display: block;
  background: #663265;
  border-radius: 2px;
  padding: 12px;

  font-family: Poppins;
  font-weight: bold;
  font-size: 12px;

  text-align: center;

  color: #ffffff;
}

.container {
  width: 1200px;
  display: flex;
  margin: 0 auto;
}
</style>