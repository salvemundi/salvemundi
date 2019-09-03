<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__information">
        <span>Copyright 2019 s.v. Salve Mundi. Alle rechten voorbehouden</span>
        <hr />
        <div>
          <span>Rachelsmolen 1</span>
          <span>info@salvemundi.nl</span>
        </div>
        <div>
          <span>5612 MA Eindhoven</span>
          <span>KvK nr. 70280606</span>
        </div>
      </div>
      <div class="footer__social">
        <div>
          <img src="@/assets/images/logo.png" alt="facebook" />
        </div>
        <div>
          <img src="@/assets/images/logo.png" alt="instagram" />
        </div>
        <div>
          <a>Privacy</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>
<style lang="scss">
.footer {
  margin-top: 50px;
  background: #663265;
  padding: 22px 0;
  color: white;

  hr {
    margin: 3px 0;
  }

  &__information {
    div {
      display: flex;
      justify-content: space-between;
    }
  }

  &__social {
    display: flex;
    justify-content: space-between;
    margin-left: auto;

    padding: 27px;

    div {
      margin: 0 9px;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>