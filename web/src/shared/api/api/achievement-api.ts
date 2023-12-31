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
import { Achievement } from '../models';
/**
 * AchievementApi - axios parameter creator
 * @export
 */
export const AchievementApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {Achievement} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        achievementCreate: async (data: Achievement, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'data' is not null or undefined
            assertParamExists('achievementCreate', 'data', data)
            const localVarPath = `/achievement/`;
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
         * @param {number} id A unique integer value identifying this Достижение.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        achievementDelete: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('achievementDelete', 'id', id)
            const localVarPath = `/achievement/{id}/`
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
        achievementList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/achievement/`;
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
         * @param {number} id A unique integer value identifying this Достижение.
         * @param {Achievement} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        achievementPartialUpdate: async (id: number, data: Achievement, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('achievementPartialUpdate', 'id', id)
            // verify required parameter 'data' is not null or undefined
            assertParamExists('achievementPartialUpdate', 'data', data)
            const localVarPath = `/achievement/{id}/`
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
         * @param {number} id A unique integer value identifying this Достижение.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        achievementRead: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('achievementRead', 'id', id)
            const localVarPath = `/achievement/{id}/`
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
         * @param {number} id A unique integer value identifying this Достижение.
         * @param {Achievement} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        achievementUpdate: async (id: number, data: Achievement, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('achievementUpdate', 'id', id)
            // verify required parameter 'data' is not null or undefined
            assertParamExists('achievementUpdate', 'data', data)
            const localVarPath = `/achievement/{id}/`
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
 * AchievementApi - functional programming interface
 * @export
 */
export const AchievementApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AchievementApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {Achievement} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async achievementCreate(data: Achievement, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Achievement>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.achievementCreate(data, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this Достижение.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async achievementDelete(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.achievementDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async achievementList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Achievement>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.achievementList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this Достижение.
         * @param {Achievement} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async achievementPartialUpdate(id: number, data: Achievement, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Achievement>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.achievementPartialUpdate(id, data, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this Достижение.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async achievementRead(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Achievement>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.achievementRead(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this Достижение.
         * @param {Achievement} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async achievementUpdate(id: number, data: Achievement, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Achievement>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.achievementUpdate(id, data, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AchievementApi - factory interface
 * @export
 */
export const AchievementApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AchievementApiFp(configuration)
    return {
        /**
         * 
         * @param {AchievementApiAchievementCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        achievementCreate(requestParameters: AchievementApiAchievementCreateRequest, options?: AxiosRequestConfig): AxiosPromise<Achievement> {
            return localVarFp.achievementCreate(requestParameters.data, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AchievementApiAchievementDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        achievementDelete(requestParameters: AchievementApiAchievementDeleteRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.achievementDelete(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        achievementList(options?: AxiosRequestConfig): AxiosPromise<Array<Achievement>> {
            return localVarFp.achievementList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AchievementApiAchievementPartialUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        achievementPartialUpdate(requestParameters: AchievementApiAchievementPartialUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<Achievement> {
            return localVarFp.achievementPartialUpdate(requestParameters.id, requestParameters.data, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AchievementApiAchievementReadRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        achievementRead(requestParameters: AchievementApiAchievementReadRequest, options?: AxiosRequestConfig): AxiosPromise<Achievement> {
            return localVarFp.achievementRead(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AchievementApiAchievementUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        achievementUpdate(requestParameters: AchievementApiAchievementUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<Achievement> {
            return localVarFp.achievementUpdate(requestParameters.id, requestParameters.data, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for achievementCreate operation in AchievementApi.
 * @export
 * @interface AchievementApiAchievementCreateRequest
 */
export interface AchievementApiAchievementCreateRequest {
    /**
     * 
     * @type {Achievement}
     * @memberof AchievementApiAchievementCreate
     */
    readonly data: Achievement
}

/**
 * Request parameters for achievementDelete operation in AchievementApi.
 * @export
 * @interface AchievementApiAchievementDeleteRequest
 */
export interface AchievementApiAchievementDeleteRequest {
    /**
     * A unique integer value identifying this Достижение.
     * @type {number}
     * @memberof AchievementApiAchievementDelete
     */
    readonly id: number
}

/**
 * Request parameters for achievementPartialUpdate operation in AchievementApi.
 * @export
 * @interface AchievementApiAchievementPartialUpdateRequest
 */
export interface AchievementApiAchievementPartialUpdateRequest {
    /**
     * A unique integer value identifying this Достижение.
     * @type {number}
     * @memberof AchievementApiAchievementPartialUpdate
     */
    readonly id: number

    /**
     * 
     * @type {Achievement}
     * @memberof AchievementApiAchievementPartialUpdate
     */
    readonly data: Achievement
}

/**
 * Request parameters for achievementRead operation in AchievementApi.
 * @export
 * @interface AchievementApiAchievementReadRequest
 */
export interface AchievementApiAchievementReadRequest {
    /**
     * A unique integer value identifying this Достижение.
     * @type {number}
     * @memberof AchievementApiAchievementRead
     */
    readonly id: number
}

/**
 * Request parameters for achievementUpdate operation in AchievementApi.
 * @export
 * @interface AchievementApiAchievementUpdateRequest
 */
export interface AchievementApiAchievementUpdateRequest {
    /**
     * A unique integer value identifying this Достижение.
     * @type {number}
     * @memberof AchievementApiAchievementUpdate
     */
    readonly id: number

    /**
     * 
     * @type {Achievement}
     * @memberof AchievementApiAchievementUpdate
     */
    readonly data: Achievement
}

/**
 * AchievementApi - object-oriented interface
 * @export
 * @class AchievementApi
 * @extends {BaseAPI}
 */
export class AchievementApi extends BaseAPI {
    /**
     * 
     * @param {AchievementApiAchievementCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AchievementApi
     */
    public achievementCreate(requestParameters: AchievementApiAchievementCreateRequest, options?: AxiosRequestConfig) {
        return AchievementApiFp(this.configuration).achievementCreate(requestParameters.data, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AchievementApiAchievementDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AchievementApi
     */
    public achievementDelete(requestParameters: AchievementApiAchievementDeleteRequest, options?: AxiosRequestConfig) {
        return AchievementApiFp(this.configuration).achievementDelete(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AchievementApi
     */
    public achievementList(options?: AxiosRequestConfig) {
        return AchievementApiFp(this.configuration).achievementList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AchievementApiAchievementPartialUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AchievementApi
     */
    public achievementPartialUpdate(requestParameters: AchievementApiAchievementPartialUpdateRequest, options?: AxiosRequestConfig) {
        return AchievementApiFp(this.configuration).achievementPartialUpdate(requestParameters.id, requestParameters.data, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AchievementApiAchievementReadRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AchievementApi
     */
    public achievementRead(requestParameters: AchievementApiAchievementReadRequest, options?: AxiosRequestConfig) {
        return AchievementApiFp(this.configuration).achievementRead(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AchievementApiAchievementUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AchievementApi
     */
    public achievementUpdate(requestParameters: AchievementApiAchievementUpdateRequest, options?: AxiosRequestConfig) {
        return AchievementApiFp(this.configuration).achievementUpdate(requestParameters.id, requestParameters.data, options).then((request) => request(this.axios, this.basePath));
    }
}
