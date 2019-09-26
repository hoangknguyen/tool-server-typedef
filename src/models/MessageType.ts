import { t } from '../utils/utils';

export const MessageTypes = t({
  INFO       : 'info',
  ERROR      : 'error',
  COMPLETE   : 'complete',
  DATA       : 'data',
  TRANSACTION: 'transaction'
});

/**
 * Load client configuration then build the TYPE
 */
export type MessageType = typeof MessageTypes[keyof typeof MessageTypes];
