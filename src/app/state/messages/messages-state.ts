import { Injectable } from "@angular/core";
import {State} from '@ngxs/store'
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
  addMessage(){}
}
