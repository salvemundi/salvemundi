<template scoped>
  <div>
    <AccountancyHeader/>
    <b-container>
        <b-row>
            <b-col md="12">
              <SaMuHeader style="text-align: left;">{{$t('title')}}</SaMuHeader>
            </b-col>

            <b-col md="12" class="payment-method">
              <SaMuHeader class="payment-method__title">{{$t('payment_method.title')}}</SaMuHeader>
              <b-table sticky-header="100%" :items="getBalanceData" :fields="balanceFields" ref="balance-table">
                <template v-slot:cell(link)="row">
                  <b-button variant="link" v-on:click="showEditBalanceRowModal(row.item)">{{$t('payment_method.edit')}}</b-button>
                </template>
                
                <template v-slot:head(code)="data">{{$t('payment_method.code')}}</template>
                <template v-slot:head(name)="data">{{$t('payment_method.name')}}</template>
                <template v-slot:head(startAssets)="data">{{$t('payment_method.start_assets')}}</template>
                <template v-slot:head(startLiabilities)="data">{{$t('payment_method.start_liabilities')}}</template>
                <template v-slot:head(link)="data"></template>
              </b-table>
              <div class="payment-method__actions">
                <b-button variant="samu" v-on:click="showAddBalanceRowModal">{{$t('payment_method.add_action')}}</b-button>
              </div>
            </b-col>

            <b-col md="12" class="income-statement">
              <SaMuHeader class="income-statement__title">{{$t('income_statement.title')}}</SaMuHeader>
              <b-table sticky-header="100%" :items="getIncomeStatementData" :fields="incomeStatementFields" ref="income-statement-table">
                <template v-slot:cell(link)="row">
                  <b-button variant="link" v-on:click="openEditIncomeStatementRowModal(row.item)">{{$t('income_statement.edit')}}</b-button>
                </template>
                
                <template v-slot:head(code)="data">{{$t('income_statement.code')}}</template>
                <template v-slot:head(name)="data">{{$t('income_statement.name')}}</template>
                <template v-slot:head(link)="data"></template>
              </b-table>
              <div class="income-statement__actions">
                <b-button variant="samu" v-on:click="showAddIncomeStatementModal">{{$t('income_statement.add_action')}}</b-button>
              </div>
            </b-col>
        </b-row>
    </b-container>

    <b-modal ref="add-balance-modal" id="add-balance-modal" centered @ok="addBalanceRow" :title="$t('payment_method.add_modal_title')">
        <template v-slot:default="{ }">
          <b-form-group :label="$t('payment_method.code')">
            <SaMuInput type="number" v-model="addBalance.code"/>
          </b-form-group>
          <b-form-group :label="$t('payment_method.name')">
            <SaMuInput type="text" v-model="addBalance.name"/>
          </b-form-group>
          <b-form-group :label="$t('payment_method.start_assets')">
            <SaMuInput type="number" v-model="addBalance.startAssets"/>
          </b-form-group>
          <b-form-group :label="$t('payment_method.start_liabilities')">
            <SaMuInput type="number" v-model="addBalance.startLiabilities"/>
          </b-form-group>
        </template>

        <template v-slot:modal-footer="{ ok, cancel }">
            <b-button size="sm" @click="cancel()">Cancel</b-button>
            <b-button size="sm" variant="samu" @click="ok()">OK</b-button>
        </template>
    </b-modal>

    <b-modal ref="add-income-statement-modal" id="add-income-statement-modal" centered @ok="addIncomeStatementRow" :title="$t('income_statement.add_modal_title')">
        <template v-slot:default="{ }">
          <b-form-group :label="$t('income_statement.code')">
            <SaMuInput type="number" v-model="addIncomeStatement.code"/>
          </b-form-group>
          <b-form-group :label="$t('income_statement.name')">
            <SaMuInput type="text" v-model="addIncomeStatement.name"/>
          </b-form-group>
        </template>

        <template v-slot:modal-footer="{ ok, cancel }">
            <b-button size="sm" @click="cancel()">Cancel</b-button>
            <b-button size="sm" variant="samu" @click="ok()">OK</b-button>
        </template>
    </b-modal>

    <b-modal ref="edit-balance-modal" id="edit-balance-modal" centered :title="$t('payment_method.edit_modal_title')">
        <template v-slot:default="{ }">
          <b-form-group :label="$t('payment_method.code')">
            <SaMuInput type="number" v-model="editBalance.code"/>
          </b-form-group>
          <b-form-group :label="$t('payment_method.name')">
            <SaMuInput type="text" v-model="editBalance.name"/>
          </b-form-group>
          <b-form-group :label="$t('payment_method.start_assets')">
            <SaMuInput type="number" v-model="editBalance.startAssets"/>
          </b-form-group>
          <b-form-group :label="$t('payment_method.start_liabilities')">
            <SaMuInput type="number" v-model="editBalance.startLiabilities"/>
          </b-form-group>
        </template>

        <template v-slot:modal-footer="{ cancel }">
          <b-button size="sm" variant="danger" @click="deleteBalanceRow()">Delete</b-button>
            <b-button size="sm" @click="cancel()">Cancel</b-button>
            <b-button size="sm" variant="samu" @click="editBalanceRow()">OK</b-button>
        </template>
    </b-modal>

    <b-modal ref="edit-income-statement-modal" id="edit-income-statement-modal" centered :title="$t('income_statement.edit_modal_title')">
        <template v-slot:default="{ }">
          <b-form-group :label="$t('income_statement.code')">
            <SaMuInput type="number" v-model="editIncomeStatement.code"/>
          </b-form-group>
          <b-form-group :label="$t('income_statement.name')">
            <SaMuInput type="text" v-model="editIncomeStatement.name"/>
          </b-form-group>
        </template>

        <template v-slot:modal-footer="{ cancel }">
          <b-button size="sm" variant="danger" @click="deleteIncomeStatementRow()">Delete</b-button>
            <b-button size="sm" @click="cancel()">Cancel</b-button>
            <b-button size="sm" variant="samu" @click="editIncomeStatementRow()">OK</b-button>
        </template>
    </b-modal>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import AccountancyHeader from '@/components/layout/accountancy/header.vue';
import SaMuHeader from '@/components/basic/SaMuHeader.vue';
import { AccountancyService } from '../../../openapi/api/accountancy.service';
import openApiContainer from '@/openApiContainer';
import HttpResponse from '../../../openapi/HttpResponse';
import SaMuInput from '@/components/basic/SaMuInput.vue';
import moment from 'moment';
import { BalanceDTO } from '../../../openapi/model/balanceDTO';
import { IncomeStatementDTO } from '../../../openapi/model/incomeStatementDTO';
import { AddBalanceDTO } from '../../../openapi/model/addBalanceDTO';
import { PaymentMethod } from '../../../openapi/model/paymentMethod';
import { IncomeStatement } from '../../../openapi/model/incomeStatement';
import { AddIncomeStatementDTO } from '../../../openapi/model/addIncomeStatementDTO';

@Component({
  components: {
    AccountancyHeader,
    SaMuHeader,
    SaMuInput,
  },
})
export default class SettingsAccountancy extends Vue {
  private accountancyService: AccountancyService = openApiContainer.get<AccountancyService>('AccountancyService');

  private needBalanceData = true;
  private balanceItems: BalanceDTO[] = [];
  private balanceFields = [
    { key: 'code', sortable: true },
    { key: 'name', sortable: true },
    { key: 'startAssets', sortable: true },
    { key: 'startLiabilities', sortable: true },
    { key: 'link', sortable: false },
  ];

  private editBalance: BalanceDTO = {
    id: 0,
    code: 0,
    name: '',
    startAssets: 0,
    startLiabilities: 0,
  };
  private addBalance: AddBalanceDTO = {
    code: 0,
    name: '',
    startAssets: 0,
    startLiabilities: 0,
  };

  private needIncomeStatementData = true;
  private incomeStatementItems: IncomeStatementDTO[] = [];
  private incomeStatementFields = [
    { key: 'code', sortable: true },
    { key: 'name', sortable: true },
    { key: 'link', sortable: false },
  ];

  private addIncomeStatement: AddIncomeStatementDTO = {
    name: '',
    code: 0,
  };
  private editIncomeStatement: IncomeStatement = {
    id: 0,
    name: '',
    code: 0,
  };

  private getBalanceData(ctx: any, callback: any) {
    if (this.balanceItems.length === 0 || this.needBalanceData) {
        this.accountancyService.getBalance(moment().format('YYYY-MM-DD'), '', 'response').subscribe((res: HttpResponse<BalanceDTO[]>) => {
            this.balanceItems = res.response;
            this.needBalanceData = false;
            callback(res.response);
        }, (err: HttpResponse) => {
            if (err.status === 418) {
                Vue.toasted.show(this.$t('error.api_not_activated').toString() + ' <a href="/dashboard/accountancy/activate">' + this.$t('error.api_not_activated_link_text').toString() + '</a>', {duration: 10000, type: 'error'});
            } else {
                Vue.toasted.show(this.$t('error.unknown').toString(), {duration: 5000, type: 'error'});
            }
        });
    } else {
        this.balanceItems.sort((a: any, b: any) => {
            let reverse = 1;
            if (ctx.sortDesc) {
                reverse = -1;
            }

            if (typeof a[ctx.sortBy] === 'number') {
                return (a[ctx.sortBy] - b[ctx.sortBy]) * reverse;
            }

            return String(a[ctx.sortBy]).localeCompare(String(b[ctx.sortBy])) * reverse;
        } );

        callback(this.balanceItems);
    }
  }

  private getIncomeStatementData(ctx: any, callback: any) {
    if (this.incomeStatementItems.length === 0 || this.needIncomeStatementData) {
        this.accountancyService.getIncomeStatements(moment().format('YYYY-MM-DD'), '', 'response').subscribe((res: HttpResponse<IncomeStatementDTO[]>) => {
            this.incomeStatementItems = res.response;
            this.needIncomeStatementData = false;
            callback(res.response);
        }, (err: HttpResponse) => {
            if (err.status === 418) {
                Vue.toasted.show(this.$t('error.api_not_activated').toString() + ' <a href="/dashboard/accountancy/activate">' + this.$t('error.api_not_activated_link_text').toString() + '</a>', {duration: 10000, type: 'error'});
            } else {
                Vue.toasted.show(this.$t('error.unknown').toString(), {duration: 5000, type: 'error'});
            }
        });
    } else {
        this.incomeStatementItems.sort((a: any, b: any) => {
            let reverse = 1;
            if (ctx.sortDesc) {
                reverse = -1;
            }

            if (typeof a[ctx.sortBy] === 'number') {
                return (a[ctx.sortBy] - b[ctx.sortBy]) * reverse;
            }

            return String(a[ctx.sortBy]).localeCompare(String(b[ctx.sortBy])) * reverse;
        } );

        callback(this.incomeStatementItems);
    }
  }

  private showAddBalanceRowModal() {
    (this.$refs['add-balance-modal'] as any).show();
  }
  private showEditBalanceRowModal(balance: PaymentMethod) {
    this.editBalance = balance;
    (this.$refs['edit-balance-modal'] as any).show();
  }
  private showAddIncomeStatementModal() {
    (this.$refs['add-income-statement-modal'] as any).show();
  }
  private openEditIncomeStatementRowModal(incomeStatement: IncomeStatement) {
    this.editIncomeStatement = incomeStatement;
    (this.$refs['edit-income-statement-modal'] as any).show();
  }

  private addBalanceRow() {
    this.accountancyService.addBalance(this.addBalance, 'response').subscribe(() => {
      this.addBalance = { code: 0, name: '', startAssets: 0, startLiabilities: 0 };
      this.needBalanceData = true;

      Vue.toasted.show(this.$t('success').toString(), {duration: 2000, type: 'success'});
      (this.$refs['balance-table'] as any).refresh();

    }, (err: HttpResponse) => {
      if (err.status === 400) {
        Vue.toasted.show(this.$t('error.form_not_filled_in_correctly').toString(), {duration: 5000, type: 'error'});

      } else if (err.status === 409) {
        Vue.toasted.show(this.$t('error.code_already_exists').toString(), {duration: 5000, type: 'error'});

      } else {
        Vue.toasted.show(this.$t('error.unknown').toString(), {duration: 5000, type: 'error'});
      }
    });
  }

  private editBalanceRow() {
    const model: AddBalanceDTO = {
      name: this.editBalance.name,
      code: this.editBalance.code!,
      startAssets: this.editBalance.startAssets,
      startLiabilities: this.editBalance.startLiabilities,
    };

    this.accountancyService.editBalance(this.editBalance.id, model, 'response').subscribe(() => {
      this.editBalance = { id: 0, code: 0, name: '', startAssets: 0, startLiabilities: 0 };
      this.needBalanceData = true;

      Vue.toasted.show(this.$t('success').toString(), {duration: 2000, type: 'success'});
      (this.$refs['balance-table'] as any).refresh();
      (this.$refs['edit-balance-modal'] as any).hide();

    }, (err: HttpResponse) => {
      if (err.status === 400) {
        Vue.toasted.show(this.$t('error.form_not_filled_in_correctly').toString(), {duration: 5000, type: 'error'});

      } else if (err.status === 409) {
        Vue.toasted.show(this.$t('error.code_already_exists').toString(), {duration: 5000, type: 'error'});

      } else {
        Vue.toasted.show(this.$t('error.unknown').toString(), {duration: 5000, type: 'error'});
      }
    });
  }

  private deleteBalanceRow() {
    this.accountancyService.deleteBalance(this.editBalance.id, 'response').subscribe(() => {
      this.needBalanceData = true;
      (this.$refs['balance-table'] as any).refresh();
      (this.$refs['edit-balance-modal'] as any).hide();
      Vue.toasted.show(this.$t('success').toString(), {duration: 2000, type: 'success'});

    }, (err: HttpResponse) => {
      Vue.toasted.show(this.$t('error.unknown').toString(), {duration: 5000, type: 'error'});
    });
  }

  private addIncomeStatementRow() {
    this.accountancyService.addIncomeStatement(this.addIncomeStatement, 'response').subscribe(() => {
      this.addIncomeStatement = { code: 0, name: '' };
      this.needIncomeStatementData = true;

      Vue.toasted.show(this.$t('success').toString(), {duration: 2000, type: 'success'});
      (this.$refs['income-statement-table'] as any).refresh();

    }, (err: HttpResponse) => {
      if (err.status === 400) {
        Vue.toasted.show(this.$t('error.form_not_filled_in_correctly').toString(), {duration: 5000, type: 'error'});

      } else if (err.status === 409) {
        Vue.toasted.show(this.$t('error.code_already_exists').toString(), {duration: 5000, type: 'error'});

      } else {
        Vue.toasted.show(this.$t('error.unknown').toString(), {duration: 5000, type: 'error'});
      }
    });
  }

  private editIncomeStatementRow() {
    const model: AddIncomeStatementDTO = {
      name: this.editIncomeStatement.name,
      code: this.editIncomeStatement.code,
    };

    this.accountancyService.editIncomeStatement(this.editIncomeStatement.id, model, 'response').subscribe(() => {
      this.editIncomeStatement = { id: 0, code: 0, name: '' };
      this.needIncomeStatementData = true;

      Vue.toasted.show(this.$t('success').toString(), {duration: 2000, type: 'success'});
      (this.$refs['income-statement-table'] as any).refresh();
      (this.$refs['edit-income-statement-modal'] as any).hide();

    }, (err: HttpResponse) => {
      if (err.status === 400) {
        Vue.toasted.show(this.$t('error.form_not_filled_in_correctly').toString(), {duration: 5000, type: 'error'});

      } else if (err.status === 409) {
        Vue.toasted.show(this.$t('error.code_already_exists').toString(), {duration: 5000, type: 'error'});

      } else {
        Vue.toasted.show(this.$t('error.unknown').toString(), {duration: 5000, type: 'error'});
      }
    });
  }

  private deleteIncomeStatementRow() {
    this.accountancyService.deleteIncomeStatement(this.editIncomeStatement.id, 'response').subscribe(() => {
      this.needIncomeStatementData = true;
      (this.$refs['income-statement-table'] as any).refresh();
      (this.$refs['edit-income-statement-modal'] as any).hide();
      Vue.toasted.show(this.$t('success').toString(), {duration: 2000, type: 'success'});

    }, (err: HttpResponse) => {
      Vue.toasted.show(this.$t('error.unknown').toString(), {duration: 5000, type: 'error'});
    });
  }
}
</script>
<style lang="scss">
.payment-method {
  &__title {
    text-align: left;
    text-transform: none;
    font-size: 23px;
  }

  &__actions .btn.btn-samu{
    float: right;
  }
}

.income-statement {
  margin-bottom: 20px;

  &__title {
    text-align: left;
    text-transform: none;
    font-size: 23px;
  }

  &__actions .btn.btn-samu{
    float: right;
  }
}
</style>

<i18n src="@/lang/dashboard/accountancy/settings.json"></i18n>