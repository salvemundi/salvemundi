<template>
  <div class="SaMuGrid" :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class SaMuGrid extends Vue {
  @Prop({required: true})
  private minWidth: string | undefined;

  private style = 'grid-template-columns: repeat(auto-fit, minmax(' + this.minWidth + ', 1fr));';
}
</script>
<style lang="scss">
.SaMuGrid {
    display: grid;
}
</style>