import { Observable } from 'rxjs';
import { Vehicle } from './../../models/vehicle';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/services/vehicle.service';

@Component({
  selector: 'app-trafic-actu',
  templateUrl: './trafic-actu.component.html',
  styleUrls: ['./trafic-actu.component.css']
})
export class TraficActuComponent implements OnInit {

  dataSource: Observable<Vehicle[]>;
  columnDisplayed: String[] = ['line', 'station', 'placesLeft'];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.dataSource = this.vehicleService.findAll();
  }

}
