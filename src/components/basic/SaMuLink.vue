<template>
    <router-link class="SaMuLink" :to="to"><slot></slot></router-link>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: ['to'],
})
export default class SaMuLnk extends Vue {}
</script>
<style lang="scss">
.SaMuLink {
    color: black;
}

.SaMuLink:hover {
    color: #663265
}
</style>