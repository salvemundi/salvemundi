<template scoped>
  <div class="confirm-account">
    <div class="confirm-account_center">
      <SaMuHeader>{{$t('confirm_account.title')}}</SaMuHeader>
      <form v-on:submit="handleSubmit">
        <SaMuInput :placeholder="$t('confirm_account.password')" type="password" v-model="dto.password" id="confirm-account__password"/>
        <SaMuInput :placeholder="$t('confirm_account.password_repeat')" type="password" v-model="repeatPassword" id="confirm-account__password-repeat"/>
        <b-button variant="samu" size="small" type="submit">{{$t('confirm_account.confirm')}}</b-button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import SaMuHeader from '@/components/basic/SaMuHeader.vue';
import SaMuInput from '@/components/basic/SaMuInput.vue';
import { ConfirmationDTO } from '../../openapi/model/confirmationDTO';
import { AuthorizationService } from '../../openapi/api/authorization.service';
import openApiContainer from '@/openApiContainer';
import HttpResponse from '../../openapi/HttpResponse';
import { User } from '@/openapi/model/user';

@Component({
    components: {
        SaMuHeader,
        SaMuInput,
    },
})
export default class ConfirmAccount extends Vue {

  private dto: ConfirmationDTO = {
    token: '',
    password: '',
  };
  private repeatPassword: string = '';

  private authorizationService: AuthorizationService = openApiContainer.get<AuthorizationService>('AuthorizationService');

  constructor() {
    super();

    const token = new URLSearchParams(window.location.search.substring(1)).get('token');
    if (token === '' || !token) {
      window.location.href = '/home';

    } else {
      this.dto.token = token;
    }
  }

  private handleSubmit(submitEvent: Event) {
    submitEvent.preventDefault();

    if (this.dto.password === this.repeatPassword) {
      this.authorizationService.authorizationConfirmationPost(this.dto, 'response')
      .subscribe((res: HttpResponse<User>) => {
        console.log(res);
      });

    } else {
      Vue.toasted.show(this.$t('error.password_not_match').toString(), {duration: 5000, type: 'error'});
    }
  }
}
</script>
<style lang="scss" scoped>
.confirm-account {

    &_center {
        width: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);

        form {
          text-align: right;
        }
    }
}
</style>

<i18n src="@/lang/Register.json"></i18n>