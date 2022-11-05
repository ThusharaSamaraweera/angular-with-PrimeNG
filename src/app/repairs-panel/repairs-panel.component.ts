import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repairs-panel',
  templateUrl: './repairs-panel.component.html',
  styleUrls: ['./repairs-panel.component.scss'],
})
export class RepairsPanelComponent implements OnInit {
  repairPartMessages = [
    {
      partName: '2005 Ford Freestyle 1',
    },
    {
      partName: '2005 Ford Freestyle 2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
