<template scoped>
    <div class="preLogon">
        <div class="center">
            <b-container>
                <b-row style="width: 100%;">
                    <b-col sm="6">
                        <div class="login">
                            <SaMuHeader text="Inloggen"></SaMuHeader>
                            <div class="text">Ben je al lid van Salve Mundi?<br>Klik dan op de knop hier beneden om in te loggen!</div>
                            <img src="@/assets/images/login.svg"/>
                            <div>
                                <SaMuButton to="login">Inloggen</SaMuButton>
                            </div>
                        </div>
                    </b-col>
                    <b-col sm="6">
                        <div class="registerform">
                            <SaMuHeader text="Registreren"></SaMuHeader>
                            <div class="text">Ben je nog geen lid van Salve Mundi?<br>Klik dan op de knop hier beneden om je te registreren!</div>
                            <img src="@/assets/images/register.svg"/>
                            <div>
                                <SaMuButton to="https://identity.fhict.nl/connect/authorize?client_id=i407624-salvemundi2&scope=fhict_personal&response_type=code&redirect_uri=https://salvemundi.nl/callback" class="FHICT">Als lid</SaMuButton>
                                <SaMuButton to="/register">Als Vriend van de vereniging</SaMuButton>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import SaMuButton from '@/components/basic/SaMuButton.vue';
import SaMuHeader from '@/components/basic/SaMuHeader.vue';

@Component({
  components: {
    SaMuButton,
    SaMuHeader,
  },
})
export default class PreLogon extends Vue {}
</script>
<style lang="scss" scoped>
.preLogon {
    height: calc(100vh - 177px);

    & .center {
        width: 100%;
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