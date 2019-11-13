<template>
  <b-row>
    <b-col cols="4"></b-col>
    <b-col cols="4">
      <h2>Salve Mundi Vest</h2>
      <span>&euro;24,99</span>
      <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies. Vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla id nibh ultricies.</p>

      <span class="select-size">Selecteer een maat:</span>
      <size-selector class="my-3" :available-sizes="['M', 'S']" />

      <b-btn class="mt-4" size="small" variant="samu" @click="buy">Bestel</b-btn>
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
import SizeSelector from "@/components/layout/merchandise/SizeSelector.vue";

import Vue from "vue";
export default Vue.extend({
  components: {
    MerchItem,
    SizeSelector
  },
  methods: {
    buy() {
      this.$router.push({name: "ShoppingCart"});
    }
  },
  data() {
    return {
      size: null
    };
  }
});
</script>
<style lang="scss">
.select-size {
  display: block;
  margin-top: 30px;
  font-weight: bold;
}
</style>