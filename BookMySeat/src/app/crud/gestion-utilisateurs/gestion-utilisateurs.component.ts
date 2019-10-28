import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-utilisateurs',
  templateUrl: './gestion-utilisateurs.component.html',
  styleUrls: ['./gestion-utilisateurs.component.css']
})
export class GestionUtilisateursComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  consult() {
    this.router.navigate(['/user/list']);
  }

  add() {
    this.router.navigate(['/user/form']);
  }

}
