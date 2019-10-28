import { Router } from '@angular/router';
import { StationService } from './../../../../services/station.service';
import { Component, OnInit, Input } from '@angular/core';
import { Station } from 'src/models/station';

@Component({
  selector: 'app-station-form',
  templateUrl: './station-form.component.html',
  styleUrls: ['./station-form.component.css']
})
export class StationFormComponent implements OnInit {

  @Input() stationData = { id_station: 0, name: '', localisation: '' };

  station: Station;
  stations: Station[];

  // tslint:disable-next-line:max-line-length
  constructor(private service: StationService, private router: Router) { }
  ngOnInit() {
  }

  add() {
    // this.seatData.vehicle = this.vehicle;
    this.station = this.stationData;
    this.service.add(this.station).subscribe((result) => {
      this.router.navigate(['/station/list']);
    });
  }

}
