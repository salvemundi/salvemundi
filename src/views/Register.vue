<template>
  <div class="register">
      <div class="center">
        <SaMuInput placeholder="Voornaam" type="number"></SaMuInput>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SaMuButton from '@/components/basic/SaMuButton.vue';
import SaMuInput from '@/components/basic/SaMuInput.vue';

@Component({
    components: {
        SaMuButton,
        SaMuInput,
    },
})
export default class Register extends Vue {}
</script>
<style lang="scss">
.register {
    height: calc(100vh - 177px);

    & .center {
        width: 85%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);

    }
}
</style>