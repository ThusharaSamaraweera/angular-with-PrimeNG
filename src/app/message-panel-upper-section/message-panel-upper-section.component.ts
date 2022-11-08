import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-panel-upper-section',
  templateUrl: './message-panel-upper-section.component.html',
  styleUrls: ['./message-panel-upper-section.component.scss'],
})
export class MessagePanelUpperSectionComponent implements OnInit {
  roNo: string = 'RO1231231';
  vin: string = 'MPSUMFE60JX163700';
  insurer: string = 'ABC Insurance';
  claimNo: string = 'CL-4527';
  dropdownAssignedUserOrTeam = [
    { label: 'Eddie1', value: 'eddie1', imageUrl: '' },
    { label: 'Eddie2', value: 'eddie2', imageUrl: '' },
    { label: 'Eddie3', value: 'eddie3', imageUrl: '' },
  ];
  assignedUserOrTeam = this.dropdownAssignedUserOrTeam[0].value;
  
  constructor() {}

  ngOnInit(): void {}
}
