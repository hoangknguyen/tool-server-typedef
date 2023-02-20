export declare const AccountStatuses: {
    PENDING: "pending";
    CLEARED: "cleared";
    COMPLETED: "completed";
};
export type AccountStatus = typeof AccountStatuses[keyof typeof AccountStatuses];
