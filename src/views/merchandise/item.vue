<template>
  <b-row>
    <b-col cols="4"></b-col>
    <b-col cols="4">
      <h2>Salve Mundi Vest</h2>
      <span>&euro;24,99</span>
      <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies. Vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla id nibh ultricies.</p>

      <b-btn size="small" variant="samu">Bestel</b-btn>
    </b-col>
    <b-col cols="1"></b-col>
    <b-col cols="3">
      <h5>Gerelateerde artikelen</h5>
      <merch-item title="Salve Mundi Vest" price="24,99" />
      <merch-item title="Salve Mundi Vest" price="24,99" />
      <merch-item title="Salve Mundi Vest" price="24,99" />
    </b-col>
  </b-row>
</template>
<script lang="ts">
import MerchItem from "@/components/layout/merchandise/MerchItem.vue";

import Vue from "vue";
export default Vue.extend({
  components: {
    MerchItem
  }
});
</script>
<style lang="scss">
</style>