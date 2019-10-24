import { Line } from './../models/line';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LineService {
  body: any;
  editMode = false;

  endpoint = 'http://localhost:8080/apiLine';
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

  add(line): Observable<Line> {
    console.log(line);
    return this.http.post<Line>(this.endpoint + '/add', JSON.stringify(line), this.httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((line) => console.log(`added line w/ id=${line.id_line}`))
    );
  }

  update(line): Observable<Line> {
    return this.http.put<Line>(this.endpoint + '/update', JSON.stringify(line), this.httpOptions);
  }

  findAll(): Observable<Line[]> {
    return this.http.get(this.endpoint + '/lines').pipe(
      map(this.extractData));
  }

  getById(id): Observable<Line> {
    return this.http.get(this.endpoint + '/get/' + id).pipe(
      map(this.extractData));
  }

  delete(id): Observable<Line> {
    return this.http.delete<Line>(this.endpoint + '/delete/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted line id=${id}`))
    );
  }

}
