import { TurnError } from './turn';

export interface Error {
  readonly error: string | TurnError;
}
