<template>
  <nav class="nav">
    <div>asdf</div>
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

  img.logo {
    width: 69px;
    height: 40px;
  }

  &__right {
    display: flex;
    margin-left: auto;
  }

  ul {
    list-style-type: none;
    display: flex;

    li {
      font-family: Poppins;
      font-weight: bold;
      font-size: 14px;

      color: white;

      padding: 12px;
    }
  }
}
</style>