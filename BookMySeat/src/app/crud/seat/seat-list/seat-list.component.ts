import { SeatService } from './../../../../services/seat.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seat } from 'src/models/seat';
@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.css']
})
export class SeatListComponent implements OnInit {

  seats: Seat[] = [];
  seat: Seat;

  constructor(private service: SeatService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((value: Seat[]) => this.seats = value);
  }

  add() {
    this.router.navigate(['/seat/form']);
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
    this.router.navigate(['/seat/edit', id]);
    // this.service.editMode = true;
  }


}
