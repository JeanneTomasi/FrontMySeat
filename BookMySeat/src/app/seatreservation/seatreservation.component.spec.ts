import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatreservationComponent } from './seatreservation.component';

describe('SeatreservationComponent', () => {
  let component: SeatreservationComponent;
  let fixture: ComponentFixture<SeatreservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatreservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
