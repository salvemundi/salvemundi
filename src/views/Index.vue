<template scoped>
  <div class="index">
    <section class="main">
      <div class="center">
        <h2 class="lead">Wij zijn</h2>
        <h1 class="title">SALVE MUNDI</h1>
        <h3 class="notice">Studenten voor studenten</h3>

        <SaMuButton to="preLogon" size="large" class="click-to-action">Meld je nu aan!</SaMuButton>
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
    <section class="events">
      <div class="container">
        <div>
          <h2>Evenementen</h2>
          <p>Salve Mundi verzorgt voor zowel de uitgaande als niet uitgaande studenten evenementen. Voor de uitgaande studenten moet je hierbij denken aan feestjes in onze stamkroeg Villa Fiesta. En voor de wat minder uitgaande studenten kan je denken aan game-, poker-, en bordspelavonden. Voor iedereen wat wils!</p>
          <p>Bekijk hier dan ook de opkomende evenementen:</p>
          <p>Ben je benieuwd naar hoe zulke evenementen er uit zien? Bekijk dan onze facebookpagina.</p>
        </div>
        <div>
          <EventItem />
          <EventItem />
          <EventItem />
        </div>
      </div>
    </section>
    <section class="committees">
      <div class="container">
        <h2>Commissies</h2>
        <p>Salve Mundi heeft verschillende commissies die ieder verantwoordelijk zijn voor het functioneren van de vereniging. Elke commissie heeft zijn eigen taken en verantwoordelijkheden, en samen zorgen zij ervoor dat Salve Mundi kan zijn zoals het is!</p>

        <div class="committee-icons">
          <CommitteeIcon name="Bestuur" icon />
          <CommitteeIcon name="Feest" icon />
          <CommitteeIcon name="Media" icon />
          <CommitteeIcon name="Kamp" icon />
          <CommitteeIcon name="Studie" icon />
          <CommitteeIcon name="Ledenzaken" icon />
          <CommitteeIcon name="Activiteiten" icon />
          <CommitteeIcon name="Extern" icon />
          <CommitteeIcon name="Alpha Centauri" icon />
          <CommitteeIcon name="Kas" icon />
          <CommitteeIcon name="ICT" icon />
        </div>
      </div>
    </section>
    <section class="merchandise">
      <div class="container">
        <h2>Merchandise</h2>
        <p>Naast dat onze mediacomissie de media verzorgt voor onze social media. Hebben ze ook nog een toffe merchandise ontworpen! Dit is de kans om op evenementen van Salve Mundi, feestjes of festivals te shinen met je mooie t-shirt, hoodie of vest.</p>
        <p>Wil jij nou ook zo gelikt over straat kunnen? Bestel je merchandise dan hier!</p>
        <a class="button">Merchandise</a>
      </div>
    </section>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import EventItem from '@/components/layout/events/EventItem.vue';
import CommitteeIcon from '@/components/layout/committees/CommitteeIcon.vue';
import SaMuButton from '@/components/basic/SaMuButton.vue';

@Component({
  components: {
    EventItem,
    CommitteeIcon,
    SaMuButton,
  },
})
export default class Index extends Vue {}
</script>
<style lang="scss" scoped>
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

  section.committees {
    .committee-icon {
      display: inline-block;
    }
  }

}
</style>