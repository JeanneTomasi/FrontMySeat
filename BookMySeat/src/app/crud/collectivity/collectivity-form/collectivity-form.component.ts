import { CollectivityService } from './../../../../services/collectivity.service';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collectivity } from 'src/models/collectivity';


@Component({
  selector: 'app-collectivity-form',
  templateUrl: './collectivity-form.component.html',
  styleUrls: ['./collectivity-form.component.css']
})

export class CollectivityFormComponent implements OnInit {

  @Input() collectivityData = { id_collectivity: 0, name: '', operation_area: '' };

  collectivity: Collectivity;

  constructor(private service: CollectivityService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.collectivity = this.collectivityData;
  }

  add() {
    this.service.add(this.collectivity).subscribe((result) => {
      this.router.navigate(['/list']);
    });
  }
}
