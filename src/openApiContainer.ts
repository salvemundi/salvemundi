import { Container, injectable } from 'inversify';
import { ApiServiceBinder } from './openapi/ApiServiceBinder';
import IHttpClient from './openapi/IHttpClient';
import HttpClient from './openapi/HttpClient';
import { IAPIConfiguration } from './openapi/IAPIConfiguration';

@injectable()
class APIConfiguration implements IAPIConfiguration {
    public apiKeys?: {[ key: string ]: string};
    public username?: string;
    public password?: string;
    public accessToken?: string | (() => string);
    public basePath?: string = process.env.VUE_APP_API_URL;
    public withCredentials?: boolean;
}

const openApiContainer = new Container();
ApiServiceBinder.with(openApiContainer);
openApiContainer.bind<IHttpClient>('IApiHttpClient').to(HttpClient).inSingletonScope();
openApiContainer.bind<IAPIConfiguration>('IAPIConfiguration').to(APIConfiguration).inSingletonScope();


export default openApiContainer;
