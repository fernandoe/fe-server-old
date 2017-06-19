import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

import {AuthService} from './auth.service';
import {Cliente} from './models/cliente';

@Injectable()
export class PessoaService {

  constructor(private http: Http, private auth: AuthService) {
  }

  novoCliente() {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.auth.getToken());
    return this.http.post('http://localhost:7001/api/v1/clientes/', {}, {headers: headers})
      .map((response: Response) => {
        const data = response.json();
        return new Cliente(data.uuid);
      });
  }

  clientes() {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.auth.getToken());
    return this.http.get('http://localhost:7001/api/v1/clientes/', {headers: headers});
  }

  // login(email: string, password: string) {
  //   const headers = new Headers();
  //   headers.append('content-type', 'application/x-www-form-urlencoded');
  //   const data = new URLSearchParams();
  //   data.append('grant_type', 'password');
  //   data.append('client_id', 'ULxeq4MXV6JyapHRlIQPu2ycqJN2K4ODIre32zLX');
  //   data.append('username', email);
  //   data.append('password', password);
  //   return this.http.post('http://localhost:7000/api/v1/login/', data, {headers: headers})
  //     .map((response: Response) => {
  //       const data = response.json();
  //       this.saveToken(data);
  //       return true;
  //     });
  // }
  //
  // logout() {
  //   localStorage.removeItem('token');
  // }
  //
  // register(email: string, password: string) {
  //   return this.http.post('http://localhost:7000/api/v1/register/', {
  //     email: email,
  //     password: password
  //   });
  // }
  //
  // saveToken(data: object) {
  //   localStorage.setItem('token', JSON.stringify(data));
  // }
  //
  // getToken() {
  //   let token = localStorage.getItem("token");
  //   if (token != null) {
  //     return JSON.parse(token).access_token;
  //   }
  //   return null;
  // }
  //
  // isAuthenticated() {
  //   return this.getToken() != null;
  // }
}
