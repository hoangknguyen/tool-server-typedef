declare const BuxferAccountTypes: ["income", "expense", "transfer", "refund", "sharedBill", "paidForFriend", "loan"];
export declare type BuxferAccountType = (typeof BuxferAccountTypes)[number];
export declare const BuxferAccountTypeNames: {
    [k in BuxferAccountType]: k;
};
export {};
