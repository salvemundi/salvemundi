<template>
  <div class="register">
      <div class="center">
        <div class="generalInformation">
            <SaMuBadge text="1" title="Algemene info" />
            <div class="form">
                <SaMuInput placeholder="Voornaam" type="text"/>
                <SaMuInput placeholder="Achternaam" type="text"/>
                <SaMuInput placeholder="Geboortedatum (dd-mm-jjjj)" type="text"/>
                <SaMuInput placeholder="Straat en huisnummer" type="text"/>
                <SaMuInput placeholder="Woonplaats" type="text"/>
                <SaMuInput placeholder="Postcode" type="text"/>
            </div>
        </div>
        <div class="digitalInformation">
            <SaMuBadge text="2" title="Digitale gegevens" />
            <div class="form">
                <SaMuInput placeholder="PCN" type="text"/>
                <SaMuInput placeholder="Telefoon nummer" type="text"/>
                <SaMuInput placeholder="E-mailadres" type="text"/>
                <SaMuInput placeholder="Bevestig je e-mailadres" type="text"/>
                <SaMuButton text="Versturen!" size="small"/>
            </div>
        </div>
      </div>
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

    & .center {
        width: 60%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);

        .generalInformation {
            width: 50%;
            float: left;
            border-right: 1px #E2E2E2 solid;

            & .form {
                margin-top: 18px;
                width: 300px;
            }
        }

        .digitalInformation {
            float: right;

            & .form {
                margin-top: 18px;
                width: 300px;
                text-align: right;
            }
        }
    }
}
</style>