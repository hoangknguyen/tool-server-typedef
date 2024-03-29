import { Buxfer } from './buxfer.namespace';
/**
 * The model represents the action of the user on the transaction. Each action
 * includes a property for the field name and a property for the field value
 */
export interface FieldModifier {
    field: keyof Buxfer.Transaction;
    value: Buxfer.Transaction[keyof Buxfer.Transaction];
}
export type BuxferCredential = {
    username: string;
    password: string;
};
export declare const ReportingGroupTypes: {
    EXPENSE: "expense";
    INCOME: "income";
};
export declare const ReportingTagTypes: {
    STRING: "string";
    REPORTING_TYPE: "reporting_type";
};
export type ReportingGroup = {
    name: string;
    includeTags: ReportingTag[];
    excludeTags: ReportingTag[];
    reportingType: ReportingGroupType;
};
export type ReportingTag = {
    name: string;
    tagType: string;
};
export type ReportingGroupType = typeof ReportingGroupTypes[keyof typeof ReportingGroupTypes];
export type ReportingTagType = typeof ReportingTagTypes[keyof typeof ReportingTagTypes];
export declare const RuleActionTypes: {
    DELETE: "delete";
    MODIFY: "modify";
    ADD_TAGS: "add_tags";
    REMOVE_TAGS: "remove_tags";
};
export type RuleActionType = typeof RuleActionTypes[keyof typeof RuleActionTypes];
export declare const MatchingRuleOperators: {
    EQUAL: "=";
    LESS_THAN: "<";
    GREATER_THAN: ">";
    LESS_THAN_EQUAL: "<=";
    LIKE: "~";
    GREATER_THAN_EQUAL: ">=";
    CONTAINS: "contains";
};
export type MatchingRuleOperator = typeof MatchingRuleOperators[keyof typeof MatchingRuleOperators];
export declare const MatchingRuleGroupOperators: {
    AND: "AND";
    OR: "OR";
};
export type MatchingRuleGroupOperator = typeof MatchingRuleGroupOperators[keyof typeof MatchingRuleGroupOperators];
export type Action<O, T = any> = {
    data?: T;
    order?: number;
    t?: RuleActionType;
    doAction(o: O, chain: ActionChain<O>): O | undefined;
};
export interface ActionChain<O> {
    doAction(o: O): O | undefined;
    hasNext(): boolean;
}
export type ReportItem = {
    name: string;
    transactions: Buxfer.ExpandedTransaction[];
    total: number;
    reportingType: ReportingGroupType;
};
export type MonthlyReportItem = {
    fromDate: string;
    toDate: string;
    items: ReportItem[];
};
export declare const OperandTypes: {
    DATE: "date";
    NUMBER: "number";
    INPUT: "input";
    SELECT: "select";
    LIST: "list";
};
export type OperandType = typeof OperandTypes[keyof typeof OperandTypes];
/**
 * Interface for tag rule
 */
export interface MatchingRule {
    name?: string;
    field: keyof Buxfer.Transaction;
    operator: MatchingRuleOperator;
    operands: string[];
}
/**
 * BUXFER API request/response models
 */
export type SaveBuxferConfigurationRequest = {
    userId: string;
    matchingRuleGroups: MatchingRuleGroup[];
};
/**
 * Group of tag rules
 */
export interface MatchingRuleGroup {
    name?: string;
    tags: string[];
    operator: MatchingRuleGroupOperator;
    operands: (MatchingRule | MatchingRuleGroup)[];
    actions?: Action<Buxfer.Transaction, any>[];
}
export type SelectOption = {
    code: string;
    title: string;
};
export type Operand = {
    ['type']: OperandType;
    defaultValue?: string;
    values?: SelectOption[];
};
export type OperatorOperand = {
    field: keyof Buxfer.Transaction | 'accountType';
    operands: Operand[];
};
