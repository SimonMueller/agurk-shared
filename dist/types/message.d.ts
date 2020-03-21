import { OutPlayer, PlayerId } from './player';
import { Card } from './card';
import { ValidatedTurn } from './turn';
import { Penalty } from './penalty';
import { Error } from './communication';
export declare type Message = StartGame | BroadcastStartGame | RequestCards | PlayCards | BroadcastStartPlayerTurn | BroadcastPlayerTurn | BroadcastStartRound | BroadcastEndRound | BroadcastStartCycle | BroadcastEndCycle | BroadcastEndGame | AvailableCardsInHand;
export declare type MessageData = StartGameData | EndGameData | StartCycleData | EndCycleData | StartRoundData | EndRoundData;
export interface StartGame {
    readonly name: 'START_GAME';
}
export interface StartGameData {
    readonly players: PlayerId[];
}
export interface BroadcastStartGame {
    readonly name: 'BROADCAST_START_GAME';
    readonly data: StartGameData;
}
export interface RequestCards {
    readonly name: 'REQUEST_CARDS';
}
export interface BroadcastStartPlayerTurn {
    readonly name: 'BROADCAST_START_PLAYER_TURN';
    readonly data: PlayerId;
}
export interface AvailableCardsInHand {
    readonly name: 'AVAILABLE_CARDS_IN_HAND';
    readonly data: Card[];
}
export interface PlayCards {
    readonly name: 'PLAY_CARDS';
    readonly data: Card[];
}
export interface BroadcastPlayerTurn {
    readonly name: 'BROADCAST_PLAYER_TURN';
    readonly data: ValidatedTurn;
}
export interface StartRoundData {
    readonly players: PlayerId[];
}
export interface BroadcastStartRound {
    readonly name: 'BROADCAST_START_ROUND';
    readonly data: StartRoundData;
}
export interface EndRoundData {
    readonly winner: PlayerId | undefined;
    readonly penalties: Penalty[];
    readonly outPlayers: OutPlayer[];
}
export interface BroadcastEndRound {
    readonly name: 'BROADCAST_END_ROUND';
    readonly data: EndRoundData;
}
export interface StartCycleData {
    readonly orderedPlayers: PlayerId[];
}
export interface BroadcastStartCycle {
    readonly name: 'BROADCAST_START_CYCLE';
    readonly data: StartCycleData;
}
export interface EndCycleData {
    readonly outPlayers: OutPlayer[];
    readonly highestTurnPlayers: PlayerId[];
}
export interface BroadcastEndCycle {
    readonly name: 'BROADCAST_END_CYCLE';
    readonly data: EndCycleData;
}
export interface EndGameData {
    readonly winner: PlayerId;
}
export interface BroadcastEndGame {
    readonly name: 'BROADCAST_END_GAME';
    readonly data: EndGameData | Error;
}
