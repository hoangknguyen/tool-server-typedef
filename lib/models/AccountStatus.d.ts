export declare const AccountStatuses: {
    PENDING: "pending";
    CLEARED: "cleared";
    COMPLETED: "completed";
};
export declare type AccountStatus = typeof AccountStatuses[keyof typeof AccountStatuses];
