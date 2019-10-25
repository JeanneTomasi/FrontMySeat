import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil-button',
  templateUrl: './accueil-button.component.html',
  styleUrls: ['./accueil-button.component.css']
})
export class AccueilButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToAccueil() {
    this.router.navigate(['/accueil']);
  }

}
