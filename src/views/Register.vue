<template>
  <div class="register">
      <form>
        <div class="register-form general-information">
            <SaMuBadge text="1" title="Algemene info" />
            <div class="register-form__body">
                <SaMuInput placeholder="Voornaam" type="text"/>
                <SaMuInput placeholder="Achternaam" type="text"/>
                <SaMuInput placeholder="Geboortedatum (dd-mm-jjjj)" type="text"/>
                <SaMuInput placeholder="Straat en huisnummer" type="text"/>
                <SaMuInput placeholder="Woonplaats" type="text"/>
                <SaMuInput placeholder="Postcode" type="text"/>
            </div>
        </div>
        <div class="register__border"></div>
        <div class="register-form digital-information">
            <SaMuBadge text="2" title="Digitale gegevens" />
            <div class="register-form__body">
                <SaMuInput placeholder="PCN" type="number"/>
                <SaMuInput placeholder="Telefoon nummer" type="text"/>
                <SaMuInput placeholder="E-mailadres" type="text"/>
                <SaMuInput placeholder="Bevestig je e-mailadres" type="text"/>
                <SaMuButton text="Versturen!" size="small"/>
            </div>
        </div>
      </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SaMuButton from '@/components/basic/SaMuButton.vue';
import SaMuInput from '@/components/basic/SaMuInput.vue';
import SaMuBadge from '@/components/basic/SaMuBadge.vue';

@Component({
    components: {
        SaMuButton,
        SaMuInput,
        SaMuBadge,
    },
})
export default class Register extends Vue {}
</script>
<style lang="scss">
.register {
    height: calc(100vh - 177px);

    form {
        width: 60%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: grid;
        grid-column-gap: 40px;
        grid-row-gap: 40px;
        grid-template-columns: 1fr 1px 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
            "general line digital";

        @media screen and (max-width: 1000px) {
            width: 90%;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            grid-template-areas:
                "general"
                "digital";

            &-form.general-information {
                justify-self: center !important;
                border: none !important;
            }

            &-form.digital-information {
                justify-self: center !important;
            }
        }
    }

    &-form.general-information {
        grid-area: general;

        .register-form__body {
            margin-top: 18px;
            width: 75%;
        }
    }

    &__border {
        grid-area: line;
        width: 0px;
        border: 0.5px #e2e2e2 solid;
    }

    &-form.digital-information {
        grid-area: digital;
        justify-self: end;

        .register-form__body {
            margin-top: 18px;
            width: 75%;
            text-align: right;
        }
    }
}
</style>