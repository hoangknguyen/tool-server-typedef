/**
 * The rule that instruct the tag processing engine to assign tag to a transaction
 */
import { t } from '@utils/utils';

// we could configure the field type inside a property file
// this is just to be used as a constant in the UI
export const FieldTypes = t({
    ARRAY  : 'array',
    STRING : 'string',
    NUMBER : 'number',
    DATE   : 'date',
    BOOLEAN: 'boolean'
});

export type FieldType = typeof FieldTypes[keyof typeof FieldTypes];


/**
 * The model that represents an API error
 */
export class APIErrorResponse {
    constructor(public code: number, public type: string, public message: string) {
    }
}

export class APIResponse<T> {
    constructor(public data: T, public success: boolean = true) {
    }
}

export interface User {
    name: string;
    password: string;
    email: string;
    username: string;
    salt: string;
    roles: string[];
}


