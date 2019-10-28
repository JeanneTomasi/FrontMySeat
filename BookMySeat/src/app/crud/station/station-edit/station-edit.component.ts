import { StationService } from './../../../../services/station.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Station } from 'src/models/station';

@Component({
  selector: 'app-station-edit',
  templateUrl: './station-edit.component.html',
  styleUrls: ['./station-edit.component.css']
})
export class StationEditComponent implements OnInit {

  // FAIRE UNE CHECKBOX pour les attribus booléens
  @Input() stationData = { id_station: 0, name: '', localisation: '' };

  station: Station;
  stations: Station[];

  // tslint:disable-next-line:max-line-length
  constructor(private service: StationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // tslint:disable-next-line:no-string-literal
    this.service.getById(this.route.snapshot.params['id']).subscribe((data: Station) => {
      console.log(data);
      this.stationData = data;
    });
  }

  update() {
    this.station = this.stationData;
    this.service.update(this.station).subscribe((result) => {
      this.router.navigate(['/station/list']);
    });
  }

}
