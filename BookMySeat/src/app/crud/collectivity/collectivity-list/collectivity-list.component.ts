import { Collectivity } from './../../../models/collectivity';
import { CollectivityService } from './../../../services/collectivity.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collectivity-list',
  templateUrl: './collectivity-list.component.html',
  styleUrls: ['./collectivity-list.component.css']
})
export class CollectivityListComponent implements OnInit {

  collectivities: Collectivity[] = [];

  constructor(private service: CollectivityService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((value: Collectivity[]) => this.collectivities = value);
  }

  delete(id) {
    this.service.delete(id);
  }

  edit(id) {
    this.router.navigate(['/collectivity/edit', id]);
    this.service.editMode = true;


  }

  // animal: any;

  // constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  // ngOnInit() {
  //   // tslint:disable-next-line:no-string-literal
  //   this.rest.getAnimaux(this.route.snapshot.params['id']).subscribe((data: {}) => {
  //     console.log(data);
  //     this.animal = data;
  //   });
  // }

}
