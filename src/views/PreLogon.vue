<template>
    <div class="preLogon">
        <div class="center">
            <SaMuGrid minWidth="400px">
                <div class="login">
                    <SaMuHeader text="Inloggen"></SaMuHeader>
                    <div class="text">Ben je al lid van Salve Mundi?<br>Klik dan op de knop hier beneden om in te loggen!</div>
                    <img src="@/assets/images/login.svg"/>
                    <div>
                        <SaMuButton to="login">Inloggen</SaMuButton>
                    </div>
                </div>
                <div class="registerform">
                    <SaMuHeader text="Registreren"></SaMuHeader>
                    <div class="text">Ben je nog geen lid van Salve Mundi?<br>Klik dan op de knop hier beneden om je te registreren!</div>
                    <img src="@/assets/images/register.svg"/>
                    <div>
                        <SaMuButton to="https://identity.fhict.nl/connect/authorize?client_id=i407624-salvemundi2&scope=fhict_personal&response_type=code&redirect_uri=https://salvemundi.nl/callback" className="FHICT">Registreren via FHICT</SaMuButton>
                        <SaMuButton to="/register">Registreren als <br>Vriend van de vereniging</SaMuButton>
                    </div>
                </div>
            </SaMuGrid>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SaMuButton from '@/components/basic/SaMuButton.vue';
import SaMuHeader from '@/components/basic/SaMuHeader.vue';
import SaMuGrid from '@/components/basic/SaMuGrid.vue';

@Component({
  components: {
    SaMuButton,
    SaMuHeader,
    SaMuGrid,
  },
})
export default class PreLogon extends Vue {}
</script>
<style lang="scss">
.preLogon {
    height: calc(100vh - 177px);

    & .center {
        width: 85%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);

        & .text {
            text-align: center;
            width: 100%;
            font-size: 13px;
        }

        & .login {
            text-align: center;
        }

        & .registerform {
            text-align: center;

            & .FHICT {
                margin-right: 10px;
            }
        }

        & img {
            margin-top: 30px;
            margin-bottom: 20px;
            height: 100px;
        }
    }
}
</style>