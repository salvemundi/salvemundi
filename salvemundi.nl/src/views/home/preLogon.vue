<template scoped>
    <div class="preLogon">
        <div class="center">
            <b-container fluid>
                <b-row>
                    <b-col sm="6">
                        <div class="login">
                            <SaMuHeader>{{$t('login.title')}}</SaMuHeader>
                            <div class="text" v-html="$t('login.description')"></div>
                            <img src="@/assets/images/login.svg"/>
                            <div>
                                <b-button variant="samu" to="/home/login">{{$t('login.action')}}</b-button>
                            </div>
                        </div>
                    </b-col>
                    <b-col sm="6">
                        <div class="registerform">
                            <SaMuHeader>{{$t('register.title')}}</SaMuHeader>
                            <div class="text" v-html="$t('register.description')"></div>
                            <img src="@/assets/images/register.svg"/>
                            <div>
                                <!-- <b-button variant="samu" href="https://identity.fhict.nl/connect/authorize?client_id=i407624-salvemundi2&scope=fhict_personal&response_type=code&redirect_uri=https://salvemundi.nl/callback" class="FHICT">{{$t('register.action_as_member')}}</b-button> -->
                                <b-button variant="samu" to="/home/register">{{$t('register.action_as_member')}}</b-button>
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
import SaMuHeader from '@/components/basic/SaMuHeader.vue';

@Component({
  components: {
    SaMuHeader,
  },
})
export default class PreLogon extends Vue {}
</script>
<style lang="scss" scoped>
.preLogon {
    & .center {
        width: 100%;

        @media screen and (min-width: 576px) {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
        }

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
                margin-bottom: 10px;
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

<i18n src="@/lang/PreLogon.json"></i18n>