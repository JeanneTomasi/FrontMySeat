import { LineService } from './../../../../services/line.service';
import { Line } from './../../../../models/line';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-edit',
  templateUrl: './line-edit.component.html',
  styleUrls: ['./line-edit.component.css']
})
export class LineEditComponent implements OnInit {

  @Input() lineData = { id_line: 0, name: '', localisation: '' };

  line: Line;

  constructor(private service: LineService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // tslint:disable-next-line:no-string-literal
    this.service.getById(this.route.snapshot.params['id']).subscribe((data: Line) => {
      console.log(data);
      this.lineData = data;
    });
  }


  update() {
    this.line = this.lineData;
    this.service.update(this.line).subscribe((result) => {
      this.router.navigate(['/line/list']);
    });
  }

}


