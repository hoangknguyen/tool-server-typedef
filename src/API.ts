/**
 * The rule that instruct the tag processing engine to assign tag to a transaction
 */
import { Buxfer }                            from './Buxfer';
import { ValidationSchema, ValidationTypes } from 'class-validator';

export const RuleOperatorNames: RuleOperators = {
    EQUAL             : '=',
    LESS_THAN         : '<',
    GREATER_THAN      : '>',
    LESS_THAN_EQUAL   : '<=',
    LIKE              : '~',
    GREATER_THAN_EQUAL: '>=',
    CONTAINS          : 'contains'
};


export const RuleGroupOperatorNames: RuleGroupOperators = {
    AND: 'AND',
    OR : 'OR'
};

export type RuleOperators = {
    EQUAL: '=',
    LESS_THAN: '<',
    GREATER_THAN: '>',
    LESS_THAN_EQUAL: '<=',
    GREATER_THAN_EQUAL: '>=',
    LIKE: '~',
    CONTAINS: 'contains'
};


export type RuleGroupOperators = {
    AND: 'AND',
    OR: 'OR'
}

export type RuleOperator = RuleOperators[keyof RuleOperators]

export type GroupRuleOperator = RuleGroupOperators[keyof RuleGroupOperators];

/**
 * Group of tag rules
 */
export interface TagRuleGroup {
    name?: string,
    tags: string[],
    operator: GroupRuleOperator,
    operands: (TagRule | TagRuleGroup)[]
}

export const TAG_RULE_GROUP_VALIDATION_ERRORS = {
    NAME_REQUIRED    : 'Rule Group name is required.',
    TAGS_EMPTY       : 'Tags must not be empty.',
    OPERATOR_REQUIRED: 'Operator is required.',
    OPERAND_EMPTY    : 'Operands must not be empty.'
};

export const TagRuleGroupSchema: ValidationSchema = {
    name      : 'tagRuleGroupSchema',
    properties: {
        name    : [{
            type   : ValidationTypes.IS_NOT_EMPTY,
            message: TAG_RULE_GROUP_VALIDATION_ERRORS.NAME_REQUIRED
        }],
        tags    : [{
            type       : ValidationTypes.MIN_LENGTH,
            constraints: [1],
            message    : TAG_RULE_GROUP_VALIDATION_ERRORS.TAGS_EMPTY
        }],
        operator: [{
            type   : ValidationTypes.IS_NOT_EMPTY,
            message: TAG_RULE_GROUP_VALIDATION_ERRORS.OPERATOR_REQUIRED
        }],
        operands: [{
            type       : ValidationTypes.MIN_LENGTH,
            constraints: [1],
            message    : TAG_RULE_GROUP_VALIDATION_ERRORS.OPERAND_EMPTY
        }]
    }
};

/**
 * Interface for tag rule
 */
export interface TagRule {
    name?: string,
    field: keyof Buxfer.Transaction;
    operator: RuleOperator,
    operands: string[]
}


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
