import { AccountStatus, MessageType, SyncAccountType, TransactionType } from '..';
export declare namespace Buxfer {
    type MessageCallback = (message: BuxferMessage) => void;
    interface WebApiResponse {
        status: string;
        mesg: string;
        html: string;
        sysError: number;
        authToken: string;
        invalidatedDataTypes: number[];
        script: string;
    }
    interface ReportRequest {
        minDate: string;
        maxDate: string;
        isPreview: boolean;
        tags: string[];
    }
    interface ReportDetailsRequest {
        minDate: string;
        maxDate: string;
        userId: string;
        isPreview: boolean;
    }
    type ResyncRequest = {} & ReportDetailsRequest;
    type ResyncResponse = {
        id: string;
    };
    /**
     * Sum of all transactions tagged with the tag name
     */
    interface TagSum {
        tagName: string;
        total: number;
    }
    interface TagsResponse {
        response: {
            status: string;
            tags: Tag[];
        };
    }
    interface Tag {
        id: string;
        name: string;
        parentId: string;
    }
    interface BuxferMessage {
        message: string;
        timestamp: number;
        type: MessageType;
        data?: object;
    }
    interface ReportData {
        processed: number;
        failed?: number;
        total: number;
    }
    /**
     * The type of the response when a file is uploaded successfully
     */
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
        ['type']: TransactionType | string;
        status: AccountStatus;
    }
    interface AddTransactionResponse {
        response: ExpandedTransaction;
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
        fromAccount: {
            id: number;
            name: string;
        };
        toAccount: {
            id: number;
            name: string;
        };
        isFutureDated: boolean;
        isPending: boolean;
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
