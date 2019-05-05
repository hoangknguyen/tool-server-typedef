import { SyncAccountType }   from './models/SyncAccountType';
import { BuxferAccountType } from './models/BuxferAccountType';
import { AccountStatus }     from './models/AccountStatus';
import { MessageType }       from './models/MessageType';

export namespace Buxfer {
    export type ReportCallback = (message: BuxferReport) => void;

    export interface BuxferReport {
        message: string,
        timestamp: number,
        ['type']: MessageType,
        data?: ReportData
    }

    export interface ReportData {
        processed: number
        failed?: number
        total: number
    }

    export interface UploadResponse extends BuxferResponse {
        id: string
    }

    export interface BuxferResponse {
        code: number,
        status: string
    }

    export interface BuxferAccount {
        id: number,
        name: string,
        bank: string,
        balance: number,
        currency: string
    }

    export interface TransactionsResponse {
        response: {
            numTransactions: number,
            transactions: ExpandedTransaction[],
            status: AccountStatus,
            request_id: number
        }
    }

    export interface TransactionRequest {
        accountId?: number,
        accountName?: string,
        tagId?: number,
        tagName?: string,
        startDate?: string,
        endDate?: string,
        month?: string,
        budgetId?: number,
        budgetName?: string,
        contactId?: number,
        contactName?: string,
        groupId?: number,
        groupName?: string,
        page?: number
    }

    export interface AccountsResponse {
        response: {
            status: string,
            accounts: Buxfer.BuxferAccount[]
        }
    }

    export interface Transaction {
        date: string,
        referenceId?: string,
        ['type']: BuxferAccountType,
        status: AccountStatus,
        accountType: SyncAccountType,
        amount: number | string,
        tags: string[],
        description: string
    }

    export interface LoginResponse {
        response: {
            request_id: string,
            status: string,
            token: string
        }
    }

    export interface ErrorResponse {
        error: {
            request_id?: string,
            ['type']?: string,
            message: string
        }
    }

    export interface AddTransactionRequest {
        description: string,
        amount: number,
        accountId: number,
        fromAccountId: number,
        toAccountId?: number,
        date: string,
        tags?: string,
        ['type']: BuxferAccountType | string,
        status: AccountStatus;
    }

    export interface AddTransactionResponse {
        response: {
            status: string,
            transactionAdded: boolean,
            parseStatus: string
        }
    }

    export interface ExpandedTransaction {
        id: number,
        description: string,
        date: string,
        normalizedDate: string,
        ['type']: string,
        transactionType: string,
        amount: number,
        expenseAmount: number,
        accountId: number,
        accountName: string,
        tags: string,
        tagNames: string[],
        status: string,
        isFutureDated: boolean
    }
}


export namespace BuxferParser {
    export interface TransactionParser {
        getType(): SyncAccountType

        canParse(content: string): boolean

        parse(content: string): Buxfer.Transaction[]
    }

    export interface TransactionSelectorMapping {
        date?: string;
        referenceId?: string;
        amount?: number;
        ['type']?: string;
        description?: string;
    }
}








