import { OutPlayer, PlayerId } from './player';
import { Card } from './card';
import { TurnError, ValidatedTurn } from './turn';
import { Penalty } from './penalty';
export declare type Message = BroadcastPlayers | StartGame | BroadcastStartGame | DealtCards | BroadcastPlayerOrder | RequestCards | PlayCards | BroadcastPlayerTurn | BroadcastPlayerTurnError | BroadcastRoundWinner | BroadcastPenalties | BroadcastOutPlayers | BroadcastGameWinner | BroadcastStartRound | BroadcastEndRound | BroadcastStartCycle | BroadcastEndCycle | BroadcastStartPlayerTurn | BroadcastGameError | Error | BroadcastEndGame;
interface BroadcastPlayers {
    readonly name: 'BROADCAST_PLAYERS';
    readonly data: PlayerId[];
}
interface StartGame {
    readonly name: 'START_GAME';
}
interface BroadcastStartGame {
    readonly name: 'BROADCAST_START_GAME';
}
interface DealtCards {
    readonly name: 'DEALT_CARDS';
    readonly data: Card[];
}
interface BroadcastPlayerOrder {
    readonly name: 'BROADCAST_PLAYER_ORDER';
    readonly data: PlayerId[];
}
interface RequestCards {
    readonly name: 'REQUEST_CARDS';
}
interface PlayCards {
    readonly name: 'PLAY_CARDS';
    readonly data: Card[];
}
interface BroadcastPlayerTurn {
    readonly name: 'BROADCAST_PLAYER_TURN';
    readonly data: ValidatedTurn;
}
interface BroadcastPlayerTurnError {
    readonly name: 'BROADCAST_PLAYER_TURN_ERROR';
    readonly data: TurnError;
}
interface BroadcastRoundWinner {
    readonly name: 'BROADCAST_ROUND_WINNER';
    readonly data: PlayerId;
}
interface BroadcastPenalties {
    readonly name: 'BROADCAST_PENALTIES';
    readonly data: Penalty[];
}
interface BroadcastOutPlayers {
    readonly name: 'BROADCAST_OUT_PLAYERS';
    readonly data: OutPlayer[];
}
interface BroadcastGameWinner {
    readonly name: 'BROADCAST_GAME_WINNER';
    readonly data: PlayerId;
}
interface BroadcastStartRound {
    readonly name: 'BROADCAST_START_ROUND';
}
interface BroadcastEndRound {
    readonly name: 'BROADCAST_END_ROUND';
}
interface BroadcastStartCycle {
    readonly name: 'BROADCAST_START_CYCLE';
}
interface BroadcastStartPlayerTurn {
    readonly name: 'BROADCAST_START_PLAYER_TURN';
}
interface BroadcastEndCycle {
    readonly name: 'BROADCAST_END_CYCLE';
}
interface BroadcastEndGame {
    readonly name: 'BROADCAST_END_GAME';
}
interface Error {
    readonly name: 'ERROR';
    readonly data: Error;
}
interface BroadcastGameError {
    readonly name: 'BROADCAST_GAME_ERROR';
    readonly data: Error;
}
export {};
