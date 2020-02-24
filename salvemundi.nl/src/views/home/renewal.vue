<template scoped>
  <div></div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import { PaymentDTO } from '../../openapi/model/paymentDTO';
import { PaymentsService } from '../../openapi/api/payments.service';
import openApiContainer from '@/openApiContainer';
import HttpResponse from '../../openapi/HttpResponse';

@Component({})
export default class Renewal extends Vue {

  private paymentService: PaymentsService = openApiContainer.get<PaymentsService>('PaymentsService');

  constructor() {
    super();

    const token = new URLSearchParams(window.location.search.substring(1)).get('token');
    if (token === '' || !token) {
      window.location.href = '/home';

    } else {
      this.paymentService.createPaymentForRenewalMembership(token, 'response').subscribe((res: HttpResponse<PaymentDTO>) => {
          window.location.href = res.response.url.href;
      });
    }
  }
}
</script>
<style lang="scss" scoped></style>