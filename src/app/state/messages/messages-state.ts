import { Injectable } from "@angular/core";
import {Action, State, StateContext} from '@ngxs/store'
import { AddMessage } from "./message-actions";
import { MessageModel } from "./MessageModel";

export interface MessageStateModel{
  messages: MessageModel[]
}

@State<MessageStateModel>({
  name: 'message',
  defaults: {
    messages: []
  },
})
@Injectable()
export class MessageState {

  @Action(AddMessage)
  addMessage(ctx: StateContext<MessageStateModel>, actions: AddMessage) {
    const { message } = actions;

    if (!message) {
      return
    }

    const state = ctx.getState()
    ctx.setState({...state, messages: [...state.messages, message]})
  }
}
