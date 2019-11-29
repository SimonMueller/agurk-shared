export interface Message<T> {
  readonly name: string;
  readonly data?: T;
}
