<template scoped>
  <div>
    <AccountancyHeader/>
    <b-container>
        <b-row align-h="center">
            <b-col md="6" class="add-mutation-form">
              <SaMuHeader style="text-align: left;">{{$t('title')}}</SaMuHeader>
              <b-form-group :label="$t('form.date')" style="margin-bottom: 8px">
                <SaMuInput v-model="dto.date" type="date" id="add-mutation-form__date"/>
              </b-form-group>
              <SaMuInput v-model="dto.description" type="text" :placeholder="$t('form.description')" id="add-mutation-form__description"/>
              <SaMuInput v-model="dto.debtorIban" type="text" :placeholder="$t('form.iban')" id="add-mutation-form__iban"/>
              <SaMuInput v-model="dto.entryReference" type="number" :placeholder="$t('form.entry')" id="add-mutation-form__entry"/>
              <b-form-group :label="$t('form.amount')">
                <SaMuInput v-model="dto.amount" type="number" id="add-mutation-form__amount"/>
              </b-form-group>
              <b-form-group :label="$t('form.payment_method')">
                <b-form-select v-model="dto.paymentMethodId" :options="paymentMethodOptions" id="add-mutation-form__payment-method"></b-form-select>
              </b-form-group>
              <b-form-group :label="$t('form.income_statement')">
                <b-form-select v-model="dto.incomeStatementId" :options="incomeStatementOptions" id="add-mutation-form__income-statement"></b-form-select>
              </b-form-group>
              <b-button variant="samu" v-on:click="addMutation" style="float: right; margin-bottom: 1rem" id="add-mutation-form__submit">{{$t('form.action')}}</b-button>
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
import { BalanceDTO } from '../../../openapi/model/balanceDTO';
import { AddMutationDTO } from '../../../openapi/model/addMutationDTO';
import { Mutation } from '../../../openapi/model/mutation';
import { AccountancyService } from '../../../openapi/api/accountancy.service';
import openApiContainer from '@/openApiContainer';
import HttpResponse from '../../../openapi/HttpResponse';
import SaMuInput from '@/components/basic/SaMuInput.vue';
import moment from 'moment';

@Component({
  components: {
    AccountancyHeader,
    SaMuHeader,
    SaMuInput,
  },
})
export default class MutationAccountancy extends Vue {
    private accountancyService: AccountancyService = openApiContainer.get<AccountancyService>('AccountancyService');

    private paymentMethodOptions: Array<{value: number, text: string}> = [];
    private incomeStatementOptions: Array<{value: number, text: string}> = [];
    private dto: AddMutationDTO = {
      date: moment().format('YYYY-MM-DD'),
      description: '',
      entryReference: undefined,
      amount: 0,
      debtorIban: '',
      paymentMethodId: 0,
      incomeStatementId: 0,
    };

    constructor() {
        super();

        this.accountancyService.getBalance(moment().format('YYYY-MM-DD'), '', 'response').subscribe((res: HttpResponse<BalanceDTO[]>) => {
            for (const balance of res.response) {
                this.paymentMethodOptions.push({ value: balance.id, text: balance.name + ' - ' + balance.code });
            }
        }, (err: HttpResponse) => {
          if (err.status === 418) {
              Vue.toasted.show(this.$t('error.api_not_activated').toString() + ' <a href="/dashboard/accountancy/activate">' + this.$t('error.api_not_activated_link_text').toString() + '</a>', {duration: 10000, type: 'error'});
          } else {
            Vue.toasted.show(this.$t('error.unknown').toString(), {duration: 5000, type: 'error'});
          }
        });

        this.accountancyService.getIncomeStatements(moment().format('YYYY-MM-DD'), '', 'response').subscribe((res: HttpResponse<IncomeStatementDTO[]>) => {
            for (const incomeStatement of res.response) {
                this.incomeStatementOptions.push({ value: incomeStatement.id, text: incomeStatement.name + ' - ' + incomeStatement.code });
            }
        }, (err: HttpResponse) => {
          if (err.status === 418) {
              Vue.toasted.show(this.$t('error.api_not_activated').toString() + ' <a href="/dashboard/accountancy/activate">' + this.$t('error.api_not_activated_link_text').toString() + '</a>', {duration: 10000, type: 'error'});
          } else {
            Vue.toasted.show(this.$t('error.unknown').toString(), {duration: 5000, type: 'error'});
          }
        });
    }

    private addMutation() {
      this.accountancyService.addMutation(this.dto, 'response').subscribe((res: HttpResponse<Mutation>) => {
        this.dto = {
          date: moment().format('YYYY-MM-DD'),
          description: '',
          entryReference: undefined,
          amount: 0,
          debtorIban: '',
          paymentMethodId: 0,
          incomeStatementId: 0,
        };

        Vue.toasted.show(this.$t('form.succes').toString(), {duration: 2000, type: 'success'});
      }, (err: HttpResponse) => {
        if (err.status === 400) {
          Vue.toasted.show(this.$t('error.form_not_filled_correctly').toString(), {duration: 5000, type: 'error'});
        } else if (err.status === 418) {
          Vue.toasted.show(this.$t('error.api_not_activated').toString() + ' <a href="/dashboard/accountancy/activate">' + this.$t('error.api_not_activated_link_text').toString() + '</a>', {duration: 10000, type: 'error'});
        } else {
          Vue.toasted.show(this.$t('error.unknown').toString(), {duration: 5000, type: 'error'});
        }
      });
    }
}
</script>
<style lang="scss">
</style>

<i18n src="@/lang/dashboard/accountancy/addMutation.json"></i18n>