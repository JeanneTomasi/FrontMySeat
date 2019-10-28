import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  administration() {
    this.router.navigate(['/administration']);
  }

  lines() {
    this.router.navigate(['/lignes']);
  }

  users() {
    this.router.navigate(['/utilisateurs']);
  }

}
