import { injectable, inject } from "inversify";
import IHttpClient from "../../src/openapi/IHttpClient";
import { AccountancyService } from "../../src/openapi/api/accountancy.service";
import { IAPIConfiguration } from "../../src/openapi/IAPIConfiguration";
import { Observable, from } from "rxjs";
import HttpResponse from "../../src/openapi/HttpResponse";
import { Headers } from "../../src/openapi/Headers";
import { SaveAuthorizationDTO } from '../../src/openapi/model/saveAuthorizationDTO';
import { AddBalanceDTO } from '../../src/openapi/model/addBalanceDTO';
import { AddIncomeStatementDTO } from '../../src/openapi/model/addIncomeStatementDTO';
import { PaymentMethod } from '../../src/openapi/model/paymentMethod';
import { IncomeStatement } from '../../src/openapi/model/incomeStatement';
import { AddMutationDTO } from '../../src/openapi/model/addMutationDTO';
import { ActivationLinkDTO } from '../../src/openapi/model/activationLinkDTO';
import { NotImportedMutationDTO } from '../../src/openapi/model/notImportedMutationDTO';
import { BalanceDTO } from '../../src/openapi/model/balanceDTO';
import { Mutation } from '../../src/openapi/model/mutation';
import { ImportMutationDTO } from '../../src/openapi/model/importMutationDTO';
import { IncomeStatementDTO } from '../../src/openapi/model/incomeStatementDTO';
import moment from 'moment';

@injectable()
export class AccountancyServiceMock extends AccountancyService {
    constructor(@inject("IApiHttpClient") httpClient: IHttpClient,
                @inject("IAPIConfiguration") APIConfiguration: IAPIConfiguration ) {
        super(httpClient, APIConfiguration);
    }

    public activateApi(saveAuthorizationDTO: SaveAuthorizationDTO, observe?: 'body', headers?: Headers): Observable<any>;
    public activateApi(saveAuthorizationDTO: SaveAuthorizationDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public activateApi(saveAuthorizationDTO: SaveAuthorizationDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    }

    public addBalance(addBalanceDTO: AddBalanceDTO, observe?: 'body', headers?: Headers): Observable<PaymentMethod>;
    public addBalance(addBalanceDTO: AddBalanceDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<PaymentMethod>>;
    public addBalance(addBalanceDTO: AddBalanceDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    }

    public addIncomeStatement(addIncomeStatementDTO: AddIncomeStatementDTO, observe?: 'body', headers?: Headers): Observable<IncomeStatement>;
    public addIncomeStatement(addIncomeStatementDTO: AddIncomeStatementDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<IncomeStatement>>;
    public addIncomeStatement(addIncomeStatementDTO: AddIncomeStatementDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    }

    public addMutation(addMutationDTO: AddMutationDTO, observe?: 'body', headers?: Headers): Observable<Mutation>;
    public addMutation(addMutationDTO: AddMutationDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<Mutation>>;
    public addMutation(addMutationDTO: AddMutationDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    }

    public deleteBalance(id: number, observe?: 'body', headers?: Headers): Observable<any>;
    public deleteBalance(id: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public deleteBalance(id: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    }

    public deleteIncomeStatement(id: number, observe?: 'body', headers?: Headers): Observable<any>;
    public deleteIncomeStatement(id: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public deleteIncomeStatement(id: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    }

    public editBalance(id: number, addBalanceDTO: AddBalanceDTO, observe?: 'body', headers?: Headers): Observable<PaymentMethod>;
    public editBalance(id: number, addBalanceDTO: AddBalanceDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<PaymentMethod>>;
    public editBalance(id: number, addBalanceDTO: AddBalanceDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    }

    public editIncomeStatement(id: number, addIncomeStatementDTO: AddIncomeStatementDTO, observe?: 'body', headers?: Headers): Observable<IncomeStatement>;
    public editIncomeStatement(id: number, addIncomeStatementDTO: AddIncomeStatementDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<IncomeStatement>>;
    public editIncomeStatement(id: number, addIncomeStatementDTO: AddIncomeStatementDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    }

    public getActivationLink(observe?: 'body', headers?: Headers): Observable<ActivationLinkDTO>;
    public getActivationLink(observe?: 'response', headers?: Headers): Observable<HttpResponse<ActivationLinkDTO>>;
    public getActivationLink(observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    }

    public getBalance(till: string, name?: string, observe?: 'body', headers?: Headers): Observable<Array<BalanceDTO>>;
    public getBalance(till: string, name?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<BalanceDTO>>>;
    public getBalance(till: string, name?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise<HttpResponse<Array<BalanceDTO>>>((resolve) => {
            let response: Array<BalanceDTO> = [];
            if (till === moment().format('YYYY-MM-DD') && name === '') {
                response = [
                    {
                        id: 1,
                        name: 'Kas',
                        code: 100,
                        startAssets: 600,
                        startLiabilities: 0,
                        assets: 7600,
                        liabilities: undefined,
                    },
                    {
                        id: 2,
                        name: 'Bank',
                        code: 200,
                        startAssets: 1000,
                        startLiabilities: 0,
                        assets: 8000,
                        liabilities: undefined,
                    },
                    {
                        id: 3,
                        name: 'Creditcard',
                        code: 300,
                        startAssets: 0,
                        startLiabilities: 3000,
                        assets: 0,
                        liabilities: undefined,
                    }
                ];
            } else if(till === moment().format('YYYY-MM-DD') && name === 'Kas') {
                response = [
                    {
                        id: 1,
                        name: 'Kas',
                        code: 100,
                        startAssets: 600,
                        startLiabilities: 0,
                        assets: 7600,
                        liabilities: undefined,
                    }
                ];
            } else if(till === '2020-01-08' && name === '') {
                response = [
                    {
                        id: 1,
                        name: 'Kas',
                        code: 100,
                        startAssets: 600,
                        startLiabilities: 0,
                        assets: 6800,
                        liabilities: undefined,
                    },{
                        id: 2,
                        name: 'Bank',
                        code: 200,
                        startAssets: 1000,
                        startLiabilities: 0,
                        assets: 7000,
                        liabilities: undefined,
                    },
                    {
                        id: 3,
                        name: 'Creditcard',
                        code: 300,
                        startAssets: 0,
                        startLiabilities: 3000,
                        assets: undefined,
                        liabilities: 1000,
                    }
                ];
            } else if (till === '2020-01-08' && name === 'Kas') {
                response = [
                    {
                        id: 1,
                        name: 'Kas',
                        code: 100,
                        startAssets: 600,
                        startLiabilities: 0,
                        assets: 6800,
                        liabilities: undefined,
                    }
                ];
            }

            resolve(new HttpResponse(response, 200));
        });
        return from(promise);
    }

    public getIncomeStatements(till: string, name?: string, observe?: 'body', headers?: Headers): Observable<Array<IncomeStatementDTO>>;
    public getIncomeStatements(till: string, name?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<IncomeStatementDTO>>>;
    public getIncomeStatements(till: string, name?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise<HttpResponse<Array<IncomeStatementDTO>>>((resolve) => {
            let response: Array<IncomeStatementDTO> = [];
            if (till === moment().format('YYYY-MM-DD') && name === '') {
                response = [
                    {
                        id: 1,
                        name: 'Bestuur',
                        code: 4000,
                        profit: undefined,
                        lost: 2000
                    },
                    {
                        id: 2,
                        name: 'ICT commissie',
                        code: 5000,
                        profit: 9000,
                        lost: undefined
                    },
                    {
                        id: 3,
                        name: 'Kamp',
                        code: 6000,
                        profit: undefined,
                        lost: 6000
                    }
                ];
            } else if (till === moment().format('YYYY-MM-DD') && name === 'Bestuur') {
                response = [
                    {
                        id: 1,
                        name: 'Bestuur',
                        code: 4000,
                        profit: undefined,
                        lost: 2000
                    }
                ];
            } else if (till === '2020-01-08' && name === '') {
                response = [
                    {
                        id: 1,
                        name: 'Bestuur',
                        code: 4000,
                        profit: undefined,
                        lost: 6000
                    },
                    {
                        id: 2,
                        name: 'ICT commissie',
                        code: 5000,
                        profit: 2000,
                        lost: undefined
                    },
                    {
                        id: 3,
                        name: 'Kamp',
                        code: 6000,
                        profit: 0,
                        lost: undefined
                    }
                ];
            } else if (till === '2020-01-08' && name === 'Bestuur') {
                response = [
                    {
                        id: 1,
                        name: 'Bestuur',
                        code: 4000,
                        profit: undefined,
                        lost: 6000
                    }
                ];
            }

            resolve(new HttpResponse(response, 200));
        })    
        return from(promise);
    }

    public getNotImportedMutations(observe?: 'body', headers?: Headers): Observable<Array<NotImportedMutationDTO>>;
    public getNotImportedMutations(observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<NotImportedMutationDTO>>>;
    public getNotImportedMutations(observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    }

    public importMutation(id: number, importMutationDTO: ImportMutationDTO, observe?: 'body', headers?: Headers): Observable<any>;
    public importMutation(id: number, importMutationDTO: ImportMutationDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public importMutation(id: number, importMutationDTO: ImportMutationDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    }
}