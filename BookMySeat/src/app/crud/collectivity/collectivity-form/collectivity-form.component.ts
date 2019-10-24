import { CollectivityService } from './../../../../services/collectivity.service';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Collectivity } from 'src/models/collectivity';


@Component({
  selector: 'app-collectivity-form',
  templateUrl: './collectivity-form.component.html',
  styleUrls: ['./collectivity-form.component.css']
})

export class CollectivityFormComponent implements OnInit {

  @Input() collectivityData = { id_collectivity: 0, name: '', operation_area: '' };

  collectivity: Collectivity;
  editMode: any;
  id: any;

  constructor(private service: CollectivityService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // tslint:disable-next-line:no-string-literal
    this.service.getById(this.route.snapshot.params['id']).subscribe((data: Collectivity) => {
      console.log(data);
      this.collectivityData = data;
    });

    this.editMode = this.service.editMode;
    this.collectivityData = this.collectivity;
  }


  add() {
    this.service.add(this.collectivity).subscribe((result) => {
      this.router.navigate(['/collectivity/list']);
    });
  }

  update() {
    this.service.update(this.collectivity).subscribe((result) => {
      this.router.navigate(['/collectivity/list']);
    });
  }

}
