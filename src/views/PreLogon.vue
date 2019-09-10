<template>
    <div class="preLogon">
        <div class="center">
            <div class="login">
                <SaMuHeader text="Inloggen"></SaMuHeader>
                <div class="text">Ben je al lid van Salve Mundi?<br>Klik dan op de knop hier beneden om in te loggen!</div>
                <img src="@/assets/images/login.svg"/>
                <div>
                    <SaMuButton text="Inloggen" to="login"></SaMuButton>
                </div>
            </div>
            <div class="registerform">
                <SaMuHeader text="Registreren"></SaMuHeader>
                <div class="text">Ben je nog geen lid van Salve Mundi?<br>Klik dan op de knop hier beneden om je te registreren!</div>
                <img src="@/assets/images/register.svg"/>
                <div>
                    <SaMuButton text="Registreren via FHICT" to="/register" className="FHICT"></SaMuButton>
                    <SaMuButton text="Registreren" to="/register"></SaMuButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
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
            width: 49%;
            float: left;
            text-align: center;
            border-right: 1px solid #E2E2E2;
        }

        & .registerform {
            width: 49%;
            float: left;
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