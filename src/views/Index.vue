<template scoped>
  <div class="index">
    <section class="main">
      <div class="center">
        <h2 class="lead">Wij zijn</h2>
        <h1 class="title">SALVE MUNDI</h1>
        <h3 class="notice">Studenten voor studenten</h3>

        <b-button variant="samu" class="click-to-action" size="lg">Meld je nu aan!</b-button>
      </div>
    </section>
    <section class="about">
      <b-container>
        <b-row>
          <b-col cols="6">
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
          <b-col cols="6">
            <div class="image-container">
              <img width="400" src="@/assets/images/index/about-us/image.png" />
              <img width="400" src="@/assets/images/index/about-us/image.png" />
              <img width="400" src="@/assets/images/index/about-us/image.png" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="events">
      <b-container>
        <b-row>
          <b-col cols="8"></b-col>
          <b-col cols="4">
            <div>
              <h2>Evenementen</h2>
            </div>
          </b-col>
          <b-col cols="8">
            <EventItem />
            <EventItem />
            <EventItem />
          </b-col>
          <b-col cols="4">
            <p>Salve Mundi verzorgt voor zowel de uitgaande als niet uitgaande studenten evenementen. Voor de uitgaande studenten moet je hierbij denken aan feestjes in onze stamkroeg Villa Fiesta. En voor de wat minder uitgaande studenten kan je denken aan game-, poker-, en bordspelavonden. Voor iedereen wat wils!</p>
            <p>Bekijk hier dan ook de opkomende evenementen:</p>
            <p>Ben je benieuwd naar hoe zulke evenementen er uit zien? Bekijk dan onze facebookpagina.</p>
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
              </div>
              <div class="committee-icons">
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
                <a>
                  <CircleIcon name="Alpha Centauri" icon="images/committees/icons/alpha.png" />
                </a>
              </div>
            </div>
          </b-col>
          <b-col cols="2"></b-col>
        </b-row>
      </b-container>
    </section>
    <section class="merchandise">
      <div class="container">
        <b-row>
          <b-col cols="5">
            <h2>Merchandise</h2>
            <p>Naast dat onze mediacomissie de media verzorgt voor onze social media. Hebben ze ook nog een toffe merchandise ontworpen! Dit is de kans om op evenementen van Salve Mundi, feestjes of festivals te shinen met je mooie t-shirt, hoodie of vest.</p>
            <p>Wil jij nou ook zo gelikt over straat kunnen? Bestel je merchandise dan hier!</p>
            <b-button variant="samu">Merchandise</b-button>
          </b-col>
          <b-col cols="7">
            <img width="600" src="@/assets/images/index/about-us/image.png" />
          </b-col>
        </b-row>
      </div>
    </section>
    <section class="korting">
      <div class="container">
        <b-row>
          <b-col cols="12">
            <div class="text-center">
              <h2>Korting</h2>
              <p>Wat is er voor een student nou mooier dan korting? Bij Salve Mundi hebben wij ook een paar mooie deals voor je klaar staan waar jij als lid van kan profiteren! Zo hebben wij bij onze stamkroeg Villa Fiesta korting op de zogenoemde ‘bierkaart’. Bij het aanschaffen van deze kaart heb je recht op 10 consumpties voor een klein bedrag van € 17,50. Daarnaast heb je ook nog recht op korting bij Cafetaria De Hoek. Denk hierbij aan kortingen op verschillende menu’s en snacks. Beide begeven deze gelegendheden op stratumseind, ideaal om deze deals te combineren tijdens een avondje uitgaan!</p>
              <div class="mt-5">
                <a>
                  <CircleIcon name="Villa Fiesta" icon="images/committees/icons/bestuur.png" />
                </a>
                <a>
                  <CircleIcon name="Restaria De Hoek" icon="images/committees/icons/bestuur.png" />
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
import { Component, Vue } from "vue-property-decorator";
import EventItem from "@/components/layout/events/EventItem.vue";
import CircleIcon from "@/components/basic/CircleIcon.vue";

@Component({
  components: {
    EventItem,
    CircleIcon
  }
})
export default class Index extends Vue {}
</script>
<style lang="scss">
.index {
  section.main {
    height: 100vh;

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

    padding-top: 0;

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
        margin-top: 50px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  section {
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

  .image-container {
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