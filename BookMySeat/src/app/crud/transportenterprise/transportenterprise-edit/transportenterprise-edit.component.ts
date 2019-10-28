import { CollectivityService } from './../../../../services/collectivity.service';
import { Collectivity } from 'src/models/collectivity';
import { ActivatedRoute, Router } from '@angular/router';
import { TransportEnterpriseService } from './../../../../services/transportenterprise.service';
import { TransportEnterprise } from 'src/models/transportenterprise';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transportenterprise-edit',
  templateUrl: './transportenterprise-edit.component.html',
  styleUrls: ['./transportenterprise-edit.component.css']
})
export class TransportenterpriseEditComponent implements OnInit {

  collectivities: Collectivity[];
  tE: TransportEnterprise;
  tEs: TransportEnterprise[];

  // tslint:disable-next-line:max-line-length
  constructor(private service: TransportEnterpriseService, private service2: CollectivityService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.tE = new TransportEnterprise();
    this.service2.findAll().subscribe((data: Collectivity[]) => {
      this.collectivities = data;
    });


    // tslint:disable-next-line:no-string-literal
    this.service.getById(this.route.snapshot.params['id']).subscribe((data: TransportEnterprise) => {
      console.log(data);
      this.tE = data;
    });
  }

  update() {
    // this.tE = this.tEData;
    this.service.update(this.tE).subscribe((result) => {
      this.router.navigate(['/transportEnterprise/list']);
    });
  }

}
