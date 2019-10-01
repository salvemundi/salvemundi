<template>
    <h2 class="SaMuHeader"><slot></slot></h2>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SaMuHeader extends Vue {}
</script>
<style lang="scss">
.SaMuHeader {
    color: #663265;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
}
</style>