import { Message } from '../types/message';
import { MessageType } from '../types/messageType';
export declare function create<T>(messageType: MessageType, data?: T): Message<T>;
