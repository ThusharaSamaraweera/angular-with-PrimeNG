import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MessageSelector } from '../state/messages/message-selectors';
import { MessageModel } from '../state/messages/MessageModel';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
})
export class MessageListComponent implements OnInit {
  title: string = 'JK';
  @Select(MessageSelector.messages) messages!: Observable<MessageModel[]>;
  constructor() {}

  ngOnInit(): void {}
}
