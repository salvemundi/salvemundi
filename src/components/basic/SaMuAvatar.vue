<template>
    <img class="SaMuAvatar" :src="image"/>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: ['image'],
})
export default class SaMuLnk extends Vue {}
</script>
<style lang="scss">
.SaMuAvatar {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
}
</style>