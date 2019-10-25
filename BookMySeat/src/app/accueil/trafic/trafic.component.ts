import { Line } from './../../../models/line';
import { Component, OnInit } from '@angular/core';

let l1: Line = new Line();
l1.name = '30';
let l2: Line = new Line();
l2.name = '42';
export interface bus{
  id_bus: number;
  line: string;
  placesLeft: number;
}
const listebus: bus[] = [
  {id_bus: 1,  line: 'l1',  placesLeft: 4},
  {id_bus: 2,  line: 'l2',  placesLeft: 2},
  {id_bus: 3,  line: 'l1',  placesLeft: 0},
  {id_bus: 4,  line: 'l2',  placesLeft: 0}
];
@Component({
  selector: 'app-trafic',
  templateUrl: './trafic.component.html',
  styleUrls: ['./trafic.component.css']
})

export class TraficComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {
  }
  displayedRows: string[] = ['line', 'placesLeft'];
  vehicles = listebus;

}
