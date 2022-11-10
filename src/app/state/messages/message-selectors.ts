import { Selector } from '@ngxs/store';
import { MessageModel } from './MessageModel';
import { MessageState, MessageStateModel } from './messages-state';

export class MessageSelector {
  @Selector([MessageState])
  static messages(state: MessageStateModel): MessageModel[] {
    return state.messages;
  }
}
