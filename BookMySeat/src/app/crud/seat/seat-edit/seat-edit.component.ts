import { Vehicle } from './../../../../models/vehicle';
import { VehicleService } from './../../../../services/vehicle.service';
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

  // FAIRE UNE CHECKBOX pour les attribus booléens
  @Input() seatData = { id_seat: 0, placement: '', reservable: false,  isReserved: false, vehicle: null };

  seat: Seat;
  vehicles: Vehicle[];

  // tslint:disable-next-line:max-line-length
  constructor(private service: SeatService, private serviceVehicle: VehicleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // tslint:disable-next-line:no-string-literal
    this.service.getById(this.route.snapshot.params['id']).subscribe((data: Seat) => {
      console.log(data);
      this.seatData = data;
    });

    this.serviceVehicle.findAll().subscribe((value: Vehicle[]) => this.vehicles = value);
  }

  update() {
    this.seat = this.seatData;
    this.service.update(this.seat).subscribe((result) => {
      this.router.navigate(['/seat/list']);
    });
  }

}


