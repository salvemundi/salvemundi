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

/**
 * @export
 * @interface UpdateUserDto
 */
export interface UpdateUserDto {
    /**
     * @type {number}
     * @memberof UpdateUserDto
     */
    id: number;
    /**
     * @type {string}
     * @memberof UpdateUserDto
     */
    pcn: string;
    /**
     * @type {string}
     * @memberof UpdateUserDto
     */
    firstName: string;
    /**
     * @type {string}
     * @memberof UpdateUserDto
     */
    middleName?: string;
    /**
     * @type {string}
     * @memberof UpdateUserDto
     */
    lastName: string;
    /**
     * @type {Date}
     * @memberof UpdateUserDto
     */
    birthday: Date;
    /**
     * @type {string}
     * @memberof UpdateUserDto
     */
    address: string;
    /**
     * @type {string}
     * @memberof UpdateUserDto
     */
    postalcode: string;
    /**
     * @type {string}
     * @memberof UpdateUserDto
     */
    city: string;
    /**
     * @type {string}
     * @memberof UpdateUserDto
     */
    country: string;
    /**
     * @type {string}
     * @memberof UpdateUserDto
     */
    phoneNumber: string;
    /**
     * @type {string}
     * @memberof UpdateUserDto
     */
    email: string;
}
