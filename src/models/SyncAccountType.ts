import { tuple } from '../utils/utils';

const HSBC = 'HSBC';
const VIETCOMBANK = 'VIETCOMBANK';

export const SyncAccountTypeNames: {
    [key in SyncAccountType]: key
} = {
    [HSBC]       : HSBC,
    [VIETCOMBANK]: VIETCOMBANK
};

// creating type
const SyncAccountTypes = tuple(HSBC, VIETCOMBANK);
/**
 * Load client configuration then build the TYPE
 */
export type SyncAccountType = (typeof SyncAccountTypes)[number];
