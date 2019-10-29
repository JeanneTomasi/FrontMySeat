import { Component, OnInit, Input } from '@angular/core';
import { LineService } from 'src/services/line.service';
import { Line } from 'src/models/line';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit {

  @Input() lineData = { id_line: 0, name: '', localisation: '' };
  line: Line;
  lines: Observable<Line[]>;


  constructor(private lineService: LineService) { }

  ngOnInit() {
    this.lines = this.lineService.findAll();
  }

  toBus() {
    this.line = this.lineData;
  }

}
