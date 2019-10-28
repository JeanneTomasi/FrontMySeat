import { Vehicle } from './../../../../models/vehicle';
import { VehicleService } from './../../../../services/vehicle.service';
import { SeatService } from './../../../../services/seat.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seat } from 'src/models/seat';
@Component({
  selector: 'app-seat-form',
  templateUrl: './seat-form.component.html',
  styleUrls: ['./seat-form.component.css']
})
export class SeatFormComponent implements OnInit {

  seatData: Seat;
  seat: Seat;
  vehicles: Vehicle[];
  vehicle: Vehicle;

  // tslint:disable-next-line:max-line-length
  constructor(private service: SeatService, private serviceVehicle: VehicleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.seatData = new Seat();
    this.serviceVehicle.findAll().subscribe((value: Vehicle[]) => this.vehicles = value);
  }

  // chargeVehicle(id) {
  //   this.serviceVehicle.getById(id).subscribe((value: Vehicle) => this.vehicle = value);
  // }

  add() {
    // this.seatData.vehicle = this.vehicle;
    // this.seat = this.seatData;
    this.service.add(this.seatData).subscribe((result) => {
      this.router.navigate(['/seat/list']);
    });
  }
}
