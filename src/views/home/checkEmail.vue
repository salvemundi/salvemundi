<template scoped>
  <div class="check-email">
    <div class="check-email_center">
      <SaMuHeader id="title">{{$t('check_email.title')}}</SaMuHeader>
      <p id="description">{{$t('check_email.description')}}</p>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import SaMuHeader from '@/components/basic/SaMuHeader.vue';

@Component({
    components: {
        SaMuHeader,
    },
})
export default class CheckEmail extends Vue {}
</script>
<style lang="scss" scoped>
.check-email {

    &_center {
        width: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
}
</style>

<i18n src="@/lang/Register.json"></i18n>