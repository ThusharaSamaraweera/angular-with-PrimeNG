import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairPartComponent } from './repair-part.component';

describe('RepairPartComponent', () => {
  let component: RepairPartComponent;
  let fixture: ComponentFixture<RepairPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
