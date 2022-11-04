import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-message',
  templateUrl: './customer-message.component.html',
  styleUrls: ['./customer-message.component.scss'],
})
export class CustomerMessageComponent implements OnInit {
  title: string = 'Jk';
  name: string = 'Wade Johnson';
  lastMessage: string = 'Thank you';

  constructor() {}

  ngOnInit(): void {}
}
