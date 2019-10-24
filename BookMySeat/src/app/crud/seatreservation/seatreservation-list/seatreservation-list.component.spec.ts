import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatreservationListComponent } from './seatreservation-list.component';

describe('SeatreservationListComponent', () => {
  let component: SeatreservationListComponent;
  let fixture: ComponentFixture<SeatreservationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatreservationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatreservationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
