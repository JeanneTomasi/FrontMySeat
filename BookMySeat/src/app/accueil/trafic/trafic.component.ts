import { Component, OnInit } from '@angular/core';
export interface bus {
  id_bus: number;
  line: string;
  placesLeft: number;
}
const LIST_BUS: bus[] = [
  { id_bus: 1, line: 'l1', placesLeft: 4 },
  { id_bus: 2, line: 'l2', placesLeft: 2 },
  { id_bus: 3, line: 'l1', placesLeft: 0 },
  { id_bus: 4, line: 'l2', placesLeft: 0 }
];
@Component({
  selector: 'app-trafic',
  templateUrl: './trafic.component.html',
  styleUrls: ['./trafic.component.css']
})

export class TraficComponent implements OnInit {
  displayedRows: string[] = ['id_bus', 'line', 'placesLeft'];
  dataSource = LIST_BUS;
  constructor() { }

  ngOnInit() {
  }

}
