/**
 * The rule that instruct the tag processing engine to assign tag to a transaction
 */
import { ValidationSchema, ValidationTypes } from 'class-validator';
import { Buxfer }                            from './Buxfer';
import { t }                                 from './utils/utils';

// we could configure the field type inside a property file
// this is just to be used as a constant in the UI
export const FieldTypes = t({
    ARRAY: 'array',
    STRING: 'string',
    NUMBER: 'number',
    DATE: 'date',
    BOOLEAN: 'boolean'
});

export type FieldType = typeof FieldTypes[keyof typeof FieldTypes];

export const RuleActionTypes = t({
    DELETE: 'delete',
    MODIFY: 'modify',
    ADD_TAGS: 'add_tags',
    REMOVE_TAGS: 'remove_tags'
});

export type RuleActionType = typeof RuleActionTypes[keyof typeof RuleActionTypes];

export const MatchingRuleOperators = t({
    EQUAL: '=',
    LESS_THAN: '<',
    GREATER_THAN: '>',
    LESS_THAN_EQUAL: '<=',
    LIKE: '~',
    GREATER_THAN_EQUAL: '>=',
    CONTAINS: 'contains'
});

export type MatchingRuleOperator = typeof MatchingRuleOperators[keyof typeof MatchingRuleOperators];

export const MatchingRuleGroupOperators = t({
    AND: 'AND',
    OR: 'OR'
});

export type MatchingRuleGroupOperator = typeof MatchingRuleGroupOperators[keyof typeof MatchingRuleGroupOperators];

export type Action<O, T> = {
    data?: T,
    // keeping the order to make sure the action are run in the expected order
    order?: number,
    t?: RuleActionType,

    doAction(o: O, chain: ActionChain<O>): O | undefined
}


export interface ActionChain<O> {
    doAction(o: O): O | undefined;

    hasNext(): boolean;
}

/**
 * The model represents the action of the user on the transaction. Each action
 * includes a property for the field name and a property for the field value
 */
export interface FieldModifier {
    field: keyof Buxfer.Transaction,
    value: Buxfer.Transaction[keyof Buxfer.Transaction]
}

export type ReportItem = {
    name: string,
    transactions: Buxfer.ExpandedTransaction[],
    total: number,
    reportingType: ReportingGroupType
}

/**
 * Group of tag rules
 */
export interface MatchingRuleGroup {
    name?: string,
    tags: string[],
    operator: MatchingRuleGroupOperator,
    operands: (MatchingRule | MatchingRuleGroup)[],
    actions?: Action<Buxfer.Transaction, any>[]
}

export const MATCHING_RULE_GROUP_VALIDATION_ERRORS = {
    NAME_REQUIRED: 'Rule Group name is required.',
    TAGS_EMPTY: 'Tags must not be empty.',
    OPERATOR_REQUIRED: 'Operator is required.',
    OPERAND_EMPTY: 'Operands must not be empty.'
};

export const MATCHING_RULE_GROUP_VALIDATION_GROUPS = {
    NESTED: 'NESTED',
    ROOT: 'ROOT'
};

export const MatchingRuleGroupSchema: ValidationSchema = {
    name: 'matchingRuleGroupSchema',
    properties: {
        name: [ {
            type: ValidationTypes.IS_NOT_EMPTY,
            message: MATCHING_RULE_GROUP_VALIDATION_ERRORS.NAME_REQUIRED,
            groups: [ MATCHING_RULE_GROUP_VALIDATION_GROUPS.NESTED, MATCHING_RULE_GROUP_VALIDATION_GROUPS.ROOT ]
        } ],
        tags: [ {
            type: ValidationTypes.ARRAY_NOT_EMPTY,
            message: MATCHING_RULE_GROUP_VALIDATION_ERRORS.TAGS_EMPTY,
            groups: [ MATCHING_RULE_GROUP_VALIDATION_GROUPS.ROOT ]
        } ],
        operator: [ {
            type: ValidationTypes.IS_NOT_EMPTY,
            message: MATCHING_RULE_GROUP_VALIDATION_ERRORS.OPERATOR_REQUIRED,
            groups: [ MATCHING_RULE_GROUP_VALIDATION_GROUPS.NESTED, MATCHING_RULE_GROUP_VALIDATION_GROUPS.ROOT ]
        } ],
        operands: [ {
            type: ValidationTypes.ARRAY_NOT_EMPTY,
            message: MATCHING_RULE_GROUP_VALIDATION_ERRORS.OPERAND_EMPTY,
            groups: [ MATCHING_RULE_GROUP_VALIDATION_GROUPS.NESTED, MATCHING_RULE_GROUP_VALIDATION_GROUPS.ROOT ]
        } ]
    }
};

export const TRANSACTION_VALIDATION_ERRORS = {
    DATE_REQUIRED: 'Transaction date is required.',
    STATUS_REQUIRED: 'Transaction status is required.',
    TAGS_IS_ARRAY: 'Transaction tags must be a list',
    DESCRIPTION_REQUIRED: 'Transaction description is required.',
    TYPE_REQUIRED: 'Transaction type is required',
    ACCOUNT_TYPE_REQUIRED: 'Transaction account type is required',
    AMOUNT_REQUIRED: 'Transaction amount is required',
    AMOUNT_IS_NUMBER: 'Transaction amount must be a number'
};

export const TRANSACTION_VALIDATION_GROUPS = {
    BASIC: 'BASIC',
    FULL: 'FULL'
};


export const TransactionSchema: ValidationSchema = {
    name: 'transactionSchema',
    properties: {
        date: [
            {
                type: ValidationTypes.IS_NOT_EMPTY,
                message: TRANSACTION_VALIDATION_ERRORS.DATE_REQUIRED,
                groups: [ TRANSACTION_VALIDATION_GROUPS.BASIC, TRANSACTION_VALIDATION_GROUPS.FULL ]
            }
        ],
        status: [
            {
                type: ValidationTypes.IS_NOT_EMPTY,
                message: TRANSACTION_VALIDATION_ERRORS.STATUS_REQUIRED,
                groups: [ TRANSACTION_VALIDATION_GROUPS.BASIC, TRANSACTION_VALIDATION_GROUPS.FULL ]
            }
        ],
        tags: [
            {
                type: ValidationTypes.IS_ARRAY,
                message: TRANSACTION_VALIDATION_ERRORS.TAGS_IS_ARRAY,
                groups: [ TRANSACTION_VALIDATION_GROUPS.BASIC, TRANSACTION_VALIDATION_GROUPS.FULL ]
            }
        ],
        description: [
            {
                type: ValidationTypes.IS_NOT_EMPTY,
                message: TRANSACTION_VALIDATION_ERRORS.DESCRIPTION_REQUIRED,
                groups: [ TRANSACTION_VALIDATION_GROUPS.BASIC, TRANSACTION_VALIDATION_GROUPS.FULL ]
            }
        ],
        type: [ {
            type: ValidationTypes.IS_NOT_EMPTY,
            message: TRANSACTION_VALIDATION_ERRORS.TYPE_REQUIRED,
            groups: [ TRANSACTION_VALIDATION_GROUPS.FULL ]
        } ],
        accountType: [ {
            type: ValidationTypes.IS_NOT_EMPTY,
            message: TRANSACTION_VALIDATION_ERRORS.ACCOUNT_TYPE_REQUIRED,
            groups: [ TRANSACTION_VALIDATION_GROUPS.FULL ]
        } ],
        amount: [
            {
                type: ValidationTypes.IS_NOT_EMPTY,
                message: TRANSACTION_VALIDATION_ERRORS.AMOUNT_REQUIRED,
                groups: [ TRANSACTION_VALIDATION_GROUPS.FULL ]
            },
            {
                type: ValidationTypes.IS_NUMBER,
                constraints: [],
                message: TRANSACTION_VALIDATION_ERRORS.AMOUNT_IS_NUMBER,
                groups: [ TRANSACTION_VALIDATION_GROUPS.FULL ]
            }
        ]
    }
};


/**
 * Interface for tag rule
 */
export interface MatchingRule {
    name?: string,
    field: keyof Buxfer.Transaction;
    operator: MatchingRuleOperator,
    operands: string[]
}

export const MATCHING_RULE_VALIDATION_ERRORS = {
    FIELD_EMPTY: 'Field must not be empty.',
    OPERATOR_REQUIRED: 'Operator is required.',
    OPERAND_EMPTY: 'Operands must not be empty.'
};

export const MatchingRuleSchema: ValidationSchema = {
    name: 'matchingRuleSchema',
    properties: {
        field: [ {
            type: ValidationTypes.IS_NOT_EMPTY,
            message: MATCHING_RULE_VALIDATION_ERRORS.FIELD_EMPTY
        } ],
        operator: [ {
            type: ValidationTypes.IS_NOT_EMPTY,
            message: MATCHING_RULE_VALIDATION_ERRORS.OPERATOR_REQUIRED
        } ],
        operands: [ {
            type: ValidationTypes.ARRAY_NOT_EMPTY,
            message: MATCHING_RULE_VALIDATION_ERRORS.OPERAND_EMPTY
        } ]
    }
};


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

export const ReportingGroupTypes = t({
    EXPENSE: 'expense',
    INCOME: 'income'
});

export const ReportingTagTypes = t({
    STRING: 'string',
    REPORTING_TYPE: 'reporting_type'
});


export type ReportingGroup = {
    name: string,
    includeTags: ReportingTag[],
    excludeTags: ReportingTag[],
    reportingType: ReportingGroupType
};


export type ReportingTag = {
    name: string,
    tagType: string
};

export type ReportingGroupType = typeof ReportingGroupTypes[keyof typeof ReportingGroupTypes];
export type ReportingTagType = typeof ReportingTagTypes[keyof typeof ReportingTagTypes];
