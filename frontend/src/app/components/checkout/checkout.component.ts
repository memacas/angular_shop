import { Component, OnInit } from '@angular/core';
import { ProdService } from '../../services/prod.service';
import { Router } from '@angular/router';

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
    private prod_service: ProdService,
    private router: Router
  ) { }

  finalizarCompra(){
    const carrito_final = [];
    for (let item of this.carrito){
      item.product.stock -= item.qty;
      carrito_final.push({id: item.product._id, stock: item.product.stock});
    }

    this.prod_service.finalizarCompra({carrito: carrito_final}).subscribe(data => {
      this.message = data.message;
      if (!data.success){
        this.messageClass = 'alert alert-danger';
      }else{
        this.messageClass = 'alert alert-success';
        setTimeout(() => {
            this.router.navigate(['/showcase']);
        }, 2000)
      }
    })

  }

  ngOnInit() {
    this.message = "No hay mercado";
    this.messageClass = "alert alert-danger";
    this.total_pagar = 0;

    this.carrito = this.prod_service.getAllCarrito();

    if (this.carrito.length > 0) this.message = '';

    for (let item of this.carrito) this.total_pagar += item.qty * Number(item.product.precio);
  }

}
