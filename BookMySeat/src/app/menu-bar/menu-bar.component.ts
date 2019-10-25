import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  opened: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goMesLigne(){
    this.router.navigate(['/mes-lignes'])
  }
  goLeTrafic(){
    this.router.navigate(['/trafic'])
  }
  goMonProfil(){
    this.router.navigate(['/mon-profil'])
  }
}
