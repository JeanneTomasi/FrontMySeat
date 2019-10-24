import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-seat-form',
  templateUrl: './seat-form.component.html',
  styleUrls: ['./seat-form.component.css']
})
export class SeatFormComponent implements OnInit {

  // @Input() lineData = { id_line: 0, name: '', localisation: '' };

  // line: Line;

  // constructor(private service: LineService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  //   this.line = this.lineData;
  // }


  // add() {
  //   this.service.add(this.line).subscribe((result) => {
  //     this.router.navigate(['/line/list']);
  //   });
  }
}
