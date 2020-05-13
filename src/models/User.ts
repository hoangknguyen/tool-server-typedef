import { BuxferCredential, ReportingGroup } from '../buxfer';

export type UserConfiguration = {
    userId: string,
    reportingGroups: ReportingGroup[];
    buxfer?: BuxferCredential;
};
