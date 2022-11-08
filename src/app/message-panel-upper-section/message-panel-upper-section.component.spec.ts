import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePanelUpperSectionComponent } from './message-panel-upper-section.component';

describe('MessagePanelUpperSectionComponent', () => {
  let component: MessagePanelUpperSectionComponent;
  let fixture: ComponentFixture<MessagePanelUpperSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagePanelUpperSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePanelUpperSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
