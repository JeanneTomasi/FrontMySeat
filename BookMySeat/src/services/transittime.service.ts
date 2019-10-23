import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransitTimeService {

  URL = 'http://localhost:8080/apiTransitTime';
  transitTimes: any[] = [];
  editMode = false;
  transitTime = new Object();
  admin: any;

  constructor(private http: HttpClient) { }

  add(transitTime: any) {
    return this.http.post(this.URL + '/add', transitTime, { observe: 'response' });
  }

  update(transitTime: any) {
    return this.http.put(this.URL + '/update', transitTime, { observe: 'response' });
  }

  findAll() {
    return this.http.get<any[]>(this.URL + '/transitTimes').pipe(map(value => this.transitTimes = value));
  }

  delete(id: any) {
    return this.http.delete(this.URL + '/delete/' + id);
  }

  getOne(id: any) {
    return this.http.get<any>(this.URL + '/get/' + id);
  }

}
