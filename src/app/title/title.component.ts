import { Component, OnInit } from '@angular/core';
import {Consts} from "../Consts";
import {Customer} from "../models/Customer";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  customer!:Customer;
  balance:number = 0;
  constructor() { }

  ngOnInit(): void {
    this.customer = JSON.parse(<string>localStorage.getItem(Consts.CUSTOMER_KEY));
    console.log(JSON.stringify(this.customer));
    if(this.customer != null){
      this.balance = this.customer.money;
    }else{
      this.balance = 0;
    }
    if(this.balance == null){
      this.balance = 0;
    }
  }

}
