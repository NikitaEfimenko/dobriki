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
import { Charity } from '../models';
/**
 * CharityApi - axios parameter creator
 * @export
 */
export const CharityApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {Charity} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charityCreate: async (data: Charity, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'data' is not null or undefined
            assertParamExists('charityCreate', 'data', data)
            const localVarPath = `/charity/`;
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
         * @param {number} id A unique integer value identifying this Фонд.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charityDelete: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('charityDelete', 'id', id)
            const localVarPath = `/charity/{id}/`
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
        charityList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/charity/`;
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
         * @param {number} id A unique integer value identifying this Фонд.
         * @param {Charity} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charityPartialUpdate: async (id: number, data: Charity, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('charityPartialUpdate', 'id', id)
            // verify required parameter 'data' is not null or undefined
            assertParamExists('charityPartialUpdate', 'data', data)
            const localVarPath = `/charity/{id}/`
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
         * @param {number} id A unique integer value identifying this Фонд.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charityRead: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('charityRead', 'id', id)
            const localVarPath = `/charity/{id}/`
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
         * @param {number} id A unique integer value identifying this Фонд.
         * @param {Charity} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charityUpdate: async (id: number, data: Charity, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('charityUpdate', 'id', id)
            // verify required parameter 'data' is not null or undefined
            assertParamExists('charityUpdate', 'data', data)
            const localVarPath = `/charity/{id}/`
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
 * CharityApi - functional programming interface
 * @export
 */
export const CharityApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CharityApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {Charity} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async charityCreate(data: Charity, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Charity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.charityCreate(data, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this Фонд.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async charityDelete(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.charityDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async charityList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Charity>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.charityList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this Фонд.
         * @param {Charity} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async charityPartialUpdate(id: number, data: Charity, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Charity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.charityPartialUpdate(id, data, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this Фонд.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async charityRead(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Charity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.charityRead(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this Фонд.
         * @param {Charity} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async charityUpdate(id: number, data: Charity, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Charity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.charityUpdate(id, data, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CharityApi - factory interface
 * @export
 */
export const CharityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CharityApiFp(configuration)
    return {
        /**
         * 
         * @param {CharityApiCharityCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charityCreate(requestParameters: CharityApiCharityCreateRequest, options?: AxiosRequestConfig): AxiosPromise<Charity> {
            return localVarFp.charityCreate(requestParameters.data, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CharityApiCharityDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charityDelete(requestParameters: CharityApiCharityDeleteRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.charityDelete(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charityList(options?: AxiosRequestConfig): AxiosPromise<Array<Charity>> {
            return localVarFp.charityList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CharityApiCharityPartialUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charityPartialUpdate(requestParameters: CharityApiCharityPartialUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<Charity> {
            return localVarFp.charityPartialUpdate(requestParameters.id, requestParameters.data, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CharityApiCharityReadRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charityRead(requestParameters: CharityApiCharityReadRequest, options?: AxiosRequestConfig): AxiosPromise<Charity> {
            return localVarFp.charityRead(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CharityApiCharityUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        charityUpdate(requestParameters: CharityApiCharityUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<Charity> {
            return localVarFp.charityUpdate(requestParameters.id, requestParameters.data, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for charityCreate operation in CharityApi.
 * @export
 * @interface CharityApiCharityCreateRequest
 */
export interface CharityApiCharityCreateRequest {
    /**
     * 
     * @type {Charity}
     * @memberof CharityApiCharityCreate
     */
    readonly data: Charity
}

/**
 * Request parameters for charityDelete operation in CharityApi.
 * @export
 * @interface CharityApiCharityDeleteRequest
 */
export interface CharityApiCharityDeleteRequest {
    /**
     * A unique integer value identifying this Фонд.
     * @type {number}
     * @memberof CharityApiCharityDelete
     */
    readonly id: number
}

/**
 * Request parameters for charityPartialUpdate operation in CharityApi.
 * @export
 * @interface CharityApiCharityPartialUpdateRequest
 */
export interface CharityApiCharityPartialUpdateRequest {
    /**
     * A unique integer value identifying this Фонд.
     * @type {number}
     * @memberof CharityApiCharityPartialUpdate
     */
    readonly id: number

    /**
     * 
     * @type {Charity}
     * @memberof CharityApiCharityPartialUpdate
     */
    readonly data: Charity
}

/**
 * Request parameters for charityRead operation in CharityApi.
 * @export
 * @interface CharityApiCharityReadRequest
 */
export interface CharityApiCharityReadRequest {
    /**
     * A unique integer value identifying this Фонд.
     * @type {number}
     * @memberof CharityApiCharityRead
     */
    readonly id: number
}

/**
 * Request parameters for charityUpdate operation in CharityApi.
 * @export
 * @interface CharityApiCharityUpdateRequest
 */
export interface CharityApiCharityUpdateRequest {
    /**
     * A unique integer value identifying this Фонд.
     * @type {number}
     * @memberof CharityApiCharityUpdate
     */
    readonly id: number

    /**
     * 
     * @type {Charity}
     * @memberof CharityApiCharityUpdate
     */
    readonly data: Charity
}

/**
 * CharityApi - object-oriented interface
 * @export
 * @class CharityApi
 * @extends {BaseAPI}
 */
export class CharityApi extends BaseAPI {
    /**
     * 
     * @param {CharityApiCharityCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharityApi
     */
    public charityCreate(requestParameters: CharityApiCharityCreateRequest, options?: AxiosRequestConfig) {
        return CharityApiFp(this.configuration).charityCreate(requestParameters.data, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CharityApiCharityDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharityApi
     */
    public charityDelete(requestParameters: CharityApiCharityDeleteRequest, options?: AxiosRequestConfig) {
        return CharityApiFp(this.configuration).charityDelete(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharityApi
     */
    public charityList(options?: AxiosRequestConfig) {
        return CharityApiFp(this.configuration).charityList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CharityApiCharityPartialUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharityApi
     */
    public charityPartialUpdate(requestParameters: CharityApiCharityPartialUpdateRequest, options?: AxiosRequestConfig) {
        return CharityApiFp(this.configuration).charityPartialUpdate(requestParameters.id, requestParameters.data, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CharityApiCharityReadRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharityApi
     */
    public charityRead(requestParameters: CharityApiCharityReadRequest, options?: AxiosRequestConfig) {
        return CharityApiFp(this.configuration).charityRead(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CharityApiCharityUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharityApi
     */
    public charityUpdate(requestParameters: CharityApiCharityUpdateRequest, options?: AxiosRequestConfig) {
        return CharityApiFp(this.configuration).charityUpdate(requestParameters.id, requestParameters.data, options).then((request) => request(this.axios, this.basePath));
    }
}
