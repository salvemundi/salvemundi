<template scoped>
    <div class="member-details">
        <div class="member-details-avatar">
            <SaMuAvatar v-if="user.id != 0" :image="url + '/user/' + user.id + '/photo'" alt="avatar"/>
            <b-button variant="samu" size='small' class="edit-btn" v-on:click="toggle">{{!editMode ? 'Bewerken' : 'Opslaan'}}</b-button>
        </div>
        <b-container class="member-details-information">
            <b-row>
                <b-col md="6">
                    <SaMuHeader>{{$t('general_information.title')}}</SaMuHeader>
                    <table>
                        <tr>
                            <td><b>{{$t('general_information.first_name')}}</b></td>
                            <td><b>{{$t('general_information.last_name')}}</b></td>
                        </tr>
                        <tr>
                            <td><SaMuInput type="text" v-model="user.firstName" :disabled="!editMode"/></td>
                            <td><SaMuInput type="text" v-model="user.lastName" :disabled="!editMode"/></td>
                        </tr>
                        <tr>
                            <td><b>{{$t('general_information.birthday')}}</b></td>
                            <td><b>{{$t('general_information.registered_since')}}</b></td>
                            
                        </tr>
                        <tr>
                            <td><SaMuInput type="date" v-model="user.birthday" :disabled="!editMode"/></td>
                            <td><SaMuInput type="date" v-model="user.registeredSince" disabled/></td>
                        </tr>
                        <tr>
                            <td><b>{{$t('general_information.address')}}</b></td>
                            <td><b>{{$t('general_information.city')}}</b></td>
                        </tr>
                        <tr>
                            <td><SaMuInput type="text" v-model="user.address" :disabled="!editMode"/></td>
                            <td><SaMuInput type="text" v-model="user.city" :disabled="!editMode"/></td>
                        </tr>
                        <tr>
                            <td><b>{{$t('general_information.postalcode')}}</b></td>
                            <td><b>{{$t('general_information.country')}}</b></td>
                        </tr>
                        <tr>
                            <td><SaMuInput type="text" v-model="user.postalcode" :disabled="!editMode"/></td>
                            <td><SaMuInput type="text" v-model="user.country" :disabled="!editMode"/></td>
                        </tr>
                    </table>
                </b-col>
                <b-col md="6">
                    <SaMuHeader>{{$t('digital_information.title')}}</SaMuHeader>
                    <table>
                        <tr>
                            <td><b>{{$t('digital_information.pcn')}}</b></td>
                            <td><b>{{$t('digital_information.email')}}</b></td>
                        </tr>
                        <tr>
                            <td><SaMuInput type="text" v-model="user.pcn" :disabled="!editMode"/></td>
                            <td><SaMuInput type="email" v-model="user.email" :disabled="!editMode"/></td>
                        </tr>
                        <tr>
                            <td><b>{{$t('digital_information.phonenumber')}}</b></td>
                        </tr>
                        <tr>
                            <td><SaMuInput type="tel" v-model="user.phoneNumber" :disabled="!editMode"/></td>
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
import SaMuAvatar from '@/components/basic/SaMuAvatar.vue';
import { UserService } from '../../openapi/api/user.service';
import openApiContainer from '@/openApiContainer';
import moment from 'moment';
import { User } from '../../openapi/model/user';
import { UpdateUserDto } from '../../openapi/model/updateUserDto';
import HttpResponse from '@/openapi/HttpResponse';

@Component({
  components: {
    SaMuInput,
    SaMuHeader,
    SaMuAvatar,
  },
})
export default class Me extends Vue {

    public user: User = {
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
        activated: false,
        profilePicture: '',
        memberships: [],
        transactions: [],
    };

    private readonly url: string = process.env.VUE_APP_API_URL;
    private editMode = false;
    private userService: UserService = openApiContainer.get<UserService>('UserService');

    private mounted() {
        this.userService.userReadMe('response').subscribe((res: HttpResponse<User>) => {
            const me: User = res.response as User;
            me.registeredSince = moment(me.registeredSince).format('YYYY-MM-DD');
            me.birthday = moment(me.birthday).format('YYYY-MM-DD');

            this.user = me;
        }, (err: HttpResponse) => {
            if (err.status === 400) {
                Vue.toasted.show(this.$t('action.form_not_filled_in_correctly').toString(), {duration: 5000, type: 'error'});

            } else {
                Vue.toasted.show(this.$t('action.unknown').toString(), {duration: 5000, type: 'error'});
            }
        });
    }

    private toggle() {
        this.editMode = !this.editMode;

        if (!this.editMode) {
            // Making a hardcopy of the object to prevent updating date values
            const userUpdate: UpdateUserDto = JSON.parse(JSON.stringify(this.user)) as UpdateUserDto;
            userUpdate.birthday = moment(userUpdate.birthday, 'YYYY-MM-DD').toDate().toString();

            this.userService.userUpdateMe(userUpdate, 'response').subscribe(
            (res: HttpResponse<User>) => {
                res.response.registeredSince = moment(res.response.registeredSince).format('YYYY-MM-DD');
                res.response.birthday = moment(res.response.birthday).format('YYYY-MM-DD');

                this.user = res.response;
                Vue.toasted.show(this.$t('action.success').toString(), {duration: 5000, type: 'success'});
            }, (err: HttpResponse) => {
                if (err.status === 400) {
                    Vue.toasted.show(this.$t('action.form_not_filled_in_correctly').toString(), {duration: 5000, type: 'error'});

                } else {
                    Vue.toasted.show(this.$t('action.unknown').toString(), {duration: 5000, type: 'error'});
                }
            });
        }
    }

}
</script>
<style lang="scss" scoped>
.member-details {
    &-avatar {
        padding-top: 30px;
        width: 100%;
        text-align: center;

        .edit-btn {
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