import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollectivityService {
  body: any;

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

  addAnimal(animal): Observable<any> {
    console.log(animal);
    return this.http.post<any>(this.endpoint + 'animal', JSON.stringify(animal), this.httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((animal) => console.log(`added animal w/ id=${animal.id}`)),
      catchError(this.handleError<any>('addAnimal'))
    );
  }

  updateAnimal(id, animal): Observable<any> {
    return this.http.put(this.endpoint + 'animal/' + id, JSON.stringify(animal), this.httpOptions).pipe(
      tap(_ => console.log(`updated animal id=${id}`)),
      catchError(this.handleError<any>('updateAnimal'))
    );
  }

  getAllAnimaux(): Observable<any> {
    return this.http.get(this.endpoint + 'animaux').pipe(
      map(this.extractData));
  }

  getAnimaux(id): Observable<any> {
    return this.http.get(this.endpoint + 'animaux/' + id).pipe(
      map(this.extractData));
  }





  deleteAnimal(id): Observable<any> {
    return this.http.delete<any>(this.endpoint + 'animal/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted animal id=${id}`)),
      catchError(this.handleError<any>('deleteAnimal'))
    );
  }

}
