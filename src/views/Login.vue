<template scoped>
  <div class="login">
      <form v-on:submit="handleSubmit">
        <b-row class="justify-content-md-center">
            <b-col sm="4">
                <div class="login-form">
                    <SaMuBadge text="1">{{$t('form.title')}}</SaMuBadge>
                    <div class="login-form__body">
                        <SaMuInput :placeholder="$t('form.email')" type="text" autocomplete="username" v-model="dto.email"/>
                        <SaMuInput :placeholder="$t('form.password')" type="password" autocomplete="current-password" v-model="dto.password"/>
                        <SaMuButton type="submit" size="small">{{$t('form.login')}}</SaMuButton>
                    </div>
                </div>
            </b-col>
        </b-row>
      </form>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import SaMuButton from '@/components/basic/SaMuButton.vue';
import SaMuInput from '@/components/basic/SaMuInput.vue';
import SaMuBadge from '@/components/basic/SaMuBadge.vue';
import openApiContainer from '../openApiContainer';
import { AuthorizationService } from '../openapi/api/authorization.service';
import { LoginDTO } from '../openapi/model/loginDTO';


@Component({
    components: {
        SaMuButton,
        SaMuInput,
        SaMuBadge,
    },

})
export default class Login extends Vue {

    private authorizationService: AuthorizationService = openApiContainer.get<AuthorizationService>('AuthorizationService');
    private dto: LoginDTO = {
        email: '',
        password: ''
    };

    handleSubmit(e: Event) {
        console.log(this.dto);
        this.authorizationService.authorizationLoginPost(this.dto).subscribe(() => {
            // TODO redirect to profile page
        }, (err) => {
            if (err.status === 401) {
                Vue.toasted.show(this.$t('error.login_failed').toString(), {duration: 5000, type: 'error'});
            
            } else {
                Vue.toasted.show(this.$t('error.unknown').toString(), {duration: 5000, type: 'error'});
            }
        });
        e.preventDefault();
    }
}
</script>
<style lang="scss" scoped>
.login {
    height: calc(100vh - 177px);

    form {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    &-form {
        &__body {
            margin-top: 18px;
            width: 100%;
            text-align: right;
        }
    }

}
</style>

<i18n src="../lang/Login.json"></i18n>