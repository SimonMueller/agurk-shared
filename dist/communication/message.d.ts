import { Message } from '../types/message';
import MessageName from './messageName';
export default function create<T>(messageName: MessageName, data?: T): Message<T>;
