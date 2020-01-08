import { t } from '@utils/utils';


export const SyncAccountTypes = t({
    HSBC       : 'HSBC',
    VIETCOMBANK: 'VIETCOMBANK',
    WALLET     : 'WALLET'
});

export type SyncAccountType = typeof SyncAccountTypes[keyof typeof SyncAccountTypes];
