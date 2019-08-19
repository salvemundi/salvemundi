<template>
  <div class="index">
    <section class="main">
      <div class="center">
        <h2 class="lead">Wij zijn</h2>
        <h1 class="title">SALVE MUNDI</h1>
        <h3 class="notice">Studenten voor studenten</h3>

        <a class="click-to-action">Meld je nu aan!</a>
      </div>
    </section>
    <section class="about">
      <div class="container">
        <h2>Over ons</h2>
        <p>Salve Mundi is de nieuwe studievereniging van Fontys Hogescholen ICT, opgericht inj 2017. Het is Latijn voor "Hello World" een typische zin die menig programmeur maar al te goed kent.</p>

        <p>De vereniging organiseert veel activiteiten, zowel studie bemiddelend als voor de lol, of een combinatie van de twee. Denk hierbij aan:</p>
        <ul>
          <li>Lezingen</li>
          <li>Excursies</li>
          <li>Workshops</li>
          <li>Bedrijfsbezoeken</li>
          <li>Elke woensdag bijles</li>
        </ul>

        <p>En voor de uitgaande studenten:</p>
        <ul>
          <li>Op stap bij onze stamkroeg Villa Fiësta op Stratumseind</li>
          <li>Casinoavonden</li>
          <li>Pubquiz-avonden</li>
          <li>Willekeurige spontane activiteiten</li>
        </ul>

        <p>En wat voor de minder uitgaande studenten:</p>
        <ul>
          <li>Jaarlijks op kamp</li>
          <li>Game nights (bordspellen & eSports)</li>
          <li>Partnership met grote hackathons</li>
          <li>Uitjes naar bijvoorbeld pretparken</li>
        </ul>

        <p>Naast deze activiteiten verzorgt Salve Mundi ook een introductie van FHICT van top tot teen.</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Index extends Vue {}
</script>
<style lang="scss">
.index {
  width: 100%;
  height: 100vh;

  section.main {
    width: 100%;
    height: 100%;
    background: linear-gradient(
        rgba(102, 50, 101, 0.8),
        rgba(102, 50, 101, 0.8)
      ),
      url("../assets/images/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    justify-content: center;

    .center {
      text-align: center;
      font-family: Poppins, sans-serif;

      .lead {
        font-size: 28px;
        color: #ffffff;
        font-weight: 400;
      }

      .title {
        font-family: "Portico Rounded", sans-serif;
        font-size: 66px;
        line-height: 77px;
        color: #ffffff;
        margin-top: 40px;
        margin-bottom: 10px;
        font-weight: 400;
      }

      .notice {
        font-size: 18px;
        color: #ffffff;
        font-weight: 400;
      }

      .click-to-action {
        width: 160px;

        margin-top: 50px;
        margin-left: auto;
        margin-right: auto;

        background: #663265;
        border-radius: 2px;

        padding: 7px 26px;

        display: block;

        font-weight: bold;
        font-size: 18px;

        color: #ffffff;

        box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.4);
        cursor: pointer;
      }
    }
  }

  section.about {
    padding-top: 100px;
    .container {
      flex-direction: column;
    }

    p {
      margin: 15px 0;
    }

    ul {
      padding-left: 16px;
    }
  }
}
</style>