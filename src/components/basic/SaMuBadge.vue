<template>
  <div class="SaMuBadge">
    <div class="SaMuBadge__holder">
      <span>{{text}}</span>
    </div>
    <SaMuHeader class="SaMuBadge__name"><slot></slot></SaMuHeader>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SaMuHeader from '@/components/basic/SaMuHeader.vue';

@Component({
  components: {
      SaMuHeader,
  },
  props: ['text'],
})
export default class SaMuBadge extends Vue {}
</script>
<style lang="scss">
.SaMuBadge {
  margin-right: 10px;
  
  &__holder {
    float: left;
    width: 30px;
    height: 30px;

    background: #663265;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);

    border-radius: 50%;
    margin-right: 30px;

    & span {
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }
  }

  &__name {
      margin-left: 10px;
      text-align: left;
  }
}
</style>