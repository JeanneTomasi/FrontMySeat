import { SeatReservation } from './../models/seatreservation';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SeatReservationService {
  body: any;
  editMode = false;

  endpoint = 'http://localhost:8080/apiSeatReservation';
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

  add(seatReservation): Observable<SeatReservation> {
    console.log(seatReservation);
    return this.http.post<SeatReservation>(this.endpoint + '/add',
    JSON.stringify(seatReservation),
     this.httpOptions);
  }

  update(seatReservation): Observable<SeatReservation> {
    return this.http.put<SeatReservation>(this.endpoint + '/update', JSON.stringify(seatReservation), this.httpOptions);
  }

  findAll(): Observable<SeatReservation[]> {
    return this.http.get(this.endpoint + '/reservations').pipe(
      map(this.extractData));
  }

  getById(id): Observable<SeatReservation> {
    return this.http.get(this.endpoint + '/get/' + id).pipe(
      map(this.extractData));
  }

  delete(id): Observable<SeatReservation> {
    return this.http.delete<SeatReservation>(this.endpoint + '/delete/' + id, this.httpOptions);
  }

}
