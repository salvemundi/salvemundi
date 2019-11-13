<template>
  <div class="committee-member">
    <img class="committee-member__icon" :src="member.avatar" alt="icon of committee member" />
    <span class="committee-member__name">{{member.name}}</span>
    <span class="committee-member__direction">{{member.direction}}</span>
  </div>
</template>

<script>
export default {
  props: ["member"]
};
</script>
<style lang="scss" scoped>
.committee-member {
  &__icon {
    width: 166.33px;
    height: 250px;
  }

  &__name {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;

    display: block
  }

  &__direction {
      display: block;
  }
}
</style>