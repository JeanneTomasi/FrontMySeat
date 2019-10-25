import { SeatReservationService } from './../../../../services/seatreservation.service';
import { SeatService } from './../../../../services/seat.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seat } from 'src/models/seat';
import { SeatReservation } from 'src/models/seatreservation';
@Component({
  selector: 'app-seatreservation-form',
  templateUrl: './seatreservation-form.component.html',
  styleUrls: ['./seatreservation-form.component.css']
})
export class SeatreservationFormComponent implements OnInit {



  @Input() reservationData = { id_seat_reservation: 0, starting_time: '', release_time: '', seat: null };

  seat: Seat;
  seats: Seat[];
  reservations: SeatReservation[];
  reservation: SeatReservation;

  // tslint:disable-next-line:max-line-length
  constructor(private service: SeatReservationService, private serviceS: SeatService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.serviceS.findAll().subscribe((value: Seat[]) => this.seats = value);
  }

  chargeVehicle(id) {
    this.serviceS.getById(id).subscribe((value: Seat) => this.seat = value);
  }

  add() {
    this.reservationData.seat = this.seat;
    this.reservation = this.reservationData;
    this.service.add(this.reservation).subscribe((result) => {
      this.router.navigate(['/reservation/list']);
    });
  }
}
