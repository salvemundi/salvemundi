import { injectable, inject } from "inversify";
import IHttpClient from "../../src/openapi/IHttpClient";
import { IAPIConfiguration } from "../../src/openapi/IAPIConfiguration";
import { ConfirmationDTO } from "../../src/openapi/model/confirmationDTO";
import { Observable, from } from "rxjs";
import { User } from "../../src/openapi/model/user";
import { Headers } from "../../src/openapi/Headers";
import HttpResponse from "../../src/openapi/HttpResponse";
import { LoginDTO } from "../../src/openapi/model/loginDTO";
import { MeDTO } from "../../src/openapi/model/meDTO";
import { RegisterDTO } from "../../src/openapi/model/registerDTO";
import { AuthorizationService } from "../../src/openapi/api/authorization.service";

@injectable()
export class AuthorizationServiceMock extends AuthorizationService {
    constructor(@inject("IApiHttpClient") httpClient: IHttpClient,
        @inject("IAPIConfiguration") APIConfiguration: IAPIConfiguration ) {
        super(httpClient, APIConfiguration);
    }

    public authorizationConfirmationPost(confirmationDTO: ConfirmationDTO, observe?: 'body', headers?: Headers): Observable<User>;
    public authorizationConfirmationPost(confirmationDTO: ConfirmationDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<User>>;
    public authorizationConfirmationPost(confirmationDTO: ConfirmationDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    } 

    public authorizationLoginPost(loginDTO: LoginDTO, observe?: 'body', headers?: Headers): Observable<any>;
    public authorizationLoginPost(loginDTO: LoginDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public authorizationLoginPost(loginDTO: LoginDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    }

    public authorizationMeGet(token: string, observe?: 'body', headers?: Headers): Observable<MeDTO>;
    public authorizationMeGet(token: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<MeDTO>>;
    public authorizationMeGet(token: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    }

    public authorizationRegisterPost(registerDTO: RegisterDTO, observe?: 'body', headers?: Headers): Observable<any>;
    public authorizationRegisterPost(registerDTO: RegisterDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public authorizationRegisterPost(registerDTO: RegisterDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    }
}
