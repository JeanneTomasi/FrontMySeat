import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-lignes',
  templateUrl: './gestion-lignes.component.html',
  styleUrls: ['./gestion-lignes.component.css']
})
export class GestionLignesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  lines() {
    this.router.navigate(['/line/list']);
  }

  stations() {
    this.router.navigate(['/station/list']);
  }

  vehicles() {
    this.router.navigate(['/vehicle/list']);
  }

  seats() {
    this.router.navigate(['/seat/list']);
  }



}
