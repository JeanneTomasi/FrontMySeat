import { UserService } from './../../../../services/user.service';
import { User } from './../../../../models/user';
import { SeatService } from './../../../../services/seat.service';
import { SeatReservationService } from './../../../../services/seatreservation.service';
import { SeatReservation } from 'src/models/seatreservation';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Seat } from 'src/models/seat';
@Component({
  selector: 'app-seatreservation-edit',
  templateUrl: './seatreservation-edit.component.html',
  styleUrls: ['./seatreservation-edit.component.css']
})

export class SeatreservationEditComponent implements OnInit {

  @Input() reservationData = { id_seat_reservation: 0, starting_time: '', release_time: '', user: null, seat: null };

  user: User;
  users: User[];
  seat: Seat;
  seats: Seat[];

  reservations: SeatReservation[];
  reservation: SeatReservation;
  // tslint:disable-next-line:max-line-length
  constructor(private service: SeatReservationService, private service2: SeatService, private service3: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // tslint:disable-next-line:no-string-literal
    this.service.getById(this.route.snapshot.params['id']).subscribe((data: SeatReservation) => {
      console.log(data);
      this.reservationData = data;
    });

    this.service2.findAll().subscribe((value: Seat[]) => this.seats = value);
    this.service3.findAll().subscribe((value: User[]) => this.users = value);

  }

  // chargeSeat(id) {
  //   this.service2.getById(id).subscribe((value: Seat) => this.seat = value);
  // }

  // chargeUser(id) {
  //   this.service3.getById(id).subscribe((value: User) => this.user = value);
  // }

  update() {
    this.reservation = this.reservationData;
    // this.reservationData.seat = this.seat;
    // this.reservationData.user = this.user;
    this.service.update(this.reservation).subscribe((result) => {
      this.router.navigate(['/reservation/list']);
    });
  }

}


