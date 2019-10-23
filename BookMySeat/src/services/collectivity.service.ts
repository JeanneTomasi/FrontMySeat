import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectivityService {

  URL = 'http://localhost:8080/apiCollectivity';
  collectivities: any[] = [];
  editMode = false;
  collectivity = new Object();
  admin: any;

  constructor(private http: HttpClient) { }

  add(collectivity: any) {
    return this.http.post(this.URL + '/add', collectivity, { observe: 'response' });
  }

  update(collectivity: any) {
    return this.http.put(this.URL + '/update', collectivity, { observe: 'response' });
  }

  findAll() {
    return this.http.get<any[]>(this.URL + '/collectivities').pipe(map(value => this.collectivities = value));
  }

  delete(id: any) {
    return this.http.delete(this.URL + '/delete/' + id);
  }

  getOne(id: any) {
    return this.http.get<any>(this.URL + '/get/' + id);
  }

}
