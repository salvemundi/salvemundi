<template scoped>
  <div>
    <AccountancyHeader/>
    <b-container>
        <b-row>
        <b-col>
            <SaMuHeader style="text-align: left;">{{$t('title')}}</SaMuHeader>
            <b-table sticky-header="100%" striped :items="getData" :fields="fields" ref="import-table">
                <template v-slot:cell(date)="row">
                  {{moment(row.item.date).format('DD-MM-YYYY hh:mm.ss')}}
                </template>

                <template v-slot:cell(amount)="row">
                  {{'€' + row.item.amount.toFixed(2)}}
                </template>
                
                <template v-slot:cell(import)="row">
                  <b-button variant="link" v-on:click="showModal(row.item.id)">{{$t('table.import')}}</b-button>
                </template>
                
                <template v-slot:head(debtorIban)="data">{{$t('table.debtorIban')}}</template>
                <template v-slot:head(description)="data">{{$t('table.description')}}</template>
                <template v-slot:head(date)="data">{{$t('table.date')}}</template>
                <template v-slot:head(amount)="data">{{$t('table.amount')}}</template>
                <template v-slot:head(import)="data"></template>
            </b-table>
        </b-col>
        </b-row>
    </b-container>

    <b-modal ref="import-modal" id="import-modal" centered @ok="importMutation" :title="$t('modal.title')">
        <template v-slot:default="{ }">
            <b-form-group :label="$t('modal.payment_method')" label-for="input-paymentMethod">
                <b-form-select v-model="paymentMethodSelected" :options="paymentMethodOptions" autofocus id="input-paymentMethod"></b-form-select>
            </b-form-group>
            <b-form-group :label="$t('modal.income_statement')" label-for="input-incomeStatement">
                <b-form-select v-model="incomeStatementSelected" :options="incomeStatementOptions" id="input-incomeStatement"></b-form-select>
            </b-form-group>
        </template>

        <template v-slot:modal-footer="{ ok, cancel }">
            <b-button size="sm" variant="danger" @click="cancel()">Cancel</b-button>
            <b-button size="sm" variant="samu" @click="ok()">OK</b-button>
        </template>
    </b-modal>
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
import { NotImportedMutationDTO } from '../../../openapi/model/notImportedMutationDTO';
import * as moment from 'moment';
import { ImportMutationDTO } from '../../../openapi/model/importMutationDTO';
import { BalanceDTO } from '../../../openapi/model/balanceDTO';

@Component({
  components: {
    AccountancyHeader,
    SaMuHeader,
  },
})
export default class ImportAccountancy extends Vue {
    private moment = moment;
    private accountancyService: AccountancyService = openApiContainer.get<AccountancyService>('AccountancyService');
    private selectedMutation = 0;
    private paymentMethodSelected: number = 0;
    private incomeStatementSelected: number = 0;
    private paymentMethodOptions: Array<{value: number, text: string}> = [];
    private incomeStatementOptions: Array<{value: number, text: string}> = [];
    private needData = true;

    private items: NotImportedMutationDTO[] = [];
    private fields = [
        { key: 'debtorIban', sortable: true },
        { key: 'description', sortable: true },
        { key: 'date', sortable: true },
        { key: 'amount', sortable: true },
        { key: 'import', sortable: false },
    ];

    constructor() {
        super();

        this.accountancyService.getBalance('response').subscribe((res: HttpResponse<BalanceDTO[]>) => {
            for (const balance of res.response) {
                this.paymentMethodOptions.push({ value: balance.id, text: balance.name + ' - ' + balance.code });
            }
        });

        this.accountancyService.getIncomeStatements('response').subscribe((res: HttpResponse<IncomeStatementDTO[]>) => {
            for (const incomeStatement of res.response) {
                this.incomeStatementOptions.push({ value: incomeStatement.id, text: incomeStatement.name + ' - ' + incomeStatement.code });
            }
        });
    }

    private getData(ctx: any, callback: any) {
        if (this.items.length === 0 || this.needData) {
            this.accountancyService.getNotImportedMutations('response').subscribe((res: HttpResponse<NotImportedMutationDTO[]>) => {
                this.needData = false;
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

    private showModal(id: number) {
        this.selectedMutation = id;
        (this.$refs['import-modal'] as any).show();
    }

    private importMutation() {
        const dto: ImportMutationDTO = {
            paymentMethodId: this.paymentMethodSelected,
            incomeStatementId: this.incomeStatementSelected,
        };
        this.needData = true;

        this.accountancyService.importMutation(this.selectedMutation, dto, 'response').subscribe((res: HttpResponse) => {
            Vue.toasted.show(this.$t('modal.success').toString(), {duration: 5000, type: 'success'});
            (this.$refs['import-table'] as any).refresh();

        }, (res: HttpResponse) => {
            Vue.toasted.show(this.$t('modal.failed').toString(), {duration: 5000, type: 'error'});
        });
    }
}
</script>
<style lang="scss">

</style>

<i18n src="@/lang/dashboard/accountancy/import.json"></i18n>