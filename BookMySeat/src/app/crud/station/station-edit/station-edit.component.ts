import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-station-edit',
  templateUrl: './station-edit.component.html',
  styleUrls: ['./station-edit.component.css']
})
export class StationEditComponent implements OnInit {


  // @Input() stationData = { id_seat_reservation: 0, starting_time: '', release_time: '', user: null, seat: null };

  // user: User;
  // users: User[];
  // seat: Seat;
  // seats: Seat[];

  // reservations: SeatReservation[];
  // reservation: SeatReservation;
  // // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:max-line-length
  // constructor(private service: SeatReservationService, private service2: SeatService, private service3: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  //   // tslint:disable-next-line:no-string-literal
  //   this.service.getById(this.route.snapshot.params['id']).subscribe((data: SeatReservation) => {
  //     console.log(data);
  //     this.reservationData = data;
  //   });

  //   this.service2.findAll().subscribe((value: Seat[]) => this.seats = value);
  //   this.service3.findAll().subscribe((value: User[]) => this.users = value);

  }

  // // chargeSeat(id) {
  // //   this.service2.getById(id).subscribe((value: Seat) => this.seat = value);
  // // }

  // // chargeUser(id) {
  // //   this.service3.getById(id).subscribe((value: User) => this.user = value);
  // // }

  // update() {
  //   this.reservation = this.reservationData;
  //   // this.reservationData.seat = this.seat;
  //   // this.reservationData.user = this.user;
  //   this.service.update(this.reservation).subscribe((result) => {
  //     this.router.navigate(['/reservation/list']);
  //   });
  // }

}
