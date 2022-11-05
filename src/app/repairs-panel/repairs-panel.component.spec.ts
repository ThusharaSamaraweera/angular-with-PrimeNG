import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsPanelComponent } from './repairs-panel.component';

describe('RepairsPanelComponent', () => {
  let component: RepairsPanelComponent;
  let fixture: ComponentFixture<RepairsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
