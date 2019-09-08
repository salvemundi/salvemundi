<template>
  <nav class="nav">
    <div class="container">
      <div class="nav__brand">
        <img src="@/assets/images/logo.png" alt="logo" />
      </div>
      <SaMuButton text="Meld je nu aan!" to="preLogon" size="small" className="nav__click-to-action"></SaMuButton>
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
import SaMuButton from '../basic/SaMuButton.vue';

@Component({
  components: {
    SaMuButton
  }
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
  background: #663265;
  z-index: 99999;

  .container {
    display: flex;
  }

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

    li {
      font-weight: bold;
      font-size: 14px;

      color: white;

      padding: 12px 8px;
    }
  }
}
</style>