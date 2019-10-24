import { CollectivityService } from './../../../../services/collectivity.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collectivity } from 'src/models/collectivity';

@Component({
  selector: 'app-collectivity-list',
  templateUrl: './collectivity-list.component.html',
  styleUrls: ['./collectivity-list.component.css']
})
export class CollectivityListComponent implements OnInit {

  collectivities: Collectivity[] = [];
  collectivity: Collectivity;

  constructor(private service: CollectivityService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((value: Collectivity[]) => this.collectivities = value);
  }

  add() {
    this.router.navigate(['/collectivity/form']);
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
    this.router.navigate(['/collectivity/edit', id]);
    this.service.editMode = true;
  }


}
