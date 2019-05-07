export declare const MessageTypeNames: {
    [key in MessageType]: key;
};
declare const MessageTypes: ["info", "error", "complete", "data", "Transaction"];
/**
 * Load client configuration then build the TYPE
 */
export declare type MessageType = (typeof MessageTypes)[number];
export {};
