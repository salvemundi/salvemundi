<template>
  <div class="cart-item">
    <img class="cart-item__image" src alt />
    <div>
      <span class="cart-item__price">{{item.price}}</span>
      <span class="cart-item__name">{{item.name}}</span>
    </div>
    <hr />
    <div>
      <span class="cart-item__size">Maat:</span>
      <span>{{item.size}}</span>
    </div>
    <hr />
    <div>
      <span class="cart-item__quantity">Aantal:</span>
      <span>{{item.quantity}}</span>
    </div>
    <hr />
    <span @click="deleteItem">Verwijder item</span>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    deleteItem() {
      return null;
    },
  },
};
</script>

<style lang="scss">
.cart-item {
  hr {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  &__price {
    font-family: Poppins;
    font-weight: bold;
    font-size: 14px;
    display: block;
    color: #000000;
  }

  &__name {
    font-family: Poppins;
    font-size: 12px;
    align-items: center;

    color: #000000;
  }

  &__size,
  &__quantity {
    font-family: Poppins;
    font-weight: bold;
    font-size: 14px;

    color: #000000;

    + span {
      margin-left: 10px;
    }
  }
}
</style>