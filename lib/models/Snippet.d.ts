export declare type Snippet = {
    name: string;
    snippetId?: string;
    type: string;
    createdDate: number;
    userId: string;
    tags?: string[];
    theme?: string;
    content: string;
};
export declare type SnippetSearchCriteria = Partial<{
    [k in keyof Snippet]: any;
}>;
