declare const TransactionTypes: ["income", "expense", "transfer", "refund", "sharedBill", "paidForFriend", "loan"];
export declare type TransactionType = (typeof TransactionTypes)[number];
export declare const TransactionTypeNames: {
    [k in TransactionType]: k;
};
export {};
