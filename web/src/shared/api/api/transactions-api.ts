/* tslint:disable */
/* eslint-disable */
/**
 * Dobriki API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Transaction } from '../models';
/**
 * TransactionsApi - axios parameter creator
 * @export
 */
export const TransactionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {Transaction} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        transactionsCreate: async (data: Transaction, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'data' is not null or undefined
            assertParamExists('transactionsCreate', 'data', data)
            const localVarPath = `/transactions/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(data, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TransactionsApi - functional programming interface
 * @export
 */
export const TransactionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TransactionsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {Transaction} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async transactionsCreate(data: Transaction, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Transaction>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.transactionsCreate(data, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TransactionsApi - factory interface
 * @export
 */
export const TransactionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TransactionsApiFp(configuration)
    return {
        /**
         * 
         * @param {TransactionsApiTransactionsCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        transactionsCreate(requestParameters: TransactionsApiTransactionsCreateRequest, options?: AxiosRequestConfig): AxiosPromise<Transaction> {
            return localVarFp.transactionsCreate(requestParameters.data, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for transactionsCreate operation in TransactionsApi.
 * @export
 * @interface TransactionsApiTransactionsCreateRequest
 */
export interface TransactionsApiTransactionsCreateRequest {
    /**
     * 
     * @type {Transaction}
     * @memberof TransactionsApiTransactionsCreate
     */
    readonly data: Transaction
}

/**
 * TransactionsApi - object-oriented interface
 * @export
 * @class TransactionsApi
 * @extends {BaseAPI}
 */
export class TransactionsApi extends BaseAPI {
    /**
     * 
     * @param {TransactionsApiTransactionsCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    public transactionsCreate(requestParameters: TransactionsApiTransactionsCreateRequest, options?: AxiosRequestConfig) {
        return TransactionsApiFp(this.configuration).transactionsCreate(requestParameters.data, options).then((request) => request(this.axios, this.basePath));
    }
}