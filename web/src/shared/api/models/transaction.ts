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



/**
 * 
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * 
     * @type {number}
     * @memberof Transaction
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'created_at'?: string;
    /**
     * 
     * @type {number}
     * @memberof Transaction
     */
    'sum': number;
    /**
     * 
     * @type {number}
     * @memberof Transaction
     */
    'fund': number;
}
