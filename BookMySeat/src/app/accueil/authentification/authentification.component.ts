import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotToLogin() {
    this.router.navigate(['/login']);
  }

  goToMesLignes() {
    this.router.navigate(['/mes-lignes']);
  }

}
