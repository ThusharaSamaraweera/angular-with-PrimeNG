import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTypingSectionComponent } from './message-typing-section.component';

describe('MessageTypingSectionComponent', () => {
  let component: MessageTypingSectionComponent;
  let fixture: ComponentFixture<MessageTypingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageTypingSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageTypingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
