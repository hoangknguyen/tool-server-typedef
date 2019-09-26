"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_validator_1 = require("class-validator");
var utils_1 = require("./utils/utils");
exports.RuleOperators = utils_1.t({
    EQUAL: '=',
    LESS_THAN: '<',
    GREATER_THAN: '>',
    LESS_THAN_EQUAL: '<=',
    LIKE: '~',
    GREATER_THAN_EQUAL: '>=',
    CONTAINS: 'contains'
});
exports.RuleGroupOperators = utils_1.t({
    AND: 'AND',
    OR: 'OR'
});
exports.TAG_RULE_GROUP_VALIDATION_ERRORS = {
    NAME_REQUIRED: 'Rule Group name is required.',
    TAGS_EMPTY: 'Tags must not be empty.',
    OPERATOR_REQUIRED: 'Operator is required.',
    OPERAND_EMPTY: 'Operands must not be empty.'
};
exports.TagRuleGroupSchema = {
    name: 'tagRuleGroupSchema',
    properties: {
        name: [{
                type: class_validator_1.ValidationTypes.IS_NOT_EMPTY,
                message: exports.TAG_RULE_GROUP_VALIDATION_ERRORS.NAME_REQUIRED
            }],
        tags: [{
                type: class_validator_1.ValidationTypes.ARRAY_NOT_EMPTY,
                message: exports.TAG_RULE_GROUP_VALIDATION_ERRORS.TAGS_EMPTY
            }],
        operator: [{
                type: class_validator_1.ValidationTypes.IS_NOT_EMPTY,
                message: exports.TAG_RULE_GROUP_VALIDATION_ERRORS.OPERATOR_REQUIRED
            }],
        operands: [{
                type: class_validator_1.ValidationTypes.ARRAY_NOT_EMPTY,
                message: exports.TAG_RULE_GROUP_VALIDATION_ERRORS.OPERAND_EMPTY
            }]
    }
};
exports.TRANSACTION_VALIDATION_ERRORS = {
    DATE_REQUIRED: 'Transaction date is required.',
    STATUS_REQUIRED: 'Transaction status is required.',
    TAGS_IS_ARRAY: 'Transaction tags must be a list',
    DESCRIPTION_REQUIRED: 'Transaction description is required.',
    TYPE_REQUIRED: 'Transaction type is required',
    ACCOUNT_TYPE_REQUIRED: 'Transaction account type is required',
    AMOUNT_REQUIRED: 'Transaction amount is required',
    AMOUNT_IS_NUMBER: 'Transaction amount must be a number'
};
exports.TRANSACTION_VALIDATION_GROUPS = {
    BASIC: 'BASIC',
    FULL: 'FULL'
};
exports.TransactionSchema = {
    name: 'transactionSchema',
    properties: {
        date: [
            {
                type: class_validator_1.ValidationTypes.IS_NOT_EMPTY,
                message: exports.TRANSACTION_VALIDATION_ERRORS.DATE_REQUIRED,
                groups: [exports.TRANSACTION_VALIDATION_GROUPS.BASIC, exports.TRANSACTION_VALIDATION_GROUPS.FULL]
            }
        ],
        status: [
            {
                type: class_validator_1.ValidationTypes.IS_NOT_EMPTY,
                message: exports.TRANSACTION_VALIDATION_ERRORS.STATUS_REQUIRED,
                groups: [exports.TRANSACTION_VALIDATION_GROUPS.BASIC, exports.TRANSACTION_VALIDATION_GROUPS.FULL]
            }
        ],
        tags: [
            {
                type: class_validator_1.ValidationTypes.IS_ARRAY,
                message: exports.TRANSACTION_VALIDATION_ERRORS.TAGS_IS_ARRAY,
                groups: [exports.TRANSACTION_VALIDATION_GROUPS.BASIC, exports.TRANSACTION_VALIDATION_GROUPS.FULL]
            }
        ],
        description: [
            {
                type: class_validator_1.ValidationTypes.IS_NOT_EMPTY,
                message: exports.TRANSACTION_VALIDATION_ERRORS.DESCRIPTION_REQUIRED,
                groups: [exports.TRANSACTION_VALIDATION_GROUPS.BASIC, exports.TRANSACTION_VALIDATION_GROUPS.FULL]
            }
        ],
        type: [{
                type: class_validator_1.ValidationTypes.IS_NOT_EMPTY,
                message: exports.TRANSACTION_VALIDATION_ERRORS.TYPE_REQUIRED,
                groups: [exports.TRANSACTION_VALIDATION_GROUPS.FULL]
            }],
        accountType: [{
                type: class_validator_1.ValidationTypes.IS_NOT_EMPTY,
                message: exports.TRANSACTION_VALIDATION_ERRORS.ACCOUNT_TYPE_REQUIRED,
                groups: [exports.TRANSACTION_VALIDATION_GROUPS.FULL]
            }],
        amount: [
            {
                type: class_validator_1.ValidationTypes.IS_NOT_EMPTY,
                message: exports.TRANSACTION_VALIDATION_ERRORS.AMOUNT_REQUIRED,
                groups: [exports.TRANSACTION_VALIDATION_GROUPS.FULL]
            },
            {
                type: class_validator_1.ValidationTypes.IS_NUMBER,
                constraints: [],
                message: exports.TRANSACTION_VALIDATION_ERRORS.AMOUNT_IS_NUMBER,
                groups: [exports.TRANSACTION_VALIDATION_GROUPS.FULL]
            }
        ]
    }
};
exports.TAG_RULE_VALIDATION_ERRORS = {
    FIELD_EMPTY: 'Field must not be empty.',
    OPERATOR_REQUIRED: 'Operator is required.',
    OPERAND_EMPTY: 'Operands must not be empty.'
};
exports.TagRuleSchema = {
    name: 'tagRuleSchema',
    properties: {
        field: [{
                type: class_validator_1.ValidationTypes.IS_NOT_EMPTY,
                message: exports.TAG_RULE_VALIDATION_ERRORS.FIELD_EMPTY
            }],
        operator: [{
                type: class_validator_1.ValidationTypes.IS_NOT_EMPTY,
                message: exports.TAG_RULE_VALIDATION_ERRORS.OPERATOR_REQUIRED
            }],
        operands: [{
                type: class_validator_1.ValidationTypes.ARRAY_NOT_EMPTY,
                message: exports.TAG_RULE_VALIDATION_ERRORS.OPERAND_EMPTY
            }]
    }
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
