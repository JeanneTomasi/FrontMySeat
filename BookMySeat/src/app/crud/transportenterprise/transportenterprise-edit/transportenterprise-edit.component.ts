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

  collectivity: Collectivity;
  @Input() tEData = { id_transportEntreprise: 0, name: '', collectivity: this.collectivity };

  tE: TransportEnterprise;
  tEs: TransportEnterprise[];

  // tslint:disable-next-line:max-line-length
  constructor(private service: TransportEnterpriseService, private service2: CollectivityService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.service2.getById(1).subscribe((data: Collectivity) => {
      this.collectivity = data;
    });


    // tslint:disable-next-line:no-string-literal
    this.service.getById(this.route.snapshot.params['id']).subscribe((data: TransportEnterprise) => {
      console.log(data);
      this.tEData = data;
    });
  }

  update() {
    this.tE = this.tEData;
    this.service.update(this.tE).subscribe((result) => {
      this.router.navigate(['/transportEnterprise/list']);
    });
  }

}
