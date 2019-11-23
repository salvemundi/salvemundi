<template scoped>
  <div class="login">
      <form v-on:submit="handleSubmit">
        <b-row>
            <b-col>
                <div class="login-form">
                    <SaMuBadge text="1">{{$t('form.title')}}</SaMuBadge>
                    <div class="login-form__body">
                        <form v-on:submit="handleSubmit">
                            <SaMuInput :placeholder="$t('form.email')" type="text" autocomplete="username" v-model="dto.email"/>
                            <SaMuInput :placeholder="$t('form.password')" type="password" autocomplete="current-password" v-model="dto.password"/>
                            <b-button variant="samu" type="submit" size="sm">{{$t('form.login')}}</b-button>
                        </form>
                    </div>
                </div>
            </b-col>
        </b-row>
      </form>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import SaMuInput from '@/components/basic/SaMuInput.vue';
import SaMuBadge from '@/components/basic/SaMuBadge.vue';
import openApiContainer from '@/openApiContainer';
import { AuthorizationService } from '@/openapi/api/authorization.service';
import { LoginDTO } from '@/openapi/model/loginDTO';


@Component({
    components: {
        SaMuInput,
        SaMuBadge,
    },

})
export default class Login extends Vue {

    private authorizationService: AuthorizationService = openApiContainer.get<AuthorizationService>('AuthorizationService');
    private dto: LoginDTO = {
        email: '',
        password: '',
    };

    public handleSubmit(e: Event) {
        this.authorizationService.authorizationLoginPost(this.dto).subscribe(() => {
            this.successfullLogin();

        }, (err) => {
            if (err.status === 401) {
                Vue.toasted.show(this.$t('error.login_failed').toString(), {duration: 5000, type: 'error'});

            } else {
                Vue.toasted.show(this.$t('error.unknown').toString(), {duration: 5000, type: 'error'});
            }
        });

        e.preventDefault();
    }

    private successfullLogin() {
        const url: string = (new URLSearchParams(window.location.search.substring(1)).get('redirect')) || '/home';
        window.location.href = url;
    }
}
</script>
<style lang="scss" scoped>
.login {
    form {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    &-form {
        padding: 0px 20px 0px 50px;

        &__body {
            margin-top: 18px;
            width: 100%;
            text-align: right;
        }
    }

}
</style>

<i18n src="@/lang/Login.json"></i18n>