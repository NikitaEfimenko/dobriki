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
 * @interface Charity
 */
export interface Charity {
    /**
     * 
     * @type {number}
     * @memberof Charity
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Charity
     */
    'organization_name': string;
    /**
     * 
     * @type {string}
     * @memberof Charity
     */
    'name': string;
    /**
     * 
     * @type {boolean}
     * @memberof Charity
     */
    'is_active'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Charity
     */
    'approved'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Charity
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof Charity
     */
    'contact_email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Charity
     */
    'sum'?: string;
}

