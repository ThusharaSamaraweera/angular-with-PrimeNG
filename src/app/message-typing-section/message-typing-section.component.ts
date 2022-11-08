import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-typing-section',
  templateUrl: './message-typing-section.component.html',
  styleUrls: ['./message-typing-section.component.scss'],
})
export class MessageTypingSectionComponent implements OnInit {
  numberOptions = [
    { label: '+1 234 343 2323', value: '+1 234 343 2323' },
    { label: '+1 234 343 2323', value: '+1 234 343 2323' },
    { label: '+1 234 343 2323', value: '+1 234 343 2323' },
  ];

  selectedNumber = this.numberOptions[0].value;
  options1 = [
    {
      icon: 'pi pi-refresh',
      command: () => {},
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
