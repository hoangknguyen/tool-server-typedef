import { AccountStatus }   from './models/AccountStatus';
import { MessageType }     from './models/MessageType';
import { SyncAccountType } from './models/SyncAccountType';
import { TransactionType } from './models/TransactionType';

export namespace Buxfer {
    export type MessageCallback = (message: BuxferMessage) => void;

    export interface WebApiResponse {
        status: string,
        mesg: string,
        html: string,
        sysError: number,
        authToken: string,
        invalidatedDataTypes: number[],
        script: string
    }

    export interface ReportRequest {
        minDate: string,
        maxDate: string,
        tags: string[]
    }

    /**
     * Sum of all transactions tagged with the tag name
     */
    export interface TagSum {
        tagName: string,
        total: number
    }

    export interface TagsResponse {
        response: {
            status: string,
            tags: Tag[]
        }
    }

    export interface Tag {
        id: string,
        name: string,
        parentId: string
    }

    export interface BuxferMessage {
        message: string;
        timestamp: number;
        type: MessageType;
        data?: object;
    }

    export interface ReportData {
        processed: number;
        failed?: number;
        total: number;
    }

    /**
     * The type of the response when a file is uploaded successfully
     */
    export interface UploadResponse extends BuxferResponse {
        id: string;
    }

    export interface BuxferResponse {
        code: number;
        status: string;
    }

    export interface BuxferAccount {
        id: number;
        name: string;
        bank: string;
        balance: number;
        currency: string;
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

    export interface AccountsResponse {
        response: {
            status: string,
            accounts: Buxfer.BuxferAccount[]
        }
    }

    export interface Transaction {
        date: string;
        referenceId?: string;
        ['type']?: TransactionType;
        status: AccountStatus;
        amount?: number | string;
        tags: string[];
        description: string;
        accountType: SyncAccountType;
        accountId?: number;
        fromAccountId?: number;
        toAccountId?: number;
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
        ['type']: TransactionType | string,
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
        fromAccount: {
            id: number,
            name: string
        },
        toAccount: {
            id: number,
            name: string
        },
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








