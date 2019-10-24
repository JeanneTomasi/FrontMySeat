import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.css']
})
export class SeatListComponent implements OnInit {

  // lines: Line[] = [];
  // line: Line;

  // constructor(private service: LineService, private router: Router) { }

  ngOnInit() {
  //   this.findAll();
  }

  // findAll() {
  //   this.service.findAll().subscribe((value: Line[]) => this.lines = value);
  // }

  // add() {
  //   this.router.navigate(['/line/form']);
  // }

  // delete(id) {
  //   this.service.delete(id)
  //     .subscribe(res => {
  //       this.findAll();
  //     }, (err) => {
  //       console.log(err);
  //     }
  //     );
  // }

  // edit(id) {
  //   this.router.navigate(['/line/edit', id]);
  //   this.service.editMode = true;
  // }


}
