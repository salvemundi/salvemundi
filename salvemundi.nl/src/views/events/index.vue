<template>
  <b-container class="mt-3">
    <b-row>
      <b-col cols="12">
        <h2>{{$t('header')}}</h2>
        <p>{{$t('info')}}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      events: [],
    };
  },
};
</script>

<style></style>

<i18n src="@/lang/events/index.json"></i18n>