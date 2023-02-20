export declare const SyncAccountTypes: {
    HSBC: "HSBC";
    VIETCOMBANK: "VIETCOMBANK";
    WALLET: "WALLET";
};
export type SyncAccountType = typeof SyncAccountTypes[keyof typeof SyncAccountTypes];
