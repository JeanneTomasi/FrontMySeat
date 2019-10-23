import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransportEntrepriseService {

  URL = 'http://localhost:8080/apiTransportEntreprise';
  transportEntreprises: any[] = [];
  editMode = false;
  transportEntreprise = new Object();
  admin: any;

  constructor(private http: HttpClient) { }

  add(transportEntreprise: any) {
    return this.http.post(this.URL + '/add', transportEntreprise, { observe: 'response' });
  }

  update(transportEntreprise: any) {
    return this.http.put(this.URL + '/update', transportEntreprise, { observe: 'response' });
  }

  findAll() {
    return this.http.get<any[]>(this.URL + '/transportEntreprises').pipe(map(value => this.transportEntreprise = value));
  }

  delete(id: any) {
    return this.http.delete(this.URL + '/delete/' + id);
  }

  getOne(id: any) {
    return this.http.get<any>(this.URL + '/get/' + id);
  }

}
