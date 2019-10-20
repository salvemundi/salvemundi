<template>
  <footer class="footer">
    <b-container>
      <b-row>
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
            <a href="https://www.instagram.com/sv.salvemundi/" target="_blank">
              <img src="@/assets/images/instagram.svg" alt="instagram" />
            </a>
          </div>
          <div>
            <a href="https://nl-nl.facebook.com/sv.salvemundi/" target="_blank">
              <img src="@/assets/images/facebook.svg" alt="facebook" />
            </a>
          </div>
          <div>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </b-row>
    </b-container>
  </footer>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>
<style lang="scss">
.footer {
  margin-top: 100px;
  background: #663265;
  padding: 22px 0;
  color: white;
  width: 100vw;

  hr {
    margin: 3px 0;
  }

  &__information {
    margin-left: 2%;

    div {
      display: flex;
      justify-content: space-between;
    }
  }

  &__social {
    display: flex;
    justify-content: space-between;
    margin-left: auto;

    padding: 27px 2%;

    div {
      margin: 0 9px;

      img {
        width: 20px;
        height: 20px;
      }
    }

    a {
      color: white;
      text-decoration: none;
    }
  }
}
</style>