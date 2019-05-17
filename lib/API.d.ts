/**
 * The rule that instruct the tag processing engine to assign tag to a transaction
 */
import { Buxfer } from './Buxfer';
import { ValidationSchema } from 'class-validator';
export declare const RuleOperatorNames: RuleOperators;
export declare const RuleGroupOperatorNames: RuleGroupOperators;
export declare type RuleOperators = {
    EQUAL: '=';
    LESS_THAN: '<';
    GREATER_THAN: '>';
    LESS_THAN_EQUAL: '<=';
    GREATER_THAN_EQUAL: '>=';
    LIKE: '~';
    CONTAINS: 'contains';
};
export declare type RuleGroupOperators = {
    AND: 'AND';
    OR: 'OR';
};
export declare type RuleOperator = RuleOperators[keyof RuleOperators];
export declare type GroupRuleOperator = RuleGroupOperators[keyof RuleGroupOperators];
/**
 * Group of tag rules
 */
export interface TagRuleGroup {
    name?: string;
    tags: string[];
    operator: GroupRuleOperator;
    operands: (TagRule | TagRuleGroup)[];
}
export declare const TAG_RULE_GROUP_VALIDATION_ERRORS: {
    NAME_REQUIRED: string;
    TAGS_EMPTY: string;
    OPERATOR_REQUIRED: string;
    OPERAND_EMPTY: string;
};
export declare const TagRuleGroupSchema: ValidationSchema;
/**
 * Interface for tag rule
 */
export interface TagRule {
    name?: string;
    field: keyof Buxfer.Transaction;
    operator: RuleOperator;
    operands: string[];
}
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
