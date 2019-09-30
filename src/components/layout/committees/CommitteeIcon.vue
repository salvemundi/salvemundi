<template>
  <div class="committee-icon">
    <div class="committee-icon__holder">
      <img :src="icon" />
    </div>
    <span class="committee-icon__name">{{name}}</span>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  props: ['name', 'icon'],
})
export default class CommitteeIcon extends Vue {}
</script>
<style lang="scss">
.committee-icon {
  margin-left: 10px;
  margin-right: 10px;
  
  &__holder {
    width: 78px;
    height: 78px;

    background: #663265;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);

    border-radius: 50%;
  }

  &__name {
    text-align: center;
    display: block;
  }
}
</style>