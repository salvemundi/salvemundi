<template>
  <div class="register">
      <form v-on:submit="handleSubmit">
        <SaMuGrid minWidth="300px" style="gap: 40px; 50px;">
            <div class="register-form general-information">
                <SaMuBadge text="1" title="Algemene info" />
                <div class="register-form__body">
                    <SaMuInput placeholder="Voornaam" type="text" name="firstName" v-model="dto.firstName"/>
                    <SaMuInput placeholder="Achternaam" type="text" name="lastName" v-model="dto.lastName"/>
                    <SaMuInput placeholder="Geboortedatum (jjjj-mm-dd)" type="text" name="birthday" v-model="dto.birthday"/>
                    <SaMuInput placeholder="Straat en huisnummer" type="text" name="address" v-model="dto.address"/>
                    <SaMuInput placeholder="Woonplaats" type="text" name="city" v-model="dto.city"/>
                    <SaMuInput placeholder="Postcode" type="text" name="postalcode" v-model="dto.postalcode"/>
                    <SaMuInput placeholder="Land" type="text" name="country" v-model="dto.country"/>
                </div>
            </div>
            <div class="register-form digital-information">
                <SaMuBadge text="2" title="Digitale gegevens" />
                <div class="register-form__body">
                    <SaMuInput placeholder="PCN" type="text" name="iPCN" v-model="dto.pcn"/>
                    <SaMuInput placeholder="Telefoon nummer" type="text" name="phoneNumber" v-model="dto.phoneNumber"/>
                    <SaMuInput placeholder="E-mailadres" type="text" name="email" v-model="dto.email"/>
                    <SaMuInput placeholder="Wachtwoord" type="password" v-model="dto.password"/>
                    <SaMuInput placeholder="Bevestig je wachtwoord" type="password" v-model="password2"/>
                    <SaMuButton size="small" type="submit">Versturen!</SaMuButton>
                </div>
            </div>
        </SaMuGrid>
      </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SaMuButton from '@/components/basic/SaMuButton.vue';
import SaMuInput from '@/components/basic/SaMuInput.vue';
import SaMuBadge from '@/components/basic/SaMuBadge.vue';
import SaMuGrid from '@/components/basic/SaMuGrid.vue';
import { Container } from 'inversify';
import { ApiServiceBinder } from '../openapi/ApiServiceBinder';
import { AuthorizationService } from '../openapi/api/authorization.service';
import { MeDTO } from '../openapi/model/meDTO';
import openApiContainer from '../openApiContainer';
import { RegisterDTO } from '../openapi/model/registerDTO';
import { User } from '../openapi/model/user';


@Component({
    components: {
        SaMuButton,
        SaMuInput,
        SaMuBadge,
        SaMuGrid,
    },

})
export default class Register extends Vue {

    private url = process.env.VUE_APP_API_URL;
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
        password: '',
    };

    private authorizationService: AuthorizationService = openApiContainer.get<AuthorizationService>('AuthorizationService');

    constructor() {
        super();
        const code = new URLSearchParams(window.location.search.substring(1)).get('code');

        if (code) {
            this.authorizationService.authorizationMeGet(code)
            .subscribe((res: MeDTO) => {
                this.dto.firstName = res.firstName;
                this.dto.lastName = res.lastName;
                this.dto.email = res.email;
                this.dto.pcn = res.pcn;
            });
        }


    }

    private handleSubmit(submitEvent: Event) {
        submitEvent.preventDefault();

        if (this.password2 === this.dto.password) {
            this.authorizationService.authorizationRegisterPost(this.dto).subscribe(() => {
                // TODO add redirect to profile page

            }, (err) => {
                Vue.toasted.show('Niet alles is correct ingevuld...', {duration: 5000, type: 'error'});
            });
        
        } else {
            Vue.toasted.show('Wachtwoorden zijn niet aan elkaar gelijk...', {duration: 5000, type: 'error'});
        }
    }
}
</script>
<style lang="scss">
.register {
    height: calc(100vh - 177px);

    form {
        width: 95%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

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