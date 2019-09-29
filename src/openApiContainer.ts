import { Container } from 'inversify';
import { ApiServiceBinder } from './openapi/ApiServiceBinder';
import IHttpClient from './openapi/IHttpClient';
import HttpClient from './openapi/HttpClient';
import { IAPIConfiguration } from './openapi/IAPIConfiguration';
import * as dotenv from 'dotenv';

dotenv.config();

class ApiConfig implements IAPIConfiguration {
    public basePath: string = process.env.API_URL;
}

const openApiContainer = new Container();
ApiServiceBinder.with(openApiContainer);
openApiContainer.bind<IHttpClient>('IApiHttpClient').to(HttpClient).inSingletonScope();
openApiContainer.bind<IAPIConfiguration>('IApiConfiguration').to(ApiConfig).inSingletonScope();


export default openApiContainer;
