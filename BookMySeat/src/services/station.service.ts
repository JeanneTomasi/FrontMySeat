import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  URL = 'http://localhost:8080/apiStation';
  stations: any[] = [];
  editMode = false;
  station = new Object();
  admin: any;

  constructor(private http: HttpClient) { }

  add(station: any) {
    return this.http.post(this.URL + '/add', station, { observe: 'response' });
  }

  update(station: any) {
    return this.http.put(this.URL + '/update', station, { observe: 'response' });
  }

  findAll() {
    return this.http.get<any[]>(this.URL + '/stations').pipe(map(value => this.stations = value));
  }

  delete(id: any) {
    return this.http.delete(this.URL + '/delete/' + id);
  }

  getOne(id: any) {
    return this.http.get<any>(this.URL + '/get/' + id);
  }

}
