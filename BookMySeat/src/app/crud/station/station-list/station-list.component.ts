import { Router } from '@angular/router';
import { StationService } from './../../../../services/station.service';
import { Component, OnInit } from '@angular/core';
import { Station } from 'src/models/station';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {

  stations: Station[] = [];
  station: Station;

  constructor(private service: StationService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((value: Station[]) => this.stations = value);
  }

  add() {
    this.router.navigate(['/station/form']);
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
    this.router.navigate(['/station/edit', id]);
  }

}
