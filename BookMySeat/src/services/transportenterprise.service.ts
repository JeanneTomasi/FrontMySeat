import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TransportEnterprise } from 'src/models/transportenterprise';
@Injectable({
  providedIn: 'root'
})
export class TransportEnterpriseService {
  body: any;
  editMode = false;

  endpoint = 'http://localhost:8080/apiTransportEnterprise';
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

  add(transportEnterprise): Observable<TransportEnterprise> {
    console.log(transportEnterprise);
    return this.http.post<TransportEnterprise>(this.endpoint + '/add', JSON.stringify(transportEnterprise), this.httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((transportEnterprise) => console.log(`added transportEnterprise w/ id=${transportEnterprise.id_transportEntreprise}`))
    );
  }

  update(transportEnterprise): Observable<TransportEnterprise> {
    return this.http.put<TransportEnterprise>(this.endpoint + '/update', JSON.stringify(transportEnterprise), this.httpOptions);
  }

  findAll(): Observable<TransportEnterprise[]> {
    return this.http.get(this.endpoint + '/transportEntreprises').pipe(
      map(this.extractData));
  }

  getById(id): Observable<TransportEnterprise> {
    return this.http.get(this.endpoint + '/get/' + id).pipe(
      map(this.extractData));
  }

  delete(id): Observable<TransportEnterprise> {
    return this.http.delete<TransportEnterprise>(this.endpoint + '/delete/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted transportEnterprise id=${id}`))
    );
  }

}
