export declare const MessageTypes: {
    INFO: "info";
    ERROR: "error";
    COMPLETE: "complete";
    DATA: "data";
    TRANSACTION: "transaction";
};
/**
 * Load client configuration then build the TYPE
 */
export declare type MessageType = typeof MessageTypes[keyof typeof MessageTypes];
