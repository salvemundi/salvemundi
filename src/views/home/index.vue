<template scoped>
  <div class="index">
    <section class="main">
      <div class="center">
        <h2 class="lead">Wij zijn</h2>
        <h1 class="title">SALVE MUNDI</h1>
        <h3 class="notice">Studenten voor studenten</h3>

        <b-button variant="samu" class="mt-5" size="lg" href="/home/prelogon" v-if="!isLoggedInMethod()">Meld je nu aan!</b-button>
      </div>
    </section>
    <section class="about">
      <b-container>
        <b-row>
          <b-col cols="6" md="12" sm="12">
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
          </b-col>
          <b-col cols="6" md="12" sm="12" class="my-auto">
            <div class="image-container">
              <img width="400" height="266" src="@/assets/images/index/about-us/image3.jpg" />
              <img width="400" height="266" src="@/assets/images/index/about-us/image2.jpg" />
              <img width="400" height="266" src="@/assets/images/index/about-us/image1.jpg" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="committees">
      <b-container>
        <b-row>
          <b-col cols="2"></b-col>
          <b-col>
            <div class="text-center">
              <h2>Commissies</h2>
              <p>Salve Mundi heeft verschillende commissies die ieder verantwoordelijk zijn voor het functioneren van de vereniging. Elke commissie heeft zijn eigen taken en verantwoordelijkheden, en samen zorgen zij ervoor dat Salve Mundi kan zijn zoals het is!</p>

              <div class="committee-icons mb-3">
                <a>
                  <CircleIcon name="Bestuur" icon="images/committees/icons/bestuur.png" />
                </a>
                <a>
                  <CircleIcon name="Feest" icon="images/committees/icons/feest.png" />
                </a>
                <a>
                  <CircleIcon name="Media" icon="images/committees/icons/media.png" />
                </a>
                <a>
                  <CircleIcon name="Kamp" icon="images/committees/icons/kamp.png" />
                </a>
                <a>
                  <CircleIcon name="Studie" icon="images/committees/icons/studie.png" />
                </a>
                <a>
                  <CircleIcon name="Ledenzaken" icon="images/committees/icons/ledenzaken.png" />
                </a>
                <a>
                  <CircleIcon name="Activiteiten" icon="images/committees/icons/activiteiten.png" />
                </a>
                <a>
                  <CircleIcon name="Extern" icon="images/committees/icons/extern.png" />
                </a>
                <a>
                  <CircleIcon name="Kas" icon="images/committees/icons/kas.png" />
                </a>
                <a>
                  <CircleIcon name="ICT" icon="images/committees/icons/ict.png" />
                </a>
              </div>
            </div>
          </b-col>
          <b-col cols="2"></b-col>
        </b-row>
      </b-container>
    </section>
    <section class="korting mb-5">
      <div class="container">
        <b-row>
          <b-col cols="12">
            <div class="text-center">
              <h2>Korting</h2>
              <p>Wat is er voor een student nou mooier dan korting? Bij Salve Mundi hebben wij ook een paar mooie deals voor je klaar staan waar jij als lid van kan profiteren! Zo hebben wij bij onze stamkroeg Villa Fiesta korting op de zogenoemde ‘bierkaart’. Bij het aanschaffen van deze kaart heb je recht op 10 consumpties voor een klein bedrag van € 17,50. Daarnaast heb je ook nog recht op korting bij Cafetaria De Hoek. Denk hierbij aan kortingen op verschillende menu’s en snacks. Beide begeven deze gelegendheden op stratumseind, ideaal om deze deals te combineren tijdens een avondje uitgaan!</p>
              <div class="mt-5">
                <a>
                  <CircleIcon name="Villa Fiesta" icon="images/index/korting/villa.png" />
                </a>
                <a>
                  <CircleIcon name="Restaria De Hoek" icon="images/index/korting/de-hoek.png" />
                </a>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </section>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import EventItem from '@/components/layout/events/EventItem.vue';
import CircleIcon from '@/components/basic/CircleIcon.vue';
import isLoggedIn from '../../lib/authentication';

export default Vue.extend({
  components: { EventItem, CircleIcon },
  data() {
    return {};
  },
  methods: {
    isLoggedInMethod() {
      return isLoggedIn();
    },
  },
});
</script>
<style lang="scss">
.index {
  margin-top: -100px;
  section.main {
    height: 100vh;
    background: linear-gradient(
        rgba(102, 50, 101, 0.8),
        rgba(102, 50, 101, 0.8)
      ),
      url("../../assets/images/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    justify-content: center;

    padding-top: 0;

    .center {
      text-align: center;
      font-family: Poppins, sans-serif;

      .lead {
        font-size: 28px;
        color: #ffffff;
        font-weight: 1090400;
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
    }
  }

  section {
    padding-top: 69px;

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

  .image-container {
    height: 440px;
    position: relative;
    margin-top: 7rem;
    img {
      position: absolute;

      @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
          top: #{0 + ($i * 30) + "px"};
          left: #{0 + ($i * 30) + "px"};
        }
      }
    }
  }
}
</style>