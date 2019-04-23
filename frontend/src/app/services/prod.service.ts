import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProdService {

  options;
  servidor_node = this.auth_service.servidor_node;
  carrito = [];

  constructor(
    private auth_service: AuthService,
    private http: Http

  ) {
    }

    adicionarProducto(producto){
      this.carrito.push(producto)
      return this.carrito;
    }

    createProducts(){
      return this.http.get(this.servidor_node + '/authentication/createProducts', this.options).map(res => res.json());
    }

    getAllProducts(){
      return this.http.get(this.servidor_node + '/product/allProducts', this.options).map(res => res.json());
    }

    getDetailProduct(id){
      return this.http.get(this.servidor_node + '/product/detailProduct/' + id, this.options).map(res => res.json());
    }

}
