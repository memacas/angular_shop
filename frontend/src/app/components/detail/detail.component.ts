import { Component, OnInit } from '@angular/core';
import { ProdService } from '../../services/prod.service';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product;
  currentUrl;
  message;
  messageClass;

  constructor(
    private prod_service: ProdService,
    private activated_route: ActivatedRoute
  ) {
   }

  ngOnInit() {
    this.getDetail();

  }

  getDetail(){
    this.currentUrl = this.activated_route.snapshot.params;
    this.prod_service.getDetailProduct(this.currentUrl.id).subscribe(data => {
      if (!data.success){
        this.messageClass = 'alert alert-danger';
        this.message = 'Producto no encontrado';
      }else{
        this.product = data.product;
      }
    })
  }

}
