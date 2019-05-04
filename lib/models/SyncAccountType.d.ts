export declare const SyncAccountTypeNames: {
    [key in SyncAccountType]: key;
};
declare const SyncAccountTypes: ["HSBC", "VIETCOMBANK"];
/**
 * Load client configuration then build the TYPE
 */
export declare type SyncAccountType = (typeof SyncAccountTypes)[number];
export {};
