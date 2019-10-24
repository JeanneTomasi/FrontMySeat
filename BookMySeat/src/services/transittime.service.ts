import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TransitTime } from 'src/models/transittime';
@Injectable({
  providedIn: 'root'
})
export class TransitTimeService {
  body: any;
  editMode = false;

  endpoint = 'http://localhost:8080/apiTransitTime';
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

  add(transitTime): Observable<TransitTime> {
    console.log(transitTime);
    return this.http.post<TransitTime>(this.endpoint + '/add', JSON.stringify(transitTime), this.httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((transitTime) => console.log(`added transitTime w/ id=${transitTime.id_transit_time}`))
    );
  }

  update(transitTime): Observable<TransitTime> {
    return this.http.put<TransitTime>(this.endpoint + '/update', JSON.stringify(transitTime), this.httpOptions);
  }

  findAll(): Observable<TransitTime[]> {
    return this.http.get(this.endpoint + '/transitTimes').pipe(
      map(this.extractData));
  }

  getById(id): Observable<TransitTime> {
    return this.http.get(this.endpoint + '/get/' + id).pipe(
      map(this.extractData));
  }

  delete(id): Observable<TransitTime> {
    return this.http.delete<TransitTime>(this.endpoint + '/delete/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted transitTime id=${id}`))
    );
  }

}
