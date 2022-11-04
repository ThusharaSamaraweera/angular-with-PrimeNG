import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-message-list',
  templateUrl: './customer-message-list.component.html',
  styleUrls: ['./customer-message-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  appliedFilterCount: number = 2;

  constructor() {}

  ngOnInit(): void {}
}
