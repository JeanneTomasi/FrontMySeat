import { Line } from './../../models/line';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/services/vehicle.service';
import { Vehicle } from 'src/models/vehicle';
import { Observable } from 'rxjs';

let l1: Line = new Line();
l1.name = 'l3';
let l2: Line = new Line();
l2.name = 'l2';
export class bus {
  id_bus: number;
  line: Line;
  placesLeft: number;
  reserver() {
    this.placesLeft = this.placesLeft - 1;
  }
  constructor(id: number, line: Line, placesLeft: number) {
    this.id_bus = id;
    this.line = line;
    this.placesLeft = placesLeft;
  }
}
const LIST_BUS: bus[] = [
  new bus(1, l1, 4),
  new bus(2, l1, 3),
  new bus(3, l2, 2),
  new bus(4, l2, 0),
];
@Component({
  selector: 'app-mes-lignes',
  templateUrl: './mes-lignes.component.html',
  styleUrls: ['./mes-lignes.component.css']
})
export class MesLignesComponent implements OnInit {
  displayedRows: string[] = ['id_bus', 'line', 'placesLeft', 'reservation'];
  dataSource: Observable<Vehicle[]>;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.dataSource = this.vehicleService.findAll();
  }

}
