import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Seat } from 'src/models/seat';
@Injectable({
  providedIn: 'root'
})
export class SeatService {
  body: any;
  editMode = false;

  endpoint = 'http://localhost:8080/apiSeat';
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

  add(seat): Observable<Seat> {
    console.log(seat);
    return this.http.post<Seat>(this.endpoint + '/add', JSON.stringify(seat), this.httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((seat) => console.log(`added seat w/ id=${seat.id_seat}`))
    );
  }

  update(seat): Observable<Seat> {
    return this.http.put<Seat>(this.endpoint + '/update', JSON.stringify(seat), this.httpOptions);
  }

  findAll(): Observable<Seat[]> {
    return this.http.get(this.endpoint + '/seats').pipe(
      map(this.extractData));
  }

  getById(id): Observable<Seat> {
    return this.http.get(this.endpoint + '/get/' + id).pipe(
      map(this.extractData));
  }

  delete(id): Observable<Seat> {
    return this.http.delete<Seat>(this.endpoint + '/delete/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted seat id=${id}`))
    );
  }

}
