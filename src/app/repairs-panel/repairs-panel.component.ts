import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repairs-panel',
  templateUrl: './repairs-panel.component.html',
  styleUrls: ['./repairs-panel.component.scss'],
})
export class RepairsPanelComponent implements OnInit {
  repairPartMessages = [
    {
      repairPartName: '2005 Ford Freestyle 1',
    },
    {
      repairPartName: '2005 Ford Freestyle 2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
