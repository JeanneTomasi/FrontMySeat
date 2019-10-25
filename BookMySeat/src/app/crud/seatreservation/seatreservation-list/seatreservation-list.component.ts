import { SeatReservationService } from './../../../../services/seatreservation.service';
import { SeatReservation } from './../../../../models/seatreservation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seat } from 'src/models/seat';
@Component({
  selector: 'app-seatreservation-list',
  templateUrl: './seatreservation-list.component.html',
  styleUrls: ['./seatreservation-list.component.css']
})
export class SeatreservationListComponent implements OnInit {

  reservations: SeatReservation[] = [];
  reservation: SeatReservation;

  constructor(private service: SeatReservationService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((value: SeatReservation[]) => this.reservations = value);
  }

  add() {
    this.router.navigate(['/reservation/form']);
  }

  delete(id) {
    this.service.delete(id)
      .subscribe(res => {
        this.findAll();
      }, (err) => {
        console.log(err);
      }
      );
  }

  edit(id) {
    this.router.navigate(['/reservation/edit', id]);
    // this.service.editMode = true;
  }


}
