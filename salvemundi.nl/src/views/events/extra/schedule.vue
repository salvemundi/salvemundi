<template>
  <b-container>
    <b-row>
      <b-col cols="12" class="my-3">
        <h1>{{$t('header')}}</h1>
        <p>{{$t('general_information')}}</p>
      </b-col>
      <b-col cols="12" class="my-2">
        <b-button :to="{ name: 'form.signup', params: { id: 1 } }" variant="samu">
          {{$t('action')}}
        </b-button>
      </b-col>
      <b-col cols="12" md="6" class="my-3">
        <h2>{{$t('monday.header')}}</h2>
        <p>{{$t('monday.info1')}}</p>
        <p>{{$t('monday.info2')}}</p>
      </b-col>
      <b-col cols="12" md="6" class="my-3">
        <h2>{{$t('tuesday.header')}}</h2>
        <p>{{$t('tuesday.info')}}</p>
      </b-col>
      <b-col cols="12" md="6" class="my-3">
        <h2>{{$t('wednesday.header')}}</h2>
        <p>{{$t('wednesday.info1')}}</p>
        <p>{{$t('wednesday.info2')}}</p>
      </b-col>
      <b-col cols="12" md="6" class="my-3">
        <h2>{{$t('thursday.header')}}</h2>
        <p>{{$t('thursday.info')}}</p>
      </b-col>
      <b-col cols="12" md="6" class="my-3">
        <h2>{{$t('friday.header')}}</h2>
        <p>{{$t('friday.info')}}</p>
      </b-col>
      <b-col cols="12" md="6" class="my-3">
        <h2>{{$t('extra.header')}}</h2>
        <p>{{$t('extra.warning')}}</p>
        <p>
          <strong>{{$t('extra.apply')}}</strong>
        </p>
        <b-button size="lg" :to="{ name: 'form.signup', params: { id: 1 } }" variant="samu">
          {{$t('extra.action')}}
        </b-button>
      </b-col>
      <b-col cols="12" class="my-3">
        <h2>{{$t('contact.header')}}</h2>
        <p>
          {{$t('contact.part1')}}
          <strong>+31 6 36142514</strong>
          {{$t('contact.part2')}}
          <a href="mailto:intro@salvemundi.nl">intro@salvemundi.nl</a>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style></style>

<i18n src="@/lang/events/extra/schedule.json"></i18n>
