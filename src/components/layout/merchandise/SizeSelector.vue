<template>
  <div class="size-selector">
    <div
      class="size"
      v-for="(size, index) in availableSizes"
      :key="index"
      @click="selectSize(size)"
      :class="{selected: size === selectedSize}"
    >
      <span class="size__display">{{size}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['availableSizes'],
  data() {
    return {
      selectedSize: null,
    };
  },
  methods: {
    selectSize(size) {
      this.selectedSize = size;
    },
  },
};
</script>
<style lang="scss">
.size-selector {
  display: flex;
  .size {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ffffff;
    border: 2px solid #000000;
    box-sizing: border-box;
    margin-right: 15px;
    display: block;
    cursor: pointer;

    &__display {
      display: block;
      margin-top: 5px;

      font-family: Poppins;
      font-weight: 300;
      font-size: 12px;

      text-align: center;
    }

    &.selected {
      color: #663265;
      border-color: #663265;
      .size__display {
        font-weight: bold;
      }
    }
  }
}
</style>