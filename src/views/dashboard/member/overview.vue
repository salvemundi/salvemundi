<template scoped>
    <div class="member-overview">
        <b-container fluid>
          <b-row>
            <b-col>
              <SaMuHeader style="text-align: left;">Ledenadministratie</SaMuHeader>
              <b-table sticky-header striped :items="getData" :fields="fields"></b-table>
            </b-col>
          </b-row>
        </b-container>
    </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import SaMuButton from '@/components/basic/SaMuButton.vue';
import SaMuHeader from '@/components/basic/SaMuHeader.vue';
import { UserService } from '../../../openapi/api/user.service';
import openApiContainer from '@/openApiContainer';
import { SummaryUserDto } from '../../../openapi/model/summaryUserDto';

@Component({
  components: {
    SaMuButton,
    SaMuHeader,
  },
})
export default class MemberOverview extends Vue {
  private userService: UserService = openApiContainer.get<UserService>('UserService');

  private fields: string[] = ['pcn', 'name', 'memberTill'];
  private getData(ctx: any, callback: any) {
    this.userService.userGet(1000, 0).subscribe((res: SummaryUserDto[]) => {
      callback(res);
    });
  }
}
</script>
<style lang="scss" scoped>

</style>

<i18n src="@/lang/administration/member/overview.json"></i18n>