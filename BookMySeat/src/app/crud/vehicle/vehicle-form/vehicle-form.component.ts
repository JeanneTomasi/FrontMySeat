import { Line } from './../../../../models/line';
import { Router } from '@angular/router';
import { LineService } from './../../../../services/line.service';
import { VehicleService } from './../../../../services/vehicle.service';
import { Vehicle } from './../../../../models/vehicle';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  // lines: Line[];
  // line = this.lines[0];


  // @Input() vehicleData = { id_vehicle: 0, immatriculation: '', capacity: 0, passengers: 0, placesLeft: 0,
  //   fullRate: 0 };

  vehicleData: Vehicle;
  vehicles: Vehicle[];
  // tslint:disable-next-line:max-line-length
  constructor(private service: VehicleService, private service2: LineService, private router: Router) { }

  ngOnInit() {
    this.vehicleData = new Vehicle();
    // this.service2.findAll().subscribe((value: Line[]) => this.lines = value);

  }

  add() {
    // console.log(this.vehicleData.line);
    // this.vehicle = this.vehicleData;
    // console.log(this.line);
    this.service.add(this.vehicleData).subscribe((result) => {
      this.router.navigate(['/vehicle/list']);
    });
  }
}
