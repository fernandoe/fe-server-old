import {Injectable} from '@angular/core';
import {Headers, Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {AuthService} from './auth.service';
import {Cliente} from './models/cliente';
import {Pagination} from './models/pagination';
import {environment} from '../../environments/environment';


@Injectable()
export class ClienteService {

  constructor(private http: Http, private auth: AuthService) {
  }

  create() {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.auth.getToken());
    return this.http.post(environment.api_pessoa_base_url + '/api/v1/clientes/', {}, {headers: headers})
      .map((response: Response) => {
        const data = response.json();
        return new Cliente(data.uuid);
      });
  }

  get(uuid: string) {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.auth.getToken());
    return this.http.get(environment.api_pessoa_base_url + '/api/v1/clientes/' + uuid + '/', {headers: headers})
      .map((response: Response) => {
        const data = response.json();
        return data;
      });
  }

  save(uuid: string, cliente: Cliente) {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.auth.getToken());
    return this.http.put(environment.api_pessoa_base_url + '/api/v1/clientes/' + uuid + '/', cliente, {headers: headers})
      .map((response: Response) => {
        const data = response.json();
        return cliente;
      });
  }

  search(page): Observable<Pagination> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.auth.getToken());

    let params = new URLSearchParams();
    params.set('page', page);

    return this.http.get(environment.api_pessoa_base_url + '/api/v1/clientes/', {headers: headers, search: params})
      .map((response: Response) => {
        const data = response.json();
        let pagination = new Pagination(data.results, data.count, page);
        return pagination;
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
