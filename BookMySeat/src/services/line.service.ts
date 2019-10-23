import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LineService {

  URL = 'http://localhost:8080/apiLine';
  lines: any[] = [];
  editMode = false;
  line = new Object();
  admin: any;

  constructor(private http: HttpClient) { }

  add(line: any) {
    return this.http.post(this.URL + '/add', line, { observe: 'response' });
  }

  update(line: any) {
    return this.http.put(this.URL + '/update', line, { observe: 'response' });
  }

  findAll() {
    return this.http.get<any[]>(this.URL + '/lines').pipe(map(value => this.lines = value));
  }

  delete(id: any) {
    return this.http.delete(this.URL + '/delete/' + id);
  }

  getOne(id: any) {
    return this.http.get<any>(this.URL + '/get/' + id);
  }

}
