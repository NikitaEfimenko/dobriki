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
 * @interface UserDetails
 */
export interface UserDetails {
    /**
     * 
     * @type {number}
     * @memberof UserDetails
     */
    'id'?: number;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     * @type {string}
     * @memberof UserDetails
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof UserDetails
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDetails
     */
    'first_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDetails
     */
    'last_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDetails
     */
    'teams'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDetails
     */
    'aim'?: string;
}

