<template>
  <nav class="nav">
    <b-container>
      <div class="nav__brand">
        <img src="@/assets/images/logo.png" alt="logo" />
      </div>
      <SaMuButton text="Meld je nu aan!" to="privacy" size="small" className="nav__click-to-action"></SaMuButton>
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
  position: absolute;
  left: 0;
  right: 0;
  padding: 15px 5%;
  display: flex;

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