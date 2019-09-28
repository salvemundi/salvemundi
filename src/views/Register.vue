<template>
  <div class="register">
      <form action="https://api.salvemundi.nl/register" method="post">
        <SaMuGrid minWidth="300px" style="gap: 40px; 50px;">
            <div class="register-form general-information">
                <SaMuBadge text="1" title="Algemene info" />
                <div class="register-form__body">
                    <SaMuInput placeholder="Voornaam" type="text" :value="firstName"/>
                    <SaMuInput placeholder="Achternaam" type="text" :value="lastName"/>
                    <SaMuInput placeholder="Geboortedatum (dd-mm-jjjj)" type="text"/>
                    <SaMuInput placeholder="Straat en huisnummer" type="text"/>
                    <SaMuInput placeholder="Woonplaats" type="text"/>
                    <SaMuInput placeholder="Postcode" type="text"/>
                </div>
            </div>
            <div class="register-form digital-information">
                <SaMuBadge text="2" title="Digitale gegevens" />
                <div class="register-form__body">
                    <SaMuInput placeholder="PCN" type="number" :value="pcn"/>
                    <SaMuInput placeholder="Telefoon nummer" type="text"/>
                    <SaMuInput placeholder="E-mailadres" type="text" :value="email"/>
                    <SaMuInput placeholder="Bevestig je e-mailadres" type="text" :value="email"/>
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

@Component({
    components: {
        SaMuButton,
        SaMuInput,
        SaMuBadge,
        SaMuGrid,
    },
})
export default class Register extends Vue {

    public firstName: string = '';
    public lastName: string = '';
    public email: string = '';
    public pcn: string = '';

    constructor() {
        super();

        if (this.$route.query.code) {
            
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