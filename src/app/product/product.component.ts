import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/Product";
import {Consts} from "../Consts";
import {Customer} from "../models/Customer";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: '[app-tr]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input('app-tr') product!: Product;
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  clickAddButton(product: Product): void {
    if(localStorage.getItem(Consts.CUSTOMER_KEY) !== null){
      let customer: Customer = JSON.parse(<string>localStorage.getItem(Consts.CUSTOMER_KEY));
      console.log('customer with login = '+customer.login+' wants to add product = '+product.name);
      product.orderId = customer.orderId;
      this.http.post<Product>(Consts.SERVER+Consts.PRODUCTS,product).subscribe((response)=>
      {console.log(JSON.stringify(response))});
    }else{
      alert("Войдите или зарегистрируйтесь, чтобы добавлять товары в корзину")
    }
  }

}
