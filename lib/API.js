"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleOperatorNames = {
    EQUAL: '=',
    LESS_THAN: '<',
    GREATER_THAN: '>',
    LESS_THAN_EQUAL: '<=',
    LIKE: '~',
    GREATER_THAN_EQUAL: '>=',
    CONTAINS: 'contains'
};
exports.RuleGroupOperatorNames = {
    AND: 'AND',
    OR: 'OR'
};
/**
 * The model that represents an API error
 */
var APIErrorResponse = /** @class */ (function () {
    function APIErrorResponse(code, type, message) {
        this.code = code;
        this.type = type;
        this.message = message;
    }
    return APIErrorResponse;
}());
exports.APIErrorResponse = APIErrorResponse;
var APIResponse = /** @class */ (function () {
    function APIResponse(data, success) {
        if (success === void 0) { success = true; }
        this.data = data;
        this.success = success;
    }
    return APIResponse;
}());
exports.APIResponse = APIResponse;
