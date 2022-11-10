import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddMessage } from '../state/messages/message-actions';
import { MessageModel } from '../state/messages/MessageModel';

@Component({
  selector: 'app-message-typing-section',
  templateUrl: './message-typing-section.component.html',
  styleUrls: ['./message-typing-section.component.scss'],
})
export class MessageTypingSectionComponent implements OnInit {
  typingMessage!: string;
  numberOptions = [
    { label: '+1 234 343 2323', value: '+1 234 343 2323' },
    { label: '+1 234 343 2323', value: '+1 234 343 2323' },
    { label: '+1 234 343 2323', value: '+1 234 343 2323' },
  ];

  selectedNumber = this.numberOptions[0].value;
  options1 = [
    {
      icon: 'pi pi-refresh',
      command: () => {},
    },
  ];
  constructor(private store: Store) {}

  ngOnInit(): void {}

  onClickSendBtn() {
    if (!this.typingMessage) {
      return;
    }

    const newMessage: MessageModel = {
      id: Math.round(Math.random() * 1000),
      content: this.typingMessage,
      time: new Date().toLocaleString(),
    };
    this.store.dispatch(new AddMessage(newMessage));
    this.typingMessage = '';
  }
}
