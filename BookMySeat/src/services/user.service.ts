import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = 'http://localhost:8080/apiUser';
  users: any[] = [];
  editMode = false;
  user = new Object();
  admin: any;

  constructor(private http: HttpClient) { }

  add(user: any) {
    return this.http.post(this.URL + '/add', user, { observe: 'response' });
  }

  update(user: any) {
    return this.http.put(this.URL + '/update', user, { observe: 'response' });
  }

  findAll() {
    return this.http.get<any[]>(this.URL + '/users').pipe(map(value => this.users = value));
  }

  delete(id: any) {
    return this.http.delete(this.URL + '/delete/' + id);
  }

  getOne(id: any) {
    return this.http.get<any>(this.URL + '/get/' + id);
  }

//   getLog(username: any, password: any): any {
//      this.user = this.http.get<any>(this.URL + '/getLog/' + username + '/' + password);
//      return this.user;
//   }

//   getAdmin() {
//     this.admin = this.http.get<any>(this.URL + '/getAdmin');
//   }

}
