import { Component, OnInit } from '@angular/core';
import { ProdService } from '../../services/prod.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  message;
  messageClass;
  carrito;
  total_pagar;

  constructor(
    private prod_service: ProdService
  ) { }

  ngOnInit() {
    this.message = "No hay mercado";
    this.messageClass = "alert alert-danger";
    this.total_pagar = 0;

    this.carrito = this.prod_service.getAllCarrito();

    if (this.carrito.length > 0) this.message = '';

    for (let item of this.carrito) this.total_pagar += item.qty * Number(item.product.precio);
  }

}
