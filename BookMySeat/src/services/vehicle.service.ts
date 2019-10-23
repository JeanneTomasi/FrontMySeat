import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  URL = 'http://localhost:8080/apiVehicle';
  vehicles: any[] = [];
  editMode = false;
  vehicle = new Object();
  admin: any;

  constructor(private http: HttpClient) { }

  add(vehicle: any) {
    return this.http.post(this.URL + '/add', vehicle, { observe: 'response' });
  }

  update(vehicle: any) {
    return this.http.put(this.URL + '/update', vehicle, { observe: 'response' });
  }

  findAll() {
    return this.http.get<any[]>(this.URL + '/vehicles').pipe(map(value => this.vehicles = value));
  }

  delete(id: any) {
    return this.http.delete(this.URL + '/delete/' + id);
  }

  getOne(id: any) {
    return this.http.get<any>(this.URL + '/get/' + id);
  }

}
