import { Message } from '../types/message';
import { MessageType } from '../types/messageType';

// eslint-disable-next-line import/prefer-default-export
export function create<T>(messageType: MessageType, data?: T): Message<T> {
  return {
    type: messageType.name,
    data,
  };
}
