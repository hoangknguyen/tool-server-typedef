export declare const MessageTypes: {
    INFO: "info";
    ERROR: "error";
    COMPLETE: "complete";
    DATA: "data";
    TRANSACTION: "transaction";
};
export declare const SocketEvents: {
    DATA: "data";
    MESSAGE: "message";
};
/**
 * Load client configuration then build the TYPE
 */
export type MessageType = typeof MessageTypes[keyof typeof MessageTypes];
