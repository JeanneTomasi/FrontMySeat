import { CollectivityService } from './../../../services/collectivity.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collectivity-list',
  templateUrl: './collectivity-list.component.html',
  styleUrls: ['./collectivity-list.component.css']
})
export class CollectivityListComponent implements OnInit {


  collectivities: any[] = [];

  constructor(private service: CollectivityService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((value: any[]) => this.collectivities = value);
  }

  delete(id, index) {
    this.service.delete(id).subscribe(response =>
      this.service.collectivities.splice(index, 1));
  }

  edit(id) {
    this.router.navigate(['/collectivity/edit', id]);
    this.service.editMode = true;
  }
}
