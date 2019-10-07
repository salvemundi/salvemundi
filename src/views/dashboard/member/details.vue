<template scoped>
    <div class="member-details">
        <div class="member-details-avatar">
            <img src="@/assets/images/background.jpg"/>
        </div>
        <b-container class="member-details-information">
            <b-row>
                <b-col sm="6">
                    <SaMuHeader>Algemene info</SaMuHeader>
                </b-col>
                <b-col sm="6">
                    <SaMuHeader>Digitale gegevens</SaMuHeader>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import SaMuButton from '@/components/basic/SaMuButton.vue';
import SaMuHeader from '@/components/basic/SaMuHeader.vue';
import SaMuLink from '@/components/basic/SaMuLink.vue';
import { UserService } from '../../../openapi/api/user.service';
import openApiContainer from '@/openApiContainer';
import moment from 'moment';

@Component({
  components: {
    SaMuButton,
    SaMuHeader,
    SaMuLink,
  },
})
export default class MemberDetails extends Vue {
  private userService: UserService = openApiContainer.get<UserService>('UserService');

}
</script>
<style lang="scss" scoped>
.member-details {
    &-avatar {
        padding-top: 30px;
        width: 100vw;
        text-align: center;

        img {
            width: 150px;
            height: 150px;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    &-information {
        margin-top: 30px;
    }
}
</style>

<i18n src="@/lang/dashboard/member/details.json"></i18n>