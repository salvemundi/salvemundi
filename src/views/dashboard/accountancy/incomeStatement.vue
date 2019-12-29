<template scoped>
  <div>
    <AccountancyHeader/>
    <b-container>
        <b-row>
        <b-col>
            <SaMuHeader style="text-align: left;">{{$t('title')}}</SaMuHeader>
            <b-table sticky-header="100%" striped :items="getData" :fields="fields">
                <template v-slot:cell(profit)="row">
                  {{row.item.profit ? '€' + row.item.profit.toFixed(2) : undefined}}
                </template>
                <template v-slot:cell(lost)="row">
                  {{row.item.lost ? '€' + row.item.lost.toFixed(2) : undefined}}
                </template>

                <template v-slot:head(code)="data">{{$t('table.code')}}</template>
                <template v-slot:head(name)="data">{{$t('table.name')}}</template>
                <template v-slot:head(profit)="data">{{$t('table.profit')}}</template>
                <template v-slot:head(lost)="data">{{$t('table.lost')}}</template>
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
import { AccountancyService } from '../../../openapi/api/accountancy.service';
import openApiContainer from '@/openApiContainer';
import HttpResponse from '../../../openapi/HttpResponse';

@Component({
  components: {
    AccountancyHeader,
    SaMuHeader,
  },
})
export default class IncomeStatement extends Vue {
    private accountancyService: AccountancyService = openApiContainer.get<AccountancyService>('AccountancyService');

    private items: IncomeStatementDTO[] = [];
    private fields = [
        { key: 'code', sortable: true },
        { key: 'name', sortable: true },
        { key: 'profit', sortable: true },
        { key: 'lost', sortable: true },
    ];

    private getData(ctx: any, callback: any) {
        if (this.items.length === 0) {
            this.accountancyService.getIncomeStatements('response').subscribe((res: HttpResponse<IncomeStatementDTO[]>) => {
                const totalProfit = res.response.reduce((a, b) => a + (b.profit || 0), 0);
                const totalLost = res.response.reduce((a, b) => a + (b.lost || 0), 0);
                const text = (totalProfit - totalLost) >= 0 ? 'table.profit_text' : 'table.lost_text';

                const totalProfitOrLost: IncomeStatementDTO = {
                    id: 0,
                    name: this.$t(text).toString(),
                    profit: (totalProfit - totalLost) < 0 ? (totalProfit - totalLost) * -1 : undefined,
                    lost: (totalProfit - totalLost) >= 0 ? (totalProfit - totalLost) : undefined,
                };
                const total: IncomeStatementDTO = {
                    id: 0,
                    name: '',
                    profit: Math.max(totalProfit, totalLost),
                    lost: Math.max(totalProfit, totalLost),
                };

                res.response.push(totalProfitOrLost);
                res.response.push(total);
                this.items = res.response;
                callback(res.response);
            }, (err: HttpResponse) => {
                if (err.status === 418) {
                    Vue.toasted.show(this.$t('error.api_not_activated').toString() + ' <a href="/dashboard/accountancy/activate">' + this.$t('error.api_not_activated_link_text').toString() + '</a>', {duration: 10000, type: 'error'});
                }
            });
        } else {
            this.items.sort((a: any, b: any) => {
                // Need to skip last two of the table. Those two have id: 0
                if (a.id === 0) {
                    return 100;
                }

                let reverse = 1;
                if (ctx.sortDesc) {
                    reverse = -1;
                }

                if (typeof a[ctx.sortBy] === 'number') {
                    return (a[ctx.sortBy] - b[ctx.sortBy]) * reverse;
                }

                return String(a[ctx.sortBy]).localeCompare(String(b[ctx.sortBy])) * reverse;
            } );

            callback(this.items);
        }
    }
}
</script>
<style lang="scss">

</style>

<i18n src="@/lang/dashboard/accountancy/incomeStatements.json"></i18n>