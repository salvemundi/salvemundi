<template>
  <div>
    <h2>Merchandise</h2>
    <b-container>
      <b-row>
        <b-col col="4">
          <router-link :to="{ name: 'MerchandiseItem', params: {merchandiseItem: 123 }}">
            <merch-item name="Vest Salve Mundi" price="14,99" image />
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script lang="ts">
import MerchItem from '@/components/layout/merchandise/MerchItem.vue';
import Vue from 'vue';

export default Vue.extend({
  components: {
    MerchItem,
  },
});
</script>
<style lang="scss" scoped>
h2 {
  text-align: center;
}
</style>