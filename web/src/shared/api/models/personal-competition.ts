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
 * @interface PersonalCompetition
 */
export interface PersonalCompetition {
    /**
     * 
     * @type {number}
     * @memberof PersonalCompetition
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PersonalCompetition
     */
    'name': string;
    /**
     * 
     * @type {boolean}
     * @memberof PersonalCompetition
     */
    'is_active'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PersonalCompetition
     */
    'description': string;
    /**
     * 
     * @type {Set<number>}
     * @memberof PersonalCompetition
     */
    'participants': Set<number>;
}

