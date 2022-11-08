import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchingValue!: string;
  dropdownOptions = [
    {
      label: 'Wrench Repair City East 1',
      value: 'Wrench Repair City East 1',
    },
    {
      label: 'Wrench Repair City East 2',
      value: 'Wrench Repair City East 2',
    },
    {
      label: 'Wrench Repair City East 3',
      value: 'Wrench Repair City East 3',
    },
  ];
  dropdownValue = this.dropdownOptions[0].value;
  title: string = "JK"

  constructor() {}

  ngOnInit(): void {}
}
