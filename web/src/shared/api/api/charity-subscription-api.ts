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
import { CharitySubscription } from '../models';
/**
 * CharitySubscriptionApi - axios parameter creator
 * @export
 */
export const CharitySubscriptionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} id A unique integer value identifying this Подписка на пожертвования.
         * @param {CharitySubscription} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charitySubscriptionApply: async (id: number, data: CharitySubscription, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('charitySubscriptionApply', 'id', id)
            // verify required parameter 'data' is not null or undefined
            assertParamExists('charitySubscriptionApply', 'data', data)
            const localVarPath = `/charity-subscription/{id}/apply/`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
        /**
         * 
         * @param {CharitySubscription} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charitySubscriptionCreate: async (data: CharitySubscription, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'data' is not null or undefined
            assertParamExists('charitySubscriptionCreate', 'data', data)
            const localVarPath = `/charity-subscription/`;
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
        /**
         * 
         * @param {number} id A unique integer value identifying this Подписка на пожертвования.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charitySubscriptionDelete: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('charitySubscriptionDelete', 'id', id)
            const localVarPath = `/charity-subscription/{id}/`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charitySubscriptionList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/charity-subscription/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this Подписка на пожертвования.
         * @param {CharitySubscription} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charitySubscriptionPartialUpdate: async (id: number, data: CharitySubscription, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('charitySubscriptionPartialUpdate', 'id', id)
            // verify required parameter 'data' is not null or undefined
            assertParamExists('charitySubscriptionPartialUpdate', 'data', data)
            const localVarPath = `/charity-subscription/{id}/`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
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
        /**
         * 
         * @param {number} id A unique integer value identifying this Подписка на пожертвования.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charitySubscriptionRead: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('charitySubscriptionRead', 'id', id)
            const localVarPath = `/charity-subscription/{id}/`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this Подписка на пожертвования.
         * @param {CharitySubscription} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charitySubscriptionUpdate: async (id: number, data: CharitySubscription, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('charitySubscriptionUpdate', 'id', id)
            // verify required parameter 'data' is not null or undefined
            assertParamExists('charitySubscriptionUpdate', 'data', data)
            const localVarPath = `/charity-subscription/{id}/`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
 * CharitySubscriptionApi - functional programming interface
 * @export
 */
export const CharitySubscriptionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CharitySubscriptionApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} id A unique integer value identifying this Подписка на пожертвования.
         * @param {CharitySubscription} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async charitySubscriptionApply(id: number, data: CharitySubscription, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CharitySubscription>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.charitySubscriptionApply(id, data, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {CharitySubscription} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async charitySubscriptionCreate(data: CharitySubscription, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CharitySubscription>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.charitySubscriptionCreate(data, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this Подписка на пожертвования.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async charitySubscriptionDelete(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.charitySubscriptionDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async charitySubscriptionList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CharitySubscription>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.charitySubscriptionList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this Подписка на пожертвования.
         * @param {CharitySubscription} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async charitySubscriptionPartialUpdate(id: number, data: CharitySubscription, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CharitySubscription>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.charitySubscriptionPartialUpdate(id, data, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this Подписка на пожертвования.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async charitySubscriptionRead(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CharitySubscription>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.charitySubscriptionRead(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this Подписка на пожертвования.
         * @param {CharitySubscription} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async charitySubscriptionUpdate(id: number, data: CharitySubscription, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CharitySubscription>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.charitySubscriptionUpdate(id, data, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CharitySubscriptionApi - factory interface
 * @export
 */
export const CharitySubscriptionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CharitySubscriptionApiFp(configuration)
    return {
        /**
         * 
         * @param {CharitySubscriptionApiCharitySubscriptionApplyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charitySubscriptionApply(requestParameters: CharitySubscriptionApiCharitySubscriptionApplyRequest, options?: AxiosRequestConfig): AxiosPromise<CharitySubscription> {
            return localVarFp.charitySubscriptionApply(requestParameters.id, requestParameters.data, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CharitySubscriptionApiCharitySubscriptionCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charitySubscriptionCreate(requestParameters: CharitySubscriptionApiCharitySubscriptionCreateRequest, options?: AxiosRequestConfig): AxiosPromise<CharitySubscription> {
            return localVarFp.charitySubscriptionCreate(requestParameters.data, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CharitySubscriptionApiCharitySubscriptionDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charitySubscriptionDelete(requestParameters: CharitySubscriptionApiCharitySubscriptionDeleteRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.charitySubscriptionDelete(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charitySubscriptionList(options?: AxiosRequestConfig): AxiosPromise<Array<CharitySubscription>> {
            return localVarFp.charitySubscriptionList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CharitySubscriptionApiCharitySubscriptionPartialUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charitySubscriptionPartialUpdate(requestParameters: CharitySubscriptionApiCharitySubscriptionPartialUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<CharitySubscription> {
            return localVarFp.charitySubscriptionPartialUpdate(requestParameters.id, requestParameters.data, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CharitySubscriptionApiCharitySubscriptionReadRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charitySubscriptionRead(requestParameters: CharitySubscriptionApiCharitySubscriptionReadRequest, options?: AxiosRequestConfig): AxiosPromise<CharitySubscription> {
            return localVarFp.charitySubscriptionRead(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CharitySubscriptionApiCharitySubscriptionUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charitySubscriptionUpdate(requestParameters: CharitySubscriptionApiCharitySubscriptionUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<CharitySubscription> {
            return localVarFp.charitySubscriptionUpdate(requestParameters.id, requestParameters.data, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for charitySubscriptionApply operation in CharitySubscriptionApi.
 * @export
 * @interface CharitySubscriptionApiCharitySubscriptionApplyRequest
 */
export interface CharitySubscriptionApiCharitySubscriptionApplyRequest {
    /**
     * A unique integer value identifying this Подписка на пожертвования.
     * @type {number}
     * @memberof CharitySubscriptionApiCharitySubscriptionApply
     */
    readonly id: number

    /**
     * 
     * @type {CharitySubscription}
     * @memberof CharitySubscriptionApiCharitySubscriptionApply
     */
    readonly data: CharitySubscription
}

/**
 * Request parameters for charitySubscriptionCreate operation in CharitySubscriptionApi.
 * @export
 * @interface CharitySubscriptionApiCharitySubscriptionCreateRequest
 */
export interface CharitySubscriptionApiCharitySubscriptionCreateRequest {
    /**
     * 
     * @type {CharitySubscription}
     * @memberof CharitySubscriptionApiCharitySubscriptionCreate
     */
    readonly data: CharitySubscription
}

/**
 * Request parameters for charitySubscriptionDelete operation in CharitySubscriptionApi.
 * @export
 * @interface CharitySubscriptionApiCharitySubscriptionDeleteRequest
 */
export interface CharitySubscriptionApiCharitySubscriptionDeleteRequest {
    /**
     * A unique integer value identifying this Подписка на пожертвования.
     * @type {number}
     * @memberof CharitySubscriptionApiCharitySubscriptionDelete
     */
    readonly id: number
}

/**
 * Request parameters for charitySubscriptionPartialUpdate operation in CharitySubscriptionApi.
 * @export
 * @interface CharitySubscriptionApiCharitySubscriptionPartialUpdateRequest
 */
export interface CharitySubscriptionApiCharitySubscriptionPartialUpdateRequest {
    /**
     * A unique integer value identifying this Подписка на пожертвования.
     * @type {number}
     * @memberof CharitySubscriptionApiCharitySubscriptionPartialUpdate
     */
    readonly id: number

    /**
     * 
     * @type {CharitySubscription}
     * @memberof CharitySubscriptionApiCharitySubscriptionPartialUpdate
     */
    readonly data: CharitySubscription
}

/**
 * Request parameters for charitySubscriptionRead operation in CharitySubscriptionApi.
 * @export
 * @interface CharitySubscriptionApiCharitySubscriptionReadRequest
 */
export interface CharitySubscriptionApiCharitySubscriptionReadRequest {
    /**
     * A unique integer value identifying this Подписка на пожертвования.
     * @type {number}
     * @memberof CharitySubscriptionApiCharitySubscriptionRead
     */
    readonly id: number
}

/**
 * Request parameters for charitySubscriptionUpdate operation in CharitySubscriptionApi.
 * @export
 * @interface CharitySubscriptionApiCharitySubscriptionUpdateRequest
 */
export interface CharitySubscriptionApiCharitySubscriptionUpdateRequest {
    /**
     * A unique integer value identifying this Подписка на пожертвования.
     * @type {number}
     * @memberof CharitySubscriptionApiCharitySubscriptionUpdate
     */
    readonly id: number

    /**
     * 
     * @type {CharitySubscription}
     * @memberof CharitySubscriptionApiCharitySubscriptionUpdate
     */
    readonly data: CharitySubscription
}

/**
 * CharitySubscriptionApi - object-oriented interface
 * @export
 * @class CharitySubscriptionApi
 * @extends {BaseAPI}
 */
export class CharitySubscriptionApi extends BaseAPI {
    /**
     * 
     * @param {CharitySubscriptionApiCharitySubscriptionApplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharitySubscriptionApi
     */
    public charitySubscriptionApply(requestParameters: CharitySubscriptionApiCharitySubscriptionApplyRequest, options?: AxiosRequestConfig) {
        return CharitySubscriptionApiFp(this.configuration).charitySubscriptionApply(requestParameters.id, requestParameters.data, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CharitySubscriptionApiCharitySubscriptionCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharitySubscriptionApi
     */
    public charitySubscriptionCreate(requestParameters: CharitySubscriptionApiCharitySubscriptionCreateRequest, options?: AxiosRequestConfig) {
        return CharitySubscriptionApiFp(this.configuration).charitySubscriptionCreate(requestParameters.data, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CharitySubscriptionApiCharitySubscriptionDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharitySubscriptionApi
     */
    public charitySubscriptionDelete(requestParameters: CharitySubscriptionApiCharitySubscriptionDeleteRequest, options?: AxiosRequestConfig) {
        return CharitySubscriptionApiFp(this.configuration).charitySubscriptionDelete(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharitySubscriptionApi
     */
    public charitySubscriptionList(options?: AxiosRequestConfig) {
        return CharitySubscriptionApiFp(this.configuration).charitySubscriptionList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CharitySubscriptionApiCharitySubscriptionPartialUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharitySubscriptionApi
     */
    public charitySubscriptionPartialUpdate(requestParameters: CharitySubscriptionApiCharitySubscriptionPartialUpdateRequest, options?: AxiosRequestConfig) {
        return CharitySubscriptionApiFp(this.configuration).charitySubscriptionPartialUpdate(requestParameters.id, requestParameters.data, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CharitySubscriptionApiCharitySubscriptionReadRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharitySubscriptionApi
     */
    public charitySubscriptionRead(requestParameters: CharitySubscriptionApiCharitySubscriptionReadRequest, options?: AxiosRequestConfig) {
        return CharitySubscriptionApiFp(this.configuration).charitySubscriptionRead(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CharitySubscriptionApiCharitySubscriptionUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharitySubscriptionApi
     */
    public charitySubscriptionUpdate(requestParameters: CharitySubscriptionApiCharitySubscriptionUpdateRequest, options?: AxiosRequestConfig) {
        return CharitySubscriptionApiFp(this.configuration).charitySubscriptionUpdate(requestParameters.id, requestParameters.data, options).then((request) => request(this.axios, this.basePath));
    }
}
