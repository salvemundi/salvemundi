<template>
  <input class="SaMuInput" :placeholder="placeholder" :type="!type || type === '' ? 'text' : type"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    props: [ 'placeholder', 'type' ],
})
export default class SaMuInput extends Vue {}
</script>
<style lang="scss">
.SaMuInput {
    border: none;
    border-bottom: 1px solid #828282;
}
</style>