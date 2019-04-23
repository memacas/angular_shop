import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdService } from '../../services/prod.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  form_buscar: FormGroup;
  form_adicionar: FormGroup;
  products;

  constructor(
    private form_builder: FormBuilder,
    private prod_service: ProdService
  ) { }

  getAllProducts(){
    this.prod_service.getAllProducts().subscribe(data => {
      this.products = data.products;
    })
  }

  adicionarProducto(id){
    const qty = this.form_adicionar.get('qty').value;
    console.log(qty);

    let prod = this.products.filter(function(product){
                return product._id.includes(id);
              })
    if (prod.length > 0) prod = prod[0];
    console.log(prod);
    console.log(this.prod_service.adicionarProducto(prod));


  }

  calcularCampoQTY(maxQTY){
    let qty = [];
    for (let c1 = 1; c1 <= maxQTY; c1++){
      qty.push(c1);
    }
    return qty
  }

  ngOnInit() {
    this.form_buscar = this.form_builder.group({
          buscar: ['', Validators.compose([Validators.maxLength(50), Validators.minLength(5)])]});

    this.form_adicionar = this.form_builder.group({
          qty: ['1', Validators.compose([Validators.required])]});

    this.getAllProducts();

  }

}
