import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/Product";
import {Consts} from "../Consts";
import {Customer} from "../models/Customer";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  product!:Product;
  id: number;

  constructor(private activateRoute: ActivatedRoute,private http:HttpClient) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.http.get<Product>(Consts.SERVER+Consts.PRODUCTS+"/"+this.id).subscribe(
      (response)=>{
        this.product = response;
      }
    )
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
