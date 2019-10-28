import { Collectivity } from './../../../../models/collectivity';
import { TransportEnterprise } from './../../../../models/transportenterprise';
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

  collectivity: Collectivity;
  @Input() tEData = { id_transportEntreprise: 0, name: '', collectivity: this.collectivity };

  tE: TransportEnterprise;
  tEs: TransportEnterprise[];

  // tslint:disable-next-line:max-line-length
  constructor(private service: TransportEnterpriseService, private service2: CollectivityService, private router: Router) { }

  ngOnInit() {
    this.service2.getById(1).subscribe((data: Collectivity) => {
      this.collectivity = data;
    });
  }


  add() {
    // this.seatData.vehicle = this.vehicle;
    this.tE = this.tEData;
    this.service.add(this.tE).subscribe((result) => {
      this.router.navigate(['/transportEnterprise/list']);
    });
  }

}
