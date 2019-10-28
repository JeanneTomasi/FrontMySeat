import { ActivatedRoute, Router } from '@angular/router';
import { LineService } from './../../../../services/line.service';
import { VehicleService } from './../../../../services/vehicle.service';
import { Line } from './../../../../models/line';
import { Vehicle } from './../../../../models/vehicle';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent implements OnInit {
  lines: Line[];
  // line = this.lines[0];


  // @Input() vehicleData = { id_vehicle: 0, immatriculation: '', capacity: 0, passengers: 0, placesLeft: 0,
  //   fullRate: 0 };

  vehicleData = new Vehicle();
  vehicles: Vehicle[];
  // tslint:disable-next-line:max-line-length
  constructor(private service: VehicleService, private service2: LineService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // tslint:disable-next-line:no-string-literal
    this.service.getById(this.route.snapshot.params['id']).subscribe((data: Vehicle) => {
      console.log(data);
      this.vehicleData = data;
    });

    this.service2.findAll().subscribe((value: Line[]) => this.lines = value);

  }

  update() {
    // this.vehicle = this.vehicleData;
    this.service.update(this.vehicleData).subscribe((result) => {
      this.router.navigate(['/vehicle/list']);
    });
  }

}
