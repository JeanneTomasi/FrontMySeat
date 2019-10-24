import { SeatService } from './../../../../services/seat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Seat } from 'src/models/seat';
@Component({
  selector: 'app-seat-edit',
  templateUrl: './seat-edit.component.html',
  styleUrls: ['./seat-edit.component.css']
})
export class SeatEditComponent implements OnInit {

  // //FAIRE UNE CHECKBOX pour les attribus booléens
  // @Input() seatData = { id_seat: 0, placement: '', reservable: false,  isReserved: false
  //   user: User;
  //   vehicle: Vehicle; };

  // seat: Seat;

  // constructor(private service: SeatService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  //   // tslint:disable-next-line:no-string-literal
  //   this.service.getById(this.route.snapshot.params['id']).subscribe((data: Seat) => {
  //     console.log(data);
  //     this.seatData = data;
  //   });
  }


  // update() {
  //   this.seat = this.seatData;
  //   this.service.update(this.seat).subscribe((result) => {
  //     this.router.navigate(['/seat/list']);
  //   });
  // }

}


