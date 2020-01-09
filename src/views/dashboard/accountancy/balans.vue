<template scoped>
  <div>
    <AccountancyHeader/>
    <b-container>
        <b-row>
            <b-col lg="4">
                <b-card :title="$t('filter.title')">
                    <b-card-text>
                        <SaMuInput type="text" v-model="nameFilter" :placeholder="$t('filter.name')"/>
                        <div>{{$t('filter.date')}}</div>
                        <SaMuInput type="date" v-model="dateFilter"/>
                        <b-button variant="samu" v-on:click="refreshTable" class="set-filter">{{$t('filter.action')}}</b-button>
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col lg="8">
                <SaMuHeader style="text-align: left;">{{$t('title')}}</SaMuHeader>
                <b-table sticky-header="100%" striped :items="getData" :fields="fields" ref="balance-table">
                    <template v-slot:cell(assets)="row">
                    {{row.item.assets ? '€' + row.item.assets.toFixed(2) : undefined}}
                    </template>
                    <template v-slot:cell(liabilities)="row">
                    {{row.item.liabilities ? '€' + row.item.liabilities.toFixed(2) : undefined}}
                    </template>

                    <template v-slot:head(name)="data">{{$t('table.name')}}</template>
                    <template v-slot:head(assets)="data">{{$t('table.assets')}}</template>
                    <template v-slot:head(liabilities)="data">{{$t('table.liabilities')}}</template>
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
import { BalanceDTO } from '../../../openapi/model/balanceDTO';
import SaMuInput from '@/components/basic/SaMuInput.vue';
import moment from 'moment';

@Component({
  components: {
    AccountancyHeader,
    SaMuHeader,
    SaMuInput,
  },
})
export default class AccountancyBalance extends Vue {
    private accountancyService: AccountancyService = openApiContainer.get<AccountancyService>('AccountancyService');

    private dateFilter = moment().format('YYYY-MM-DD');
    private nameFilter = '';
    private needData = true;

    private items: BalanceDTO[] = [];
    private fields = [
        { key: 'code', sortable: true },
        { key: 'name', sortable: true },
        { key: 'assets', sortable: true },
        { key: 'liabilities', sortable: true },
    ];

    private getData(ctx: any, callback: any) {
        if (this.items.length === 0 || this.needData) {
            this.accountancyService.getBalance(this.dateFilter, this.nameFilter, 'response').subscribe((res: HttpResponse<BalanceDTO[]>) => {
                const totalAssets = res.response.reduce((a, b) => a + (b.assets || 0), 0);
                const totalLiabilities = res.response.reduce((a, b) => a + (b.liabilities || 0), 0);

                const totalAssetsOrLiabilities: BalanceDTO = {
                    id: 0,
                    code: undefined,
                    name: this.$t('table.balance').toString(),
                    assets: (totalAssets - totalLiabilities) < 0 ? (totalAssets - totalLiabilities) : undefined,
                    liabilities: (totalAssets - totalLiabilities) >= 0 ? (totalAssets - totalLiabilities) : undefined,
                    startAssets: 0,
                    startLiabilities: 0,
                };
                const total: BalanceDTO = {
                    id: 0,
                    code: undefined,
                    name: '',
                    assets: Math.max(totalAssets, totalLiabilities),
                    liabilities: Math.max(totalAssets, totalLiabilities),
                    startAssets: 0,
                    startLiabilities: 0,
                };

                res.response.push(totalAssetsOrLiabilities);
                res.response.push(total);

                this.items = res.response;
                this.needData = false;
                callback(res.response);
            }, (err: HttpResponse) => {
                if (err.status === 418) {
                    Vue.toasted.show(this.$t('error.api_not_activated').toString() + ' <a href="/dashboard/accountancy/activate">' + this.$t('error.api_not_activated_link_text').toString() + '</a>', {duration: 10000, type: 'error'});
                } else {
                    Vue.toasted.show(this.$t('error.unknown').toString(), {duration: 5000, type: 'error'});
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

    private refreshTable() {
        this.needData = true;
        (this.$refs['balance-table'] as any).refresh();
    }
}
</script>
<style lang="scss">

</style>

<i18n src="@/lang/dashboard/accountancy/balance.json"></i18n>