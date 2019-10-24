import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Station } from 'src/models/station';
@Injectable({
  providedIn: 'root'
})
export class StationService {
  body: any;
  editMode = false;

  endpoint = 'http://localhost:8080/apiStation';
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

  add(station): Observable<Station> {
    console.log(station);
    return this.http.post<Station>(this.endpoint + '/add', JSON.stringify(station), this.httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((station) => console.log(`added station w/ id=${station.id_station}`))
    );
  }

  update(station): Observable<Station> {
    return this.http.put<Station>(this.endpoint + '/update', JSON.stringify(station), this.httpOptions);
  }

  findAll(): Observable<Station[]> {
    return this.http.get(this.endpoint + '/stations').pipe(
      map(this.extractData));
  }

  getById(id): Observable<Station> {
    return this.http.get(this.endpoint + '/get/' + id).pipe(
      map(this.extractData));
  }

  delete(id): Observable<Station> {
    return this.http.delete<Station>(this.endpoint + '/delete/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted station id=${id}`))
    );
  }

}
