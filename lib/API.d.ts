export declare const FieldTypes: {
    ARRAY: "array";
    STRING: "string";
    NUMBER: "number";
    DATE: "date";
    BOOLEAN: "boolean";
};
export type FieldType = typeof FieldTypes[keyof typeof FieldTypes];
/**
 * The model that represents an API error
 */
export declare class APIErrorResponse {
    code: number;
    type: string;
    message: string;
    constructor(code: number, type: string, message: string);
}
export declare class APIResponse<T> {
    data: T;
    success: boolean;
    constructor(data: T, success?: boolean);
}
export interface User {
    name: string;
    password: string;
    email: string;
    username: string;
    salt: string;
    roles: string[];
}
export type PaginableQueryResult<T> = {
    currentPage: number;
    totalPage: number;
    totalItems: number;
    pageSize: number;
    results: T[];
};
