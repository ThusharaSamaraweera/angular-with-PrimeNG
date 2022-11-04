import { Component, OnInit, Input } from '@angular/core';
import { Sender } from '../customer-message-list/Sender';

@Component({
  selector: 'app-customer-message',
  templateUrl: './customer-message.component.html',
  styleUrls: ['./customer-message.component.scss'],
})
export class CustomerMessageComponent implements OnInit {
  title: string = 'Jk';
  @Input() sender!: Sender;

  constructor() {}

  ngOnInit(): void {
    this.title = this.sender.senderName.split(" ").map((n) => n[0].toUpperCase()).join("")
  }
}
