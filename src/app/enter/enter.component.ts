import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Consts} from "../Consts";
import {Customer} from "../models/Customer";
import {Router} from "@angular/router";
import {Order} from "../models/Order";

@Component({
  selector: 'app-auth',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {

  login:string = '';
  pass:string = '';
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  enter(){
    let params = new HttpParams()
      .set(Consts.LOGIN_PARAM,this.login)
      .set(Consts.PASSWORD_PARAM,this.pass);
    let orderId = 0;
    this.http.get<Customer>(Consts.LOGIN_REQUEST,{params: params}).subscribe((response)=>{
      orderId = response.orderId;
      localStorage.setItem(Consts.CUSTOMER_KEY,JSON.stringify(response));
      console.log(localStorage.getItem(Consts.CUSTOMER_KEY));
      this.router.navigate(['']);
    },
      error=>{
      alert("Ошибка запроса")
      });

  }

  reg(){
    this.router.navigate(['/auth'])
  }
}
