import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatreservationEditComponent } from './seatreservation-edit.component';

describe('SeatreservationEditComponent', () => {
  let component: SeatreservationEditComponent;
  let fixture: ComponentFixture<SeatreservationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatreservationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatreservationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
