import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retour',
  templateUrl: './retour.component.html',
  styleUrls: ['./retour.component.css']
})
export class RetourComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotToCrud() {
    this.router.navigate(['/crud']);
  }

}
