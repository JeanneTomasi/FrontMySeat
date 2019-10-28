import { TransportEnterprise } from './../../../../models/transportenterprise';
import { Router } from '@angular/router';
import { TransportEnterpriseService } from './../../../../services/transportenterprise.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transportenterprise-list',
  templateUrl: './transportenterprise-list.component.html',
  styleUrls: ['./transportenterprise-list.component.css']
})
export class TransportenterpriseListComponent implements OnInit {

  tE: TransportEnterprise;
  tEs: TransportEnterprise[];

  constructor(private service: TransportEnterpriseService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((value: TransportEnterprise[]) => this.tEs = value);
  }

  add() {
    this.router.navigate(['/transportEnterprise/form']);
  }

  delete(id) {
    this.service.delete(id)
      .subscribe(res => {
        this.findAll();
      }, (err) => {
        console.log(err);
      }
      );
  }

  edit(id) {
    this.router.navigate(['/transportEnterprise/edit', id]);
  }

}
