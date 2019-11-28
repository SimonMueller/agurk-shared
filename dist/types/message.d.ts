export interface Message<T> {
    readonly type: string;
    readonly data?: T;
}
