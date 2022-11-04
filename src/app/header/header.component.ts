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
      name: 'Wrench Repair City East 1',
      code: 'Wrench Repair City East 1',
    },
    {
      name: 'Wrench Repair City East 2',
      code: 'Wrench Repair City East 2',
    },
    {
      name: 'Wrench Repair City East 3',
      code: 'Wrench Repair City East 3',
    },
  ];
  dropdownValue = this.dropdownOptions[0].name;

  constructor() {}

  ngOnInit(): void {}
}
