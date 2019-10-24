import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatreservationFormComponent } from './seatreservation-form.component';

describe('SeatreservationFormComponent', () => {
  let component: SeatreservationFormComponent;
  let fixture: ComponentFixture<SeatreservationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatreservationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatreservationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
