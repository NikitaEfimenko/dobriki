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


// May contain unused imports in some cases
// @ts-ignore
import { Charity } from './charity';

/**
 * 
 * @export
 * @interface CharitySubscription
 */
export interface CharitySubscription {
    /**
     * 
     * @type {number}
     * @memberof CharitySubscription
     */
    'id'?: number;
    /**
     * 
     * @type {Charity}
     * @memberof CharitySubscription
     */
    'charity': Charity;
    /**
     * 
     * @type {string}
     * @memberof CharitySubscription
     */
    'created_at'?: string;
}

