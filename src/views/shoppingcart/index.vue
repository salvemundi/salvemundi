<template>
  <b-container>
    <b-row>
      <b-col cols="7">
        <h2>Winkelwagen</h2>
        <hr class="my-3" />
        <div class="cart-items">
          <b-col cols="3">
            <cart-item />
          </b-col>
        </div>
      </b-col>
      <b-col cols="2"></b-col>
      <b-col cols="3">
        <h2>Overzicht</h2>
        <hr />
        <table>
          <tr>
            <td>Subtotaal:</td>
            <td>&euro;109,92</td>
          </tr>
          <tr>
            <td>Korting:</td>
            <td>&euro;0,00</td>
          </tr>
          <tr>
            <td>Korting:</td>
            <td>&euro;109,92</td>
          </tr>
        </table>
      </b-col>
      <hr />
    </b-row>
  </b-container>
</template>

<script>
import CartItem from "@/components/layout/shoppingcart/CartItem.vue";
export default {
  components: {
    CartItem
  }
};
</script>

<style>
</style>