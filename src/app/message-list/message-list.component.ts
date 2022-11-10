import { Component, OnInit } from '@angular/core';
import { MessageModel } from '../state/messages/MessageModel';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
})
export class MessageListComponent implements OnInit {
  title: string = 'JK';
  messages: MessageModel[] = [
    { id: '1', content: 'message1', time: new Date() },
    { id: '2', content: 'message2', time: new Date() },
  ];
  constructor() {}

  ngOnInit(): void {}
}
