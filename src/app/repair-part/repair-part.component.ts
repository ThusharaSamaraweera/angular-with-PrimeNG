import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repair-part',
  templateUrl: './repair-part.component.html',
  styleUrls: ['./repair-part.component.scss'],
})
export class RepairPartComponent implements OnInit {
  @Input() repair!: any;
  dropdownOptions = [
    { label: 'New1', value: 'new1' },
    { label: 'New2', value: 'new2' },
    { label: 'New3 ', value: 'new3' },
  ];

  dropdownSelectedValue = this.dropdownOptions[0].value;

  constructor() {}

  ngOnInit(): void {}
}
