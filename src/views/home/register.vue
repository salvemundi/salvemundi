<template scoped>
  <div class="register">
      <form v-on:submit="handleSubmit">
        <b-container>
            <b-row>
                <b-col sm="6">
                    <div class="register-form general-information">
                        <SaMuBadge text="1">{{$t('form.general_info')}}</SaMuBadge>
                        <div class="register-form__body">
                            <SaMuInput :placeholder="$t('form.first_name')" type="text" v-model="dto.firstName" id="register-form__first_name"/>
                            <SaMuInput :placeholder="$t('form.last_name')" type="text" v-model="dto.lastName" id="register-form__last_name"/>
                            <SaMuInput :placeholder="$t('form.birthday')" type="date" v-model="dto.birthday" id="register-form__birthday"/>
                            <SaMuInput :placeholder="$t('form.address')" type="text" v-model="dto.address" id="register-form__address"/>
                            <SaMuInput :placeholder="$t('form.city')" type="text" v-model="dto.city" id="register-form__city"/>
                            <SaMuInput :placeholder="$t('form.postalcode')" type="text" v-model="dto.postalcode" id="register-form__postalcode"/>
                            <SaMuInput :placeholder="$t('form.country')" type="text" v-model="dto.country" id="register-form__country"/>
                        </div>
                    </div>
                </b-col>
                <b-col sm="6">
                    <div class="register-form digital-information">
                        <SaMuBadge text="2">{{$t('form.digital_data')}}</SaMuBadge>
                        <div class="register-form__body">
                            <SaMuInput :placeholder="$t('form.ipcn')" type="text" v-model="dto.pcn" id="register-form__pcn"/>
                            <SaMuInput :placeholder="$t('form.phonenumber')" type="text" v-model="dto.phoneNumber" id="register-form__phonenumber"/>
                            <SaMuInput :placeholder="$t('form.email')" type="email" v-model="dto.email" id="register-form__email"/>
                            <input :placeholder="$t('form.email')" type="file" ref="file" v-on:change="handleFileUpload()" id="register-form__profile-picture"/>
                            <b-button variant="samu" size="small" type="submit">{{$t('form.send')}}</b-button>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
      </form>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import SaMuInput from '@/components/basic/SaMuInput.vue';
import SaMuBadge from '@/components/basic/SaMuBadge.vue';
import { AuthorizationService } from '@/openapi/api/authorization.service';
import { PaymentsService } from '@/openapi/api/payments.service';
import { MeDTO } from '@/openapi/model/meDTO';
import openApiContainer from '@/openApiContainer';
import { RegisterDTO } from '@/openapi/model/registerDTO';
import { User } from '@/openapi/model/user';
import { PaymentDTO } from '../../openapi/model/paymentDTO';
import HttpResponse from '@/openapi/HttpResponse';
import { observable } from 'rxjs';


@Component({
    components: {
        SaMuInput,
        SaMuBadge,
    },

})
export default class Register extends Vue {

    private password2 = '';
    private dto: RegisterDTO = {
        firstName: '',
        lastName: '',
        birthday: '',
        address: '',
        city: '',
        postalcode: '',
        country: '',
        email: '',
        phoneNumber: '',
        pcn: '',
        profilePicture: new Blob(),
    };

    private authorizationService: AuthorizationService = openApiContainer.get<AuthorizationService>('AuthorizationService');
    private paymentsService: PaymentsService = openApiContainer.get<PaymentsService>('PaymentsService');

    constructor() {
        super();
        const code = new URLSearchParams(window.location.search.substring(1)).get('code');

        if (code) {
            this.authorizationService.me(code)
            .subscribe((res: MeDTO) => {
                this.dto.firstName = res.firstName;
                this.dto.lastName = res.lastName;
                this.dto.email = res.email;
                this.dto.pcn = res.pcn;
            });
        }
    }

    private handleFileUpload() {
        this.dto.profilePicture = (this.$refs.file as any).files[0];
    }

    private handleSubmit(submitEvent: Event) {
        submitEvent.preventDefault();

        // Registers user
        this.authorizationService.regiser(
            this.dto.firstName,
            this.dto.lastName,
            this.dto.birthday,
            this.dto.address,
            this.dto.city,
            this.dto.postalcode,
            this.dto.country,
            this.dto.email,
            this.dto.phoneNumber,
            this.dto.pcn,
            this.dto.profilePicture,
            'response')
        .subscribe((res: HttpResponse<User>) => {

            // Create payment for the new user
            this.paymentsService.createPaymentForMembership(res.response.id, 'response')
            .subscribe((res2: HttpResponse<PaymentDTO>) => {

                // Redirect to payment page if the payment has not been expired
                if (new Date(res2.response.expiresAt).getTime() >= new Date().getTime()) {
                    window.location.href = res2.response.url.href;

                } else {
                    Vue.toasted.show(this.$t('error.payment_expired').toString(), {duration: 5000, type: 'error'});
                }
            }, (err: HttpResponse) => {
                Vue.toasted.show(this.$t('error.unknown').toString(), {duration: 5000, type: 'error'});
            });
        }, (err: HttpResponse) => {
            if (err.status === 409) {
                Vue.toasted.show(this.$t('error.email_already_exists').toString(), {duration: 5000, type: 'error'});
            } else if (err.status === 400) {
                Vue.toasted.show(this.$t('error.form_not_filled_in_correctly').toString(), {duration: 5000, type: 'error'});
            } else {
                Vue.toasted.show(this.$t('error.unknown').toString(), {duration: 5000, type: 'error'});
            }
        });
    }
}
</script>
<style lang="scss" scoped>
.register {

    &-form.general-information {
        .register-form__body {
            margin-top: 18px;
            width: 100%;
        }
    }

    &__border {
        grid-area: line;
        width: 0px;
        border: 0.5px #e2e2e2 solid;
    }

    &-form.digital-information {
        .register-form__body {
            margin-top: 18px;
            width: 100%;
            text-align: right;
        }
    }
}
</style>

<i18n src="@/lang/Register.json"></i18n>