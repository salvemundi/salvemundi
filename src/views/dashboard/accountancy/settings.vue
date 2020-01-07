<template scoped>
  <div>
    <AccountancyHeader/>
    <b-container>
        <b-row>
            <b-col md="6">
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import AccountancyHeader from '@/components/layout/accountancy/header.vue';
import SaMuHeader from '@/components/basic/SaMuHeader.vue';
import { AccountancyService } from '../../../openapi/api/accountancy.service';
import openApiContainer from '@/openApiContainer';
import HttpResponse from '../../../openapi/HttpResponse';
import SaMuInput from '@/components/basic/SaMuInput.vue';

@Component({
  components: {
    AccountancyHeader,
    SaMuHeader,
    SaMuInput,
  },
})
export default class SettingsAccountancy extends Vue {
    private accountancyService: AccountancyService = openApiContainer.get<AccountancyService>('AccountancyService');

}
</script>
<style lang="scss">
</style>

<i18n src="@/lang/dashboard/accountancy/settings.json"></i18n>