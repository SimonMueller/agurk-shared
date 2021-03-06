import { OutPlayer, PlayerId } from './player';
import { Card } from './card';
import { ValidatedTurn } from './turn';
import { Penalty } from './penalty';
import MessageName from '../communication/messageName';
export interface RequestCardsData {
    readonly timeoutInMillis: number;
    readonly retriesLeft: number;
}
export interface StartCycleData {
    readonly orderedPlayers: PlayerId[];
    readonly isLastOfRound: boolean;
}
export interface EndGameData {
    readonly isValid: true;
    readonly winner: PlayerId;
}
export interface EndGameErrorData {
    readonly isValid: false;
    readonly errorMessage: string;
}
export interface EndRoundData {
    readonly winner: PlayerId | undefined;
    readonly penalties: Penalty[];
    readonly outPlayers: OutPlayer[];
}
export interface EndCycleData {
    readonly outPlayers: OutPlayer[];
    readonly highestTurnPlayers: PlayerId[];
    readonly delayAfterEndInMillis: number;
}
export interface StartGameData {
    readonly players: PlayerId[];
}
export interface StartRoundData {
    readonly players: PlayerId[];
}
export declare type MessageData = StartGameData | EndGameData | EndGameErrorData | StartCycleData | EndCycleData | StartRoundData | EndRoundData | PlayerId | Card[] | ValidatedTurn | PlayerId[] | RequestCardsData | OutPlayer;
interface Message<T extends MessageName> {
    readonly name: T;
    readonly data?: MessageData;
}
export declare type StartGame = Message<typeof MessageName.START_GAME>;
export interface BroadcastOutPlayerAfterTurn extends Message<typeof MessageName.BROADCAST_OUT_PLAYER_AFTER_TURN> {
    readonly data: OutPlayer;
}
export interface BroadcastStartGame extends Message<typeof MessageName.BROADCAST_START_GAME> {
    readonly data: StartGameData;
}
export interface RequestCards extends Message<typeof MessageName.REQUEST_CARDS> {
    readonly data: RequestCardsData;
}
export interface BroadcastStartPlayerTurn extends Message<typeof MessageName.BROADCAST_START_PLAYER_TURN> {
    readonly data: PlayerId;
}
export interface AvailableCardsInHand extends Message<typeof MessageName.AVAILABLE_CARDS_IN_HAND> {
    readonly data: Card[];
}
export interface PlayCards extends Message<typeof MessageName.PLAY_CARDS> {
    readonly data: Card[];
}
export interface BroadcastPlayerTurn extends Message<typeof MessageName.BROADCAST_PLAYER_TURN> {
    readonly data: ValidatedTurn;
}
export interface BroadcastStartRound extends Message<typeof MessageName.BROADCAST_START_ROUND> {
    readonly data: StartRoundData;
}
export interface BroadcastEndRound extends Message<typeof MessageName.BROADCAST_END_ROUND> {
    readonly data: EndRoundData;
}
export interface BroadcastStartCycle extends Message<typeof MessageName.BROADCAST_START_CYCLE> {
    readonly data: StartCycleData;
}
export interface BroadcastEndCycle extends Message<typeof MessageName.BROADCAST_END_CYCLE> {
    readonly data: EndCycleData;
}
export interface BroadcastEndGame extends Message<typeof MessageName.BROADCAST_END_GAME> {
    readonly data: EndGameData | EndGameErrorData;
}
export interface BroadcastLobbyPlayers extends Message<typeof MessageName.BROADCAST_LOBBY_PLAYERS> {
    readonly data: PlayerId[];
}
export interface Authenticate extends Message<typeof MessageName.AUTHENTICATE> {
    readonly data: string;
}
export declare type RequestAuthentication = Message<typeof MessageName.REQUEST_AUTHENTICATION>;
export declare type GameMessage = StartGame | BroadcastStartGame | RequestCards | PlayCards | BroadcastStartPlayerTurn | BroadcastPlayerTurn | BroadcastStartRound | BroadcastEndRound | BroadcastStartCycle | BroadcastLobbyPlayers | BroadcastEndCycle | BroadcastEndGame | AvailableCardsInHand | Authenticate | RequestAuthentication | BroadcastOutPlayerAfterTurn;
export {};
