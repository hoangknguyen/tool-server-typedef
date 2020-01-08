import { t } from '@utils/utils';
// creating type
export const AccountStatuses = t({
  PENDING: 'pending',
  CLEARED: 'cleared',
  COMPLETED: 'completed'
});

export type AccountStatus = typeof AccountStatuses[keyof typeof AccountStatuses];
