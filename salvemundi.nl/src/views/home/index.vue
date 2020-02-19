<template scoped>
  <div class="index">
    <section class="main">
      <div class="center">
        <h2 class="lead">{{$t('first_view.we_are')}}</h2>
        <h1 class="title">SALVE MUNDI</h1>
        <h3 class="notice">{{$t('first_view.students_for_studens')}}</h3>

        <b-button variant="samu" class="mt-5" size="lg" href="/home/prelogon" v-if="!loggedIn">
          {{$t('first_view.join_us_now')}}
        </b-button>
      </div>
    </section>
    <section id="new-website">
      <b-container>
        <b-row>
          <b-col cols="12">
            <h2>{{$t('new_website.important')}}</h2>
            <p>
              {{$t('new_website.welcome_to_samu')}}
              <strong>{{$t('new_website.not_done')}}</strong>
            </p>
            <p>
              {{$t('new_website.open_source')}}
              <a href="https://github.com/salvemundi">GitHub</a>
              {{$t('new_website.projects')}}
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="about">
      <b-container>
        <b-row>
          <b-col cols="12" sm="12" md="6" lg="6">
            <h2>{{$t('about_us.title')}}</h2>
            <p>{{$t('about_us.hello_world')}}</p>
            <p>{{$t('about_us.activity')}}</p>
            <ul>
              <li>{{$t('about_us.activities.readings')}}</li>
              <li>{{$t('about_us.activities.field_trips')}}</li>
              <li>{{$t('about_us.activities.workshops')}}</li>
              <li>{{$t('about_us.activities.company_visits')}}</li>
              <li>{{$t('about_us.activities.tutoring')}}</li>
            </ul>

            <p>{{$t('about_us.party')}}</p>
            <ul>
              <li>{{$t('about_us.parties.villa_fiesta')}}</li>
              <li>{{$t('about_us.parties.casino_evenings')}}</li>
              <li>{{$t('about_us.parties.pubquizes')}}</li>
              <li>{{$t('about_us.parties.random')}}</li>
            </ul>

            <p>{{$t('about_us.lame')}}</p>
            <ul>
              <li>{{$t('about_us.boring_stuff.camping')}}</li>
              <li>{{$t('about_us.boring_stuff.game_night')}}</li>
              <li>{{$t('about_us.boring_stuff.hackaton')}}</li>
              <li>{{$t('about_us.boring_stuff.funpark')}}</li>
            </ul>

            <p>{{$t('about_us.intro')}}</p>
          </b-col>
          <b-col cols="12" sm="12" md="6" lg="6" class="my-auto">
            <div class="image-container">
              <img width="400" height="266" src="@/assets/images/index/about-us/image3.jpg" />
              <img width="400" height="266" src="@/assets/images/index/about-us/image2.jpg" />
              <img width="400" height="266" src="@/assets/images/index/about-us/image1.jpg" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="committees">
      <b-container>
        <b-row>
          <b-col cols="2"></b-col>
          <b-col>
            <div class="text-center">
              <h2>{{$t('committee.title')}}</h2>
              <p>{{$t('committee.description')}}</p>

              <div class="committee-icons mb-3">
                <a>
                  <CircleIcon :name="$t('committee.committees.bord')" icon="images/committees/icons/bestuur.png" />
                </a>
                <a>
                  <CircleIcon :name="$t('committee.committees.party')" icon="images/committees/icons/feest.png" />
                </a>
                <a>
                  <CircleIcon :name="$t('committee.committees.media')" icon="images/committees/icons/media.png" />
                </a>
                <a>
                  <CircleIcon :name="$t('committee.committees.camping')" icon="images/committees/icons/kamp.png" />
                </a>
                <a>
                  <CircleIcon :name="$t('committee.committees.study')" icon="images/committees/icons/studie.png" />
                </a>
                <a>
                  <CircleIcon :name="$t('committee.committees.member_affairs')" icon="images/committees/icons/ledenzaken.png" />
                </a>
                <a>
                  <CircleIcon :name="$t('committee.committees.activities')" icon="images/committees/icons/activiteiten.png" />
                </a>
                <a>
                  <CircleIcon :name="$t('committee.committees.external')" icon="images/committees/icons/extern.png" />
                </a>
                <a>
                  <CircleIcon :name="$t('committee.committees.money')" icon="images/committees/icons/kas.png" />
                </a>
                <a>
                  <CircleIcon :name="$t('committee.committees.ict')" icon="images/committees/icons/ict.png" />
                </a>
              </div>
            </div>
          </b-col>
          <b-col cols="2"></b-col>
        </b-row>
      </b-container>
    </section>
    <section id="korting" class="mb-5">
      <div class="container">
        <b-row>
          <b-col cols="12">
            <div class="text-center">
              <h2>{{$t('discount.title')}}</h2>
              <p>{{$t('discount.description')}}</p>
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

export default Vue.extend({
  components: { EventItem, CircleIcon },
  data() {
    return {
      loggedIn: false,
    };
  },
  async created() {
    this.loggedIn = await this.$store.dispatch('isLoggedIn');
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
    overflow: hidden;
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

<i18n src="@/lang/index.json"></i18n>
