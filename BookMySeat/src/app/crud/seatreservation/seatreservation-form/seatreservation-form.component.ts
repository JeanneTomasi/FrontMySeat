import { UserService } from './../../../../services/user.service';
import { User } from './../../../../models/user';
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

  reservationData: SeatReservation;
  // = { id_seat_reservation: 0, starting_time: '', release_time: '', user: null, seat: null };
  @Input() seatData = { id_seat: 0, placement: '', reservable: false, isReserved: false, vehicle: null };
  @Input() userData = {
    id_user: 0, name: '', firstName: '', dateDeNaissance: null, num: 0, street: '',
    city: '', postalCode: 0, country: '', email: '', handicap: '', username: ''
  };

  user: User;
  users: User[];
  seat: Seat;
  seats: Seat[];
  reservations: SeatReservation[];
  reservation: SeatReservation;

  // tslint:disable-next-line:max-line-length
  constructor(private service: SeatReservationService, private service2: SeatService, private service3: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.reservationData = new SeatReservation();
    this.service2.findAll().subscribe((value: Seat[]) => this.seats = value);
    this.service3.findAll().subscribe((value: User[]) => this.users = value);

  }

  // chargeSeat(id) {
  //   this.service2.getById(this.seatData.id_seat).subscribe((value: Seat) => this.seat = value);
  // }

  // chargeUser(id) {
  //   this.service3.getById(this.userData.id_user).subscribe((value: User) => this.user = value);
  // }

  add() {
    console.log(this.reservationData.seat);
    // this.service2.getById(this.reservationData.seat.id_seat).subscribe((value: Seat) => {
    //   this.seat = value;
    //   this.service3.getById(this.userData.id_user).subscribe((valueU: User) => {
    //     this.user = valueU;
    this.reservation = this.reservationData;
    // this.reservationData.user = this.user;
    // this.reservationData.seat = this.seat;
    this.service.add(this.reservation).subscribe((result) => {
      this.router.navigate(['/reservation/list']);
    });
    //   });

    // });

  }
}
