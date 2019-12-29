<template scoped>
  <div>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import { AccountancyService } from '../../../openapi/api/accountancy.service';
import openApiContainer from '@/openApiContainer';
import { ActivationLinkDTO } from '../../../openapi/model/activationLinkDTO';
import HttpResponse from '../../../openapi/HttpResponse';

@Component({
  components: { },
})
export default class ActivateAccountancy extends Vue {
    private accountancyService: AccountancyService = openApiContainer.get<AccountancyService>('AccountancyService');

    constructor() {
        super();

        const code = new URLSearchParams(window.location.search.substring(1)).get('code');
        if (code) {
            this.accountancyService.activateApi({ code }, 'response').subscribe((res: HttpResponse) => {
                window.location.href = '/dashboard/accountancy/';

            }, (err) => {
                Vue.toasted.show(this.$t('error').toString(), {duration: 10000, type: 'error'});
            });

        } else {
            this.accountancyService.getActivationLink('response').subscribe((res: HttpResponse<ActivationLinkDTO>) => {
                window.location.href = res.response.href;
            });
        }
    }
}
</script>

<i18n src="@/lang/dashboard/accountancy/activate.json"></i18n>