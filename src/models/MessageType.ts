import { tuple } from '../utils/utils';

const INFO = 'info';
const ERROR = 'error';
const COMPLETE = 'complete';
const DATA = 'data';
const TRANSACTION = 'Transaction';

export const MessageTypeNames: {
    [key in MessageType]: key
} = {
    [INFO]       : INFO,
    [ERROR]      : ERROR,
    [COMPLETE]   : COMPLETE,
    [DATA]       : DATA,
    [TRANSACTION]: TRANSACTION
};

// creating type
const MessageTypes = tuple(INFO, ERROR, COMPLETE, DATA, TRANSACTION);
/**
 * Load client configuration then build the TYPE
 */
export type MessageType = (typeof MessageTypes)[number];
