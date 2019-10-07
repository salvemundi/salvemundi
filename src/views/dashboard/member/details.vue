<template scoped>
    <div class="member-details">
        <div class="member-details-avatar">
            <SaMuAvatar :image="require('@/assets/images/background.jpg')" alt="avatar"/>
            <SaMuButton size='small' :click="toggle">Bewerken</SaMuButton>
        </div>
        <b-container class="member-details-information">
            <b-row>
                <b-col md="6">
                    <SaMuHeader>Algemene info</SaMuHeader>
                    <table>
                        <tr>
                            <td><b>Voornaam</b></td>
                            <td><b>Adres</b></td>
                        </tr>
                        <tr>
                            <td><SaMuInput type="text" v-model="user.firstName" :disabled="!editMode"/></td>
                            <td><SaMuInput type="text" v-model="user.address" :disabled="!editMode"/></td>
                        </tr>
                        <tr>
                            <td><b>Achternaam</b></td>
                            <td><b>Woonplaats</b></td>
                        </tr>
                        <tr>
                            <td><SaMuInput type="text" v-model="user.lastName" :disabled="!editMode"/></td>
                            <td><SaMuInput type="text" v-model="user.city" :disabled="!editMode"/></td>
                        </tr>
                        <tr>
                            <td><b>Geboortedatum</b></td>
                            <td><b>Postcode</b></td>
                        </tr>
                        <tr>
                            <td><SaMuInput type="text" v-model="user.birthday" :disabled="!editMode"/></td>
                            <td><SaMuInput type="text" v-model="user.postalcode" :disabled="!editMode"/></td>
                        </tr>
                    </table>
                </b-col>
                <b-col md="6">
                    <SaMuHeader>Digitale gegevens</SaMuHeader>
                    <table>
                        <tr>
                            <td><b>Pcn</b></td>
                            <td><b>Email</b></td>
                        </tr>
                        <tr>
                            <td><SaMuInput type="text" v-model="user.pcn" :disabled="!editMode"/></td>
                            <td><SaMuInput type="text" v-model="user.email" :disabled="!editMode"/></td>
                        </tr>
                        <tr>
                            <td><b>Telefoonnummer</b></td>
                            <td><b>Geregistreerd sinds</b></td>
                        </tr>
                        <tr>
                            <td><SaMuInput type="text" v-model="user.phoneNumber" :disabled="!editMode"/></td>
                            <td><SaMuInput type="text" v-model="user.registeredSince" :disabled="!editMode"/></td>
                        </tr>
                    </table>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import SaMuInput from '@/components/basic/SaMuInput.vue';
import SaMuHeader from '@/components/basic/SaMuHeader.vue';
import SaMuButton from '@/components/basic/SaMuButton.vue';
import SaMuAvatar from '@/components/basic/SaMuAvatar.vue';
import { UserService } from '../../../openapi/api/user.service';
import openApiContainer from '@/openApiContainer';
import moment from 'moment';
import { User } from '../../../openapi/model/user';

@Component({
  components: {
    SaMuInput,
    SaMuHeader,
    SaMuButton,
    SaMuAvatar,
  },
})
export default class MemberDetails extends Vue {

    private user: User = {
        id: 0,
        firstName: '',
        lastName: '',
        birthday: '',
        address: '',
        postalcode: '',
        city: '',
        country: '',
        phoneNumber: '',
        email: '',
        registeredSince: '',
        pcn: '',
        scopes: [],
    };
    private editMode = false;

    private userService: UserService = openApiContainer.get<UserService>('UserService');

    mounted() {
        this.userService.userIdGet(+this.$route.params.id).subscribe((res: User) => {
            res.registeredSince = moment(res.registeredSince).format('D-MM-YYYY');
            res.birthday = moment(res.birthday).format('D-MM-YYYY');
            this.user = res;
        })
    }

    private toggle() {
        this.editMode = !this.editMode;
    }

}
</script>
<style lang="scss" scoped>
.member-details {
    &-avatar {
        padding-top: 30px;
        width: 100vw;
        text-align: center;

        .SaMuButton {
            position: absolute;
            top: 135px;
            right: 30px;
        }
    }

    &-information {
        margin-top: 30px;
        margin-bottom: 50px;

        table {
            width: 100%;

            .SaMuInput {
                width: 90%;
            }
        }
    }
}
</style>

<i18n src="@/lang/dashboard/member/details.json"></i18n>