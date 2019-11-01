<template>
  <div class="merchandise-item">
    <img src class="merchandise-item__image" />
    <span class="merchandise-item__price">&euro; {{price}}</span>
    <span class="merchandise-item__name">{{name}}</span>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
export default Vue.extend({
  props: ["name", "price", "image"]
});
</script>
<style lang="scss">
.merchandise-item {
  &__image {
    width: 250px;
    height: 167px;
  }

  &__name {
    font-family: Poppins;
    font-size: 16px;
  }

  &__price {
    display: block;
    font-family: Poppins;
    font-weight: bold;
    font-size: 16px;
  }
}
</style>
