import { PaymentsService } from "../../src/openapi/api/payments.service";
import { injectable, inject } from "inversify";
import { Headers } from "../../src/openapi/Headers";
import IHttpClient from "../../src/openapi/IHttpClient";
import { IAPIConfiguration } from "../../src/openapi/IAPIConfiguration";
import { Observable, from } from "rxjs";
import { PaymentDTO } from "../../src/openapi/model/paymentDTO";
import HttpResponse from "../../src/openapi/HttpResponse";

@injectable()
export class PaymentsServiceMock extends PaymentsService {

    constructor(@inject("IApiHttpClient") httpClient: IHttpClient,
        @inject("IAPIConfiguration") APIConfiguration: IAPIConfiguration ) {
        super(httpClient, APIConfiguration);
    }

    public paymentsMembershipGet(id: number, observe?: 'body', headers?: Headers): Observable<PaymentDTO>;
    public paymentsMembershipGet(id: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<PaymentDTO>>;
    public paymentsMembershipGet(id: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    }

}