import { tuple } from '../utils/utils';

const PENDING = 'pending';
const CLEARED = 'cleared';

// creating type
const AccountStatuses = tuple(PENDING, CLEARED);

export type AccountStatus = (typeof AccountStatuses)[number];

export const AccountStatusNames: { [k in AccountStatus]: k } = {
    [PENDING]: PENDING,
    [CLEARED]: CLEARED
};
