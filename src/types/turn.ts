import { Card } from './card';
import { PlayerId } from './player';

export interface TurnError {
  readonly playerId: PlayerId;
  readonly message: string;
}

export interface ValidatedTurn {
  readonly cards: Card[];
  readonly playerId: PlayerId;
  readonly valid: boolean;
}
