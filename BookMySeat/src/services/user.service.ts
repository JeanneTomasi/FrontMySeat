import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  body: any;
  editMode = false;

  endpoint = 'http://localhost:8080/apiUser';
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

  add(user): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.endpoint + '/add', JSON.stringify(user), this.httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((transportEnterprise) => console.log(`added user w/ id=${user.id_user}`))
    );
  }

  update(user): Observable<User> {
    return this.http.put<User>(this.endpoint + '/update', JSON.stringify(user), this.httpOptions);
  }

  findAll(): Observable<User[]> {
    return this.http.get(this.endpoint + '/users').pipe(
      map(this.extractData));
  }

  getById(id): Observable<User> {
    return this.http.get(this.endpoint + '/get/' + id).pipe(
      map(this.extractData));
  }

  delete(id): Observable<User> {
    return this.http.delete<User>(this.endpoint + '/delete/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted user id=${id}`))
    );
  }

}
