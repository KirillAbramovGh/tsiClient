import { Component, OnInit } from '@angular/core';
import {Product} from "../models/Product";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {Order} from "../models/Order";
import {Consts} from "../Consts";
import {Customer} from "../models/Customer";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  products: Product[] = [];
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem(Consts.CUSTOMER_KEY)!=null) {
      let customer: Customer = JSON.parse(<string>localStorage.getItem(Consts.CUSTOMER_KEY));
      let order: Order;
      this.http.get<Order>(Consts.ORDERS_REQUEST + "/" + customer.orderId).subscribe((response) => {
        order = response;
        localStorage.setItem(Consts.ORDER_KEY, JSON.stringify(response));
        console.log(JSON.stringify(response.productsIds));
        this.getProducts(response.productsIds);
        console.log(JSON.stringify(this.products));
        if (this.products.length < 1) {
          alert("Ваша корзина пуста, товары можно добавить в каталоге");
          this.router.navigate(['/catalog']);
        }
      });
    }else{
      alert("Для доступа к корзине необходимо войти");
      this.router.navigate(['']);
    }
  }

  getProducts(productsIds: []){
    this.products = [];
    for(let i = 0; i< productsIds.length;i++){
      console.log("p = "+productsIds[i]);
      this.http.get<Product>(Consts.SERVER+Consts.PRODUCTS+"/"+productsIds[i]).subscribe(
        (response)=>{
          this.products.push(response);
          console.log(JSON.stringify(response))
        }
      )
    }
  }

  buy(){
    let customer: Customer= JSON.parse(<string>localStorage.getItem(Consts.CUSTOMER_KEY));
    let params = new HttpParams()
      .set(Consts.LOGIN_PARAM,customer.login)
      .set(Consts.PASSWORD_PARAM,customer.password);
    this.http.get<Customer>(Consts.LOGIN_REQUEST,{params: params}).subscribe((response)=>{
        localStorage.setItem(Consts.CUSTOMER_KEY,JSON.stringify(response));
        console.log(JSON.stringify(response));
        customer = response;
      },
      error=>{
        alert("Ошибка запроса")
      });
    let sum = 0;
    for(let i = 0; i<this.products.length; i++){
      sum+= this.products[i].price;
    }
    if(sum > customer.money){
      alert("На вашем счете недостаточно средств - "+customer.money+" требуется "+sum);
    }else {
      customer.money -= sum;
      let login  = customer.login;
      let pass = customer.password;
      let params = new HttpParams()
        .set(Consts.LOGIN_PARAM,login)
        .set(Consts.PASSWORD_PARAM,pass);

      this.http.put<Customer>(Consts.UPDATE_CUSTOMER_REQUEST,customer,{params: params}).subscribe(
        (response)=>{
          localStorage.setItem(Consts.CUSTOMER_KEY,JSON.stringify(response));
          console.log(localStorage.getItem(Consts.CUSTOMER_KEY));
          for(let i = 0; i<this.products.length; i++){
            this.remove(this.products[i].id);
          }
          alert("Покупка прошла успешно, ваш баланс "+response.money);
        }

      );
    }
  }

  remove(id:number) {
    this.http.delete(Consts.DELETE_PRODUCT + "/" + id).subscribe((res) => {
      console.log("product deleted");
      this.router.navigate(['/basket'])
    });
  }

}
