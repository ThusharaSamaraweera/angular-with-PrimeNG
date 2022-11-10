import { MessageModel } from "./MessageModel";

export class AddMessage {
  static readonly type = '[Message] Add message'
  constructor(public message: MessageModel){}
}
