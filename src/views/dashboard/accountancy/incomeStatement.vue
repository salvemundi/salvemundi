<template scoped>
  <div>
    <AccountancyHeader/>
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
import AccountancyHeader from '@/components/layout/accountancy/header.vue';
import SaMuHeader from '@/components/basic/SaMuHeader.vue';
import { IncomeStatementDTO } from '../../../openapi/model/incomeStatementDTO';

@Component({
  components: {
    AccountancyHeader,
    SaMuHeader,
  },
})
export default class IncomeStatement extends Vue {
    private items: IncomeStatementDTO[] = [];
    private fields = [
        { key: 'code', sortable: true },
        { key: 'name', sortable: true },
        { key: 'profit', sortable: true },
        { key: 'lost', sortable: true },
    ];

    private getData(ctx: any, callback: any) {
        if (this.items.length === 0) {
        }
    }
}
</script>
<style lang="scss">

</style>

<i18n src="@/lang/dashboard/accountancy/incomeStatements.json"></i18n>