import { TransportEnterprise } from 'src/models/transportenterprise';
import { Collectivity } from './../../../../models/collectivity';
import { Router } from '@angular/router';
import { CollectivityService } from './../../../../services/collectivity.service';
import { TransportEnterpriseService } from './../../../../services/transportenterprise.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transportenterprise-form',
  templateUrl: './transportenterprise-form.component.html',
  styleUrls: ['./transportenterprise-form.component.css']
})
export class TransportenterpriseFormComponent implements OnInit {

  collectivities: Collectivity[];

  tE: TransportEnterprise;
  // tEs: TransportEnterprise[];

  // tslint:disable-next-line:max-line-length
  constructor(private service: TransportEnterpriseService, private service2: CollectivityService, private router: Router) { }

  ngOnInit() {
    this.tE = new TransportEnterprise();
    this.service2.findAll().subscribe((data: Collectivity[]) => {
      console.log(data);
      this.collectivities = data;
    });
  }


  add() {
    // this.seatData.vehicle = this.vehicle;
    // this.tE = this.tEData;
    this.service.add(this.tE).subscribe((result) => {
      this.router.navigate(['/transportEnterprise/list']);
    });
  }

}
