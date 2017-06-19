import {Injectable} from '@angular/core';
import {Headers, Http, Response, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: Http) {
  }

  login(email: string, password: string) {
    const headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');
    const data = new URLSearchParams();
    data.append('grant_type', 'password');
    data.append('client_id', 'ULxeq4MXV6JyapHRlIQPu2ycqJN2K4ODIre32zLX');
    data.append('username', email);
    data.append('password', password);
    return this.http.post(environment.api_auth_base_url + '/api/v1/login/', data, {headers: headers})
      .map((response: Response) => {
        const data = response.json();
        this.saveToken(data);
        return true;
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  register(email: string, password: string) {
    return this.http.post(environment.api_auth_base_url + '/api/v1/register/', {
      email: email,
      password: password
    });
  }

  saveToken(data: object) {
    localStorage.setItem('token', JSON.stringify(data));
  }

  getToken() {
    let token = localStorage.getItem("token");
    if (token != null) {
      return JSON.parse(token).access_token;
    }
    return null;
  }

  isAuthenticated() {
    return this.getToken() != null;
  }
}

// import {Injectable} from '@angular/core';
// import {Http, Response} from '@angular/http';
// import {Router} from '@angular/router';
// import {Observable} from 'rxjs/Observable';
//
// @Injectable()
// export class LoginService {
//
//   constructor(private http: Http, public router: Router) {
//   }
//
//
//   login(email: string, password: string) {
//     return this.http.post("https://auth.test.fernandoe.com/login/", {
//       produto: 'f065a3fc-7741-4a4a-962b-6d8f3508b825',
//       email: email,
//       password: password
//     }).map((response: Response) => {
//       let response_json = response.json();
//       if (response_json && response_json.access_token) {
//         localStorage.setItem('user', response.json().access_token);
//         this.router.navigate(['mainView']);
//       }
//     }).catch(error => {
//       return Observable.of(false);
//     });
//   }
//
//   logout() {
//     localStorage.removeItem('user');
//   }
// }
