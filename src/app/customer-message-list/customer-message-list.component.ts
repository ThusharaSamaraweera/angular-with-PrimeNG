import { Component, OnInit } from '@angular/core';
import { Sender } from './Sender';

@Component({
  selector: 'app-customer-message-list',
  templateUrl: './customer-message-list.component.html',
  styleUrls: ['./customer-message-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  appliedFilterCount: number = 2;
  listOfSenders: Sender[] = [
    {
      id: 1,
      messages: [{ id: 1, content: 'message 1', time: '20.00 2022/11/04' }],
      senderName: 'sender 1',
    },
    {
      id: 2,
      messages: [{ id: 2, content: 'message 3', time: '20.00 2022/11/04' }],
      senderName: 'sender 3',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
