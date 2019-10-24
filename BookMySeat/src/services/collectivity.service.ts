import { Collectivity } from './../models/collectivity';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollectivityService {
  body: any;
  editMode: boolean;

  endpoint = 'http://localhost:8080/apiCollectivity';
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

  add(collectivity): Observable<Collectivity> {
    console.log(collectivity);
    return this.http.post<Collectivity>(this.endpoint + 'add', JSON.stringify(collectivity), this.httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((collectivity) => console.log(`added collectivity w/ id=${collectivity.id_collectivity}`))
    );
  }

  update(id, collectivity): Observable<Collectivity> {
    return this.http.put<Collectivity>(this.endpoint + '/edit/' + id, JSON.stringify(collectivity), this.httpOptions).pipe(
      tap(_ => console.log(`updated collectivity id=${id}`))
    );
  }

  findAll(): Observable<Collectivity[]> {
    return this.http.get(this.endpoint + '/collectivities').pipe(
      map(this.extractData));
  }

  getById(id): Observable<Collectivity> {
    return this.http.get(this.endpoint + '/get/' + id).pipe(
      map(this.extractData));
  }

  delete(id): Observable<Collectivity> {
    return this.http.delete<Collectivity>(this.endpoint + '/delete/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted collectivity id=${id}`))
    );
  }

}
