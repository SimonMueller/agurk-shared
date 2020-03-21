import { Card } from './card';
import { PlayerId } from './player';
export interface ValidTurn {
    readonly cards: Card[];
    readonly playerId: PlayerId;
    readonly valid: true;
}
export interface InvalidTurn {
    readonly cards: Card[];
    readonly playerId: PlayerId;
    readonly valid: false;
    readonly invalidReason: string;
}
export declare type ValidatedTurn = InvalidTurn | ValidTurn;
