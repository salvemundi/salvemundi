<template>
    <div class="preLogon">
        <div class="center">
            <div class="login">
                <SaMuHeader text="Inloggen"></SaMuHeader>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SaMuButton from '@/components/basic/SaMuButton.vue';
import SaMuHeader from '@/components/basic/SaMuHeader.vue';

@Component({
  components: {
    SaMuButton,
    SaMuHeader,
  },
})
export default class PreLogon extends Vue {}
</script>
<style lang="scss">
.preLogon {
    height: calc(100vh - 177px);

    & .center {
        width: 75%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
}
</style>