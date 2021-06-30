import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsDueComponent } from './bills-due.component';

describe('BillsDueComponent', () => {
  let component: BillsDueComponent;
  let fixture: ComponentFixture<BillsDueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsDueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
