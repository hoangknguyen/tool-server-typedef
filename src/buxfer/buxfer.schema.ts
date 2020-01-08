import {
    ValidationSchema,
    ValidationTypes
} from 'class-validator';

export const MATCHING_RULE_GROUP_VALIDATION_ERRORS = {
    NAME_REQUIRED    : 'Rule Group name is required.',
    TAGS_EMPTY       : 'Tags must not be empty.',
    OPERATOR_REQUIRED: 'Operator is required.',
    OPERAND_EMPTY    : 'Operands must not be empty.'
};

export const MATCHING_RULE_GROUP_VALIDATION_GROUPS = {
    NESTED: 'NESTED',
    ROOT  : 'ROOT'
};

export const MatchingRuleGroupSchema: ValidationSchema = {
    name      : 'matchingRuleGroupSchema',
    properties: {
        name    : [ {
            type   : ValidationTypes.IS_NOT_EMPTY,
            message: MATCHING_RULE_GROUP_VALIDATION_ERRORS.NAME_REQUIRED,
            groups : [ MATCHING_RULE_GROUP_VALIDATION_GROUPS.NESTED, MATCHING_RULE_GROUP_VALIDATION_GROUPS.ROOT ]
        } ],
        tags    : [ {
            type   : ValidationTypes.ARRAY_NOT_EMPTY,
            message: MATCHING_RULE_GROUP_VALIDATION_ERRORS.TAGS_EMPTY,
            groups : [ MATCHING_RULE_GROUP_VALIDATION_GROUPS.ROOT ]
        } ],
        operator: [ {
            type   : ValidationTypes.IS_NOT_EMPTY,
            message: MATCHING_RULE_GROUP_VALIDATION_ERRORS.OPERATOR_REQUIRED,
            groups : [ MATCHING_RULE_GROUP_VALIDATION_GROUPS.NESTED, MATCHING_RULE_GROUP_VALIDATION_GROUPS.ROOT ]
        } ],
        operands: [ {
            type   : ValidationTypes.ARRAY_NOT_EMPTY,
            message: MATCHING_RULE_GROUP_VALIDATION_ERRORS.OPERAND_EMPTY,
            groups : [ MATCHING_RULE_GROUP_VALIDATION_GROUPS.NESTED, MATCHING_RULE_GROUP_VALIDATION_GROUPS.ROOT ]
        } ]
    }
};


export const MATCHING_RULE_VALIDATION_ERRORS = {
    FIELD_EMPTY      : 'Field must not be empty.',
    OPERATOR_REQUIRED: 'Operator is required.',
    OPERAND_EMPTY    : 'Operands must not be empty.'
};

export const MatchingRuleSchema: ValidationSchema = {
    name      : 'matchingRuleSchema',
    properties: {
        field   : [ {
            type   : ValidationTypes.IS_NOT_EMPTY,
            message: MATCHING_RULE_VALIDATION_ERRORS.FIELD_EMPTY
        } ],
        operator: [ {
            type   : ValidationTypes.IS_NOT_EMPTY,
            message: MATCHING_RULE_VALIDATION_ERRORS.OPERATOR_REQUIRED
        } ],
        operands: [ {
            type   : ValidationTypes.ARRAY_NOT_EMPTY,
            message: MATCHING_RULE_VALIDATION_ERRORS.OPERAND_EMPTY
        } ]
    }
};

export const TRANSACTION_VALIDATION_ERRORS = {
    DATE_REQUIRED        : 'Transaction date is required.',
    STATUS_REQUIRED      : 'Transaction status is required.',
    TAGS_IS_ARRAY        : 'Transaction tags must be a list',
    DESCRIPTION_REQUIRED : 'Transaction description is required.',
    TYPE_REQUIRED        : 'Transaction type is required',
    ACCOUNT_TYPE_REQUIRED: 'Transaction account type is required',
    AMOUNT_REQUIRED      : 'Transaction amount is required',
    AMOUNT_IS_NUMBER     : 'Transaction amount must be a number'
};

export const TRANSACTION_VALIDATION_GROUPS = {
    BASIC: 'BASIC',
    FULL : 'FULL'
};


export const TransactionSchema: ValidationSchema = {
    name      : 'transactionSchema',
    properties: {
        date       : [
            {
                type   : ValidationTypes.IS_NOT_EMPTY,
                message: TRANSACTION_VALIDATION_ERRORS.DATE_REQUIRED,
                groups : [ TRANSACTION_VALIDATION_GROUPS.BASIC, TRANSACTION_VALIDATION_GROUPS.FULL ]
            }
        ],
        status     : [
            {
                type   : ValidationTypes.IS_NOT_EMPTY,
                message: TRANSACTION_VALIDATION_ERRORS.STATUS_REQUIRED,
                groups : [ TRANSACTION_VALIDATION_GROUPS.BASIC, TRANSACTION_VALIDATION_GROUPS.FULL ]
            }
        ],
        tags       : [
            {
                type   : ValidationTypes.IS_ARRAY,
                message: TRANSACTION_VALIDATION_ERRORS.TAGS_IS_ARRAY,
                groups : [ TRANSACTION_VALIDATION_GROUPS.BASIC, TRANSACTION_VALIDATION_GROUPS.FULL ]
            }
        ],
        description: [
            {
                type   : ValidationTypes.IS_NOT_EMPTY,
                message: TRANSACTION_VALIDATION_ERRORS.DESCRIPTION_REQUIRED,
                groups : [ TRANSACTION_VALIDATION_GROUPS.BASIC, TRANSACTION_VALIDATION_GROUPS.FULL ]
            }
        ],
        type       : [ {
            type   : ValidationTypes.IS_NOT_EMPTY,
            message: TRANSACTION_VALIDATION_ERRORS.TYPE_REQUIRED,
            groups : [ TRANSACTION_VALIDATION_GROUPS.FULL ]
        } ],
        accountType: [ {
            type   : ValidationTypes.IS_NOT_EMPTY,
            message: TRANSACTION_VALIDATION_ERRORS.ACCOUNT_TYPE_REQUIRED,
            groups : [ TRANSACTION_VALIDATION_GROUPS.FULL ]
        } ],
        amount     : [
            {
                type   : ValidationTypes.IS_NOT_EMPTY,
                message: TRANSACTION_VALIDATION_ERRORS.AMOUNT_REQUIRED,
                groups : [ TRANSACTION_VALIDATION_GROUPS.FULL ]
            },
            {
                type       : ValidationTypes.IS_NUMBER,
                constraints: [],
                message    : TRANSACTION_VALIDATION_ERRORS.AMOUNT_IS_NUMBER,
                groups     : [ TRANSACTION_VALIDATION_GROUPS.FULL ]
            }
        ]
    }
};
