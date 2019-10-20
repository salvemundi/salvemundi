<template>
  <div class="circle-icon">
    <div class="circle-icon__holder">
      <img width="35" height="35" :src="require(`@/assets/${icon}`)" />
    </div>
    <span class="circle-icon__name">{{name}}</span>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
  props: ["name", "icon"]
})
export default class CirlceIcon extends Vue {}
</script>
<style lang="scss">
.circle-icon {
  margin-left: 10px;
  margin-right: 10px;
  display: inline-block;

  &__holder {
    width: 78px;
    height: 78px;
    margin: 0 auto;
    margin-bottom: 5px;

    background: #663265;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);

    border-radius: 50%;

    img {
      margin: 20px;
    }
  }

  &__name {
    text-align: center;
    display: block;
  }
}
</style>