import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeatReservationService {

  URL = 'http://localhost:8080/apiSeatReservation';
  reservations: any[] = [];
  editMode = false;
  reservation = new Object();
  admin: any;

  constructor(private http: HttpClient) { }

  add(reservation: any) {
    return this.http.post(this.URL + '/add', reservation, { observe: 'response' });
  }

  update(reservation: any) {
    return this.http.put(this.URL + '/update', reservation, { observe: 'response' });
  }

  findAll() {
    return this.http.get<any[]>(this.URL + '/reservations').pipe(map(value => this.reservations = value));
  }

  delete(id: any) {
    return this.http.delete(this.URL + '/delete/' + id);
  }

  getOne(id: any) {
    return this.http.get<any>(this.URL + '/get/' + id);
  }

}
