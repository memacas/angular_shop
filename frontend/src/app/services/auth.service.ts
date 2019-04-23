import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  servidor_node = "http://localhost:8080";
  user;
  options;

  constructor(
    private http: Http
  ) { }

  login(user){
    return this.http.post(this.servidor_node + '/authentication/login', user).map(res => res.json());
  }

  createUser(){
    return this.http.get(this.servidor_node + '/authentication/createUser', this.options).map(res => res.json());
  }


}
