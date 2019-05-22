export type Snippet = {
    name: string,
    snippetId?: string,
    type: string,
    createdDate: number,
    userId: string,
    tags?: string[],
    content: string
}
