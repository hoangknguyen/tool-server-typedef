import { SyncAccountType } from './models/SyncAccountType';
import { BuxferAccountType } from './models/BuxferAccountType';
import { AccountStatus } from './models/AccountStatus';
import { MessageType } from './models/MessageType';
export declare namespace Buxfer {
    type ReportCallback = (message: BuxferReport) => void;
    interface BuxferReport {
        message: string;
        timestamp: number;
        ['type']: MessageType;
        data?: ReportData;
    }
    interface ReportData {
        processed: number;
        failed?: number;
        total: number;
    }
    interface UploadResponse extends BuxferResponse {
        id: string;
    }
    interface BuxferResponse {
        code: number;
        status: string;
    }
    interface BuxferAccount {
        id: number;
        name: string;
        bank: string;
        balance: number;
        currency: string;
    }
    interface TransactionsResponse {
        response: {
            numTransactions: number;
            transactions: ExpandedTransaction[];
            status: AccountStatus;
            request_id: number;
        };
    }
    interface TransactionRequest {
        accountId?: number;
        accountName?: string;
        tagId?: number;
        tagName?: string;
        startDate?: string;
        endDate?: string;
        month?: string;
        budgetId?: number;
        budgetName?: string;
        contactId?: number;
        contactName?: string;
        groupId?: number;
        groupName?: string;
        page?: number;
    }
    interface AccountsResponse {
        response: {
            status: string;
            accounts: Buxfer.BuxferAccount[];
        };
    }
    interface Transaction {
        date: string;
        referenceId?: string;
        ['type']: BuxferAccountType;
        status: AccountStatus;
        amount: number | string;
        tags: string[];
        description: string;
    }
    interface LoginResponse {
        response: {
            request_id: string;
            status: string;
            token: string;
        };
    }
    interface ErrorResponse {
        error: {
            request_id?: string;
            ['type']?: string;
            message: string;
        };
    }
    interface AddTransactionRequest {
        description: string;
        amount: number;
        accountId: number;
        fromAccountId: number;
        toAccountId?: number;
        date: string;
        tags?: string;
        ['type']: BuxferAccountType | string;
        status: AccountStatus;
    }
    interface AddTransactionResponse {
        response: {
            status: string;
            transactionAdded: boolean;
            parseStatus: string;
        };
    }
    interface ExpandedTransaction {
        id: number;
        description: string;
        date: string;
        normalizedDate: string;
        ['type']: string;
        transactionType: string;
        amount: number;
        expenseAmount: number;
        accountId: number;
        accountName: string;
        tags: string;
        tagNames: string[];
        status: string;
        isFutureDated: boolean;
    }
}
export declare namespace BuxferParser {
    interface TransactionParser {
        getType(): SyncAccountType;
        canParse(content: string): boolean;
        parse(content: string): Buxfer.Transaction[];
    }
    interface TransactionSelectorMapping {
        date?: string;
        referenceId?: string;
        amount?: number;
        ['type']?: string;
        description?: string;
    }
}
