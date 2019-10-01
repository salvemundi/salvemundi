import { Container, injectable } from 'inversify';
import { ApiServiceBinder } from './openapi/ApiServiceBinder';
import IHttpClient from './openapi/IHttpClient';
import { Headers } from './openapi/Headers';
import { IAPIConfiguration } from './openapi/IAPIConfiguration';
import { Observable, from } from 'rxjs';
import HttpResponse from './openapi/HttpResponse';
import axios, { AxiosResponse } from 'axios';

@injectable()
class APIConfiguration implements IAPIConfiguration {
    public apiKeys?: {[ key: string ]: string};
    public username?: string;
    public password?: string;
    public accessToken?: string | (() => string);
    public basePath?: string = process.env.VUE_APP_API_URL;
    public withCredentials?: boolean = true;
}

// tslint:disable-next-line: max-classes-per-file
@injectable()
class HttpClient implements IHttpClient {
    public get(url: string, headers?: Headers): Observable<HttpResponse> {
        const promise = axios.get(url, {withCredentials: true}).then((response: AxiosResponse) => {
            const httpResponse = new HttpResponse(response.data, response.status, response.headers);

            if (response.status >= 400) {
                throw httpResponse;
            }

            return httpResponse;
        });

        return from(promise);
    }

    public post(url: string, body?: {} | FormData, headers?: Headers): Observable<HttpResponse> {
        const promise = axios.post(url, body, {withCredentials: true}).then((response: AxiosResponse) => {
            const httpResponse = new HttpResponse(response.data, response.status, response.headers);

            if (response.status >= 400) {
                throw httpResponse;
            }

            return httpResponse;
        });

        return from(promise);
    }

    public put(url: string, body?: {}, headers?: Headers): Observable<HttpResponse> {
        const promise = axios.put(url, body, {withCredentials: true}).then((response: AxiosResponse) => {
            const httpResponse = new HttpResponse(response.data, response.status, response.headers);

            if (response.status >= 400) {
                throw httpResponse;
            }

            return httpResponse;
        });

        return from(promise);
    }

    public patch(url: string, body?: {}, headers?: Headers): Observable<HttpResponse> {
        const promise = axios.patch(url, body, {withCredentials: true}).then((response: AxiosResponse) => {
            const httpResponse = new HttpResponse(response.data, response.status, response.headers);

            if (response.status >= 400) {
                throw httpResponse;
            }

            return httpResponse;
        });

        return from(promise);
    }

    public delete(url: string, headers?: Headers): Observable<HttpResponse> {
        const promise = axios.delete(url, {withCredentials: true}).then((response: AxiosResponse) => {
            const httpResponse = new HttpResponse(response.data, response.status, response.headers);

            if (response.status >= 400) {
                throw httpResponse;
            }

            return httpResponse;
        });

        return from(promise);
    }
}

const openApiContainer = new Container();
ApiServiceBinder.with(openApiContainer);
openApiContainer.bind<IHttpClient>('IApiHttpClient').to(HttpClient).inSingletonScope();
openApiContainer.bind<IAPIConfiguration>('IAPIConfiguration').to(APIConfiguration).inSingletonScope();


export default openApiContainer;
