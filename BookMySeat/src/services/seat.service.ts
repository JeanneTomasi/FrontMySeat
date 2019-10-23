import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  URL = 'http://localhost:8080/apiSeat';
  seats: any[] = [];
  editMode = false;
  seat = new Object();
  admin: any;

  constructor(private http: HttpClient) { }

  add(seat: any) {
    return this.http.post(this.URL + '/add', seat, { observe: 'response' });
  }

  update(seat: any) {
    return this.http.put(this.URL + '/update', seat, { observe: 'response' });
  }

  findAll() {
    return this.http.get<any[]>(this.URL + '/seats').pipe(map(value => this.seats = value));
  }

  delete(id: any) {
    return this.http.delete(this.URL + '/delete/' + id);
  }

  getOne(id: any) {
    return this.http.get<any>(this.URL + '/get/' + id);
  }

}
