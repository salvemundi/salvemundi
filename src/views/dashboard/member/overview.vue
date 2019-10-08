<template scoped>
    <div class="member-overview">
        <b-container>
          <b-row>
            <b-col>
              <SaMuHeader style="text-align: left;">{{$t('title')}}</SaMuHeader>
              <b-table sticky-header="100%" striped :items="getData" :fields="fields">
                <template v-slot:cell(link)="row">
                  <SaMuLink :to="'member/' + row.item.id.toString()">{{$t('table.details')}}</SaMuLink>
                </template>

                <template v-slot:head(pcn)="data">{{$t('table.pcn')}}</template>
                <template v-slot:head(firstName)="data">{{$t('table.first_name')}}</template>
                <template v-slot:head(lastName)="data">{{$t('table.first_name')}}</template>
                <template v-slot:head(memberTill)="data">{{$t('table.memberTill')}}</template>
                <template v-slot:head(link)="data"></template>
              </b-table>
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
import { SummaryUserDto } from '../../../openapi/model/summaryUserDto';
import moment from 'moment';

@Component({
  components: {
    SaMuButton,
    SaMuHeader,
    SaMuLink,
  },
})
export default class MemberOverview extends Vue {
  private userService: UserService = openApiContainer.get<UserService>('UserService');

  private items: SummaryUserDto[] = [];
  private fields = [
    { key: 'pcn', sortable: true },
    { key: 'firstName', sortable: true },
    { key: 'lastName', sortable: true },
    { key: 'memberTill', sortable: true },
    { key: 'link' },
  ];

  private getData(ctx: any, callback: any) {
    if (this.items.length === 0) {
      this.userService.userGet(1000, 0).subscribe((res: any[]) => {
        res.forEach((user: any) => {
          if (new Date(user.memberTill) < new Date()) {
            user._rowVariant = 'danger';
          }

          if (new Date(user.memberTill).getTime() === new Date(0).getTime()) {
            user.memberTill = this.$t('table.not_paid').toString();

          } else {
            user.memberTill = moment(user.memberTill).format(this.$t('table.formatDate').toString());
          }
        });

        this.items = res;
        callback(res);
      });

    } else {
      this.items.sort((a: any, b: any) => a[ctx.sortBy].localeCompare(b[ctx.sortBy]));

      if (ctx.sortDesc) {
        this.items.reverse();
      }

      callback(this.items);
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

<i18n src="@/lang/dashboard/member/overview.json"></i18n>