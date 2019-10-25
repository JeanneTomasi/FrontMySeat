import { Vehicle } from './../models/vehicle';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  body: any;
  editMode = false;

  endpoint = 'http://localhost:8080/apiVehicle';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    this.body = res;
    return this.body || {};
  }

  add(vehicle): Observable<Vehicle> {
    console.log(vehicle);
    return this.http.post<Vehicle>(this.endpoint + '/add', JSON.stringify(vehicle), this.httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((transportEnterprise) => console.log(`added vehicle w/ id=${vehicle.id_vehicle}`))
    );
  }

  update(vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(this.endpoint + '/update', JSON.stringify(vehicle), this.httpOptions);
  }

  findAll(): Observable<Vehicle[]> {
    return this.http.get(this.endpoint + '/vehicles').pipe(
      map(this.extractData));
  }

  getById(id): Observable<Vehicle> {
    return this.http.get(this.endpoint + '/get/' + id).pipe(
      map(this.extractData));
  }

  delete(id): Observable<Vehicle> {
    return this.http.delete<Vehicle>(this.endpoint + '/delete/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted vehicle id=${id}`))
    );
  }

}
