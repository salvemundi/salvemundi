// tslint:disable
/**
 * Salve mundi API
 * Salve mundi API documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, HttpQuery, throwIfRequired, encodeURI } from '../runtime';
import {
    Committee,
    CreateCommissionDto,
    UpdateCommissionDto,
} from '../models';

export interface CommitteeGetRequest {
    take: number;
    skip: number;
}

export interface CommitteeIdDeleteRequest {
    id: number;
}

export interface CommitteeIdGetRequest {
    id: number;
}

export interface CommitteePostRequest {
    createCommissionDto: CreateCommissionDto;
}

export interface CommitteePutRequest {
    updateCommissionDto: UpdateCommissionDto;
}

/**
 * no description
 */
export class CommitteeApi extends BaseAPI {

    /**
     * This call is used to get a summary of all the committees
     * getAll
     */
    committeeGet = (requestParameters: CommitteeGetRequest): Observable<Array<Committee>> => {
        throwIfRequired(requestParameters, 'take', 'committeeGet');
        throwIfRequired(requestParameters, 'skip', 'committeeGet');

        const query: HttpQuery = {
            ...(requestParameters.take && { 'take': requestParameters.take }),
            ...(requestParameters.skip && { 'skip': requestParameters.skip }),
        };

        return this.request<Array<Committee>>({
            path: '/committee',
            method: 'GET',
            query,
        });
    };

    /**
     * This call is used to delete a committee
     * delete
     */
    committeeIdDelete = (requestParameters: CommitteeIdDeleteRequest): Observable<void> => {
        throwIfRequired(requestParameters, 'id', 'committeeIdDelete');

        return this.request<void>({
            path: '/committee/{id}'.replace('{id}', encodeURI(requestParameters.id)),
            method: 'DELETE',
        });
    };

    /**
     * This call is used to get a specific committee
     * getOne
     */
    committeeIdGet = (requestParameters: CommitteeIdGetRequest): Observable<Committee> => {
        throwIfRequired(requestParameters, 'id', 'committeeIdGet');

        return this.request<Committee>({
            path: '/committee/{id}'.replace('{id}', encodeURI(requestParameters.id)),
            method: 'GET',
        });
    };

    /**
     * This call is used to create a committee
     * create
     */
    committeePost = (requestParameters: CommitteePostRequest): Observable<Committee> => {
        throwIfRequired(requestParameters, 'createCommissionDto', 'committeePost');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<Committee>({
            path: '/committee',
            method: 'POST',
            headers,
            body: requestParameters.createCommissionDto,
        });
    };

    /**
     * This call is used to update a committee
     * update
     */
    committeePut = (requestParameters: CommitteePutRequest): Observable<Committee> => {
        throwIfRequired(requestParameters, 'updateCommissionDto', 'committeePut');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<Committee>({
            path: '/committee',
            method: 'PUT',
            headers,
            body: requestParameters.updateCommissionDto,
        });
    };

}
