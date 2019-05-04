declare const AccountStatuses: ["pending", "cleared"];
export declare type AccountStatus = (typeof AccountStatuses)[number];
export declare const AccountStatusNames: {
    [k in AccountStatus]: k;
};
export {};
