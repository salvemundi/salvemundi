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
import { AuthorizationService } from "../../src/openapi/api/authorization.service";

@injectable()
export class AuthorizationServiceMock extends AuthorizationService {
    constructor(@inject("IApiHttpClient") httpClient: IHttpClient,
        @inject("IAPIConfiguration") APIConfiguration: IAPIConfiguration ) {
        super(httpClient, APIConfiguration);
    }

    public confirmEmail(confirmationDTO: ConfirmationDTO, observe?: 'body', headers?: Headers): Observable<User>;
    public confirmEmail(confirmationDTO: ConfirmationDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<User>>;
    public confirmEmail(confirmationDTO: ConfirmationDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    } 

    public login(loginDTO: LoginDTO, observe?: 'body', headers?: Headers): Observable<any>;
    public login(loginDTO: LoginDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public login(loginDTO: LoginDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    }

    public me(token: string, observe?: 'body', headers?: Headers): Observable<MeDTO>;
    public me(token: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<MeDTO>>;
    public me(token: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise((resolve) => {
            resolve('jojo!');
        })    
        return from(promise);
    }

    public regiser(firstName: string, lastName: string, birthday: string, address: string, city: string, postalcode: string, country: string, email: string, phoneNumber: string, pcn: string, profilePicture: Blob, observe?: 'body', headers?: Headers): Observable<User>;
    public regiser(firstName: string, lastName: string, birthday: string, address: string, city: string, postalcode: string, country: string, email: string, phoneNumber: string, pcn: string, profilePicture: Blob, observe?: 'response', headers?: Headers): Observable<HttpResponse<User>>;
    public regiser(firstName: string, lastName: string, birthday: string, address: string, city: string, postalcode: string, country: string, email: string, phoneNumber: string, pcn: string, profilePicture: Blob, observe: any = 'body', headers: Headers = {}): Observable<any> {
        const promise = new Promise<HttpResponse<User>>((resolve, reject) => {
            if (firstName === '' ||
                lastName === '' ||
                birthday === '' ||
                email === '' ||
                address === '' ||
                postalcode === '' ||
                city === '' ||
                country === '' ||
                phoneNumber === '') {
                    reject(new HttpResponse({}, 400));
            }

            if (email === 'admin@salvemundi.nl') {
                reject(new HttpResponse({}, 409));
            }

            const user: User = {
                id: 1,
                firstName: firstName,
                lastName: lastName,
                birthday: birthday,
                address: address,
                postalcode: postalcode,
                city: city,
                country: country,
                email: email,
                phoneNumber: phoneNumber,
                pcn: pcn,
                registeredSince: new Date().toDateString(),
                activated: false,
                transactions: [],
                memberships: [],
                profilePicture: 'lol'
            };
            resolve(new HttpResponse(user, 200));
        });

        return from(promise);
    }
}
