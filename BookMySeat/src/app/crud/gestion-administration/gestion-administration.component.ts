import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-administration',
  templateUrl: './gestion-administration.component.html',
  styleUrls: ['./gestion-administration.component.css']
})
export class GestionAdministrationComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  collectivities() {
    this.router.navigate(['/collectivity/list']);
  }

  transportEnterprise() {
    this.router.navigate(['/transportEnterprise/list']);
  }

}
