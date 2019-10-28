import { Router } from '@angular/router';
import { VehicleService } from './../../../../services/vehicle.service';
import { Vehicle } from './../../../../models/vehicle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[] = [];
  vehicle: Vehicle;

  constructor(private service: VehicleService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((value: Vehicle[]) => this.vehicles = value);
  }

  add() {
    this.router.navigate(['/vehicle/form']);
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
    this.router.navigate(['/vehicle/edit', id]);
    // this.service.editMode = true;
  }

}
