import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../models/Customer";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Consts} from "../Consts";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  @Input()
  customer!: Customer;

  constructor(private http: HttpClient,private router: Router) {
    this.customer = {id: 0, orderId: 0, password: '', email: '', login: '', surname: '', name: '', money: 0}
  }

  ngOnInit(): void {
  }

  reg() {
    if(this.checkform()){
      this.http.post<Customer>(Consts.REG_REQUEST,this.customer).subscribe(
        (response)=>{
          localStorage.setItem(Consts.CUSTOMER_KEY,JSON.stringify(response));
          console.log(localStorage.getItem(Consts.CUSTOMER_KEY));
          this.router.navigate(['']);
        },
        (error)=>{
          alert("Такой логин уже существует");
        }
      )
    }
  }

  checkform() {
    console.log("start\n");
    if (!this.checkname(this.customer.name)) {
      return false;
    }
    if (!this.checknumber(this.customer.login)) {
      return false;
    }

    if (!this.checkmail(this.customer.email)) {
      return false;
    }
    if (!this.checkpassword(this.customer.password)) {
      return false;
    }

    console.log("end\n");
    return true;
  }

  checkpassword(pass: string): boolean {
    if (pass == null || !pass || pass === "" || !pass.trim()) {
      alert("Пароль не может быть пустым");
      return false;
    } else {
      return true;
    }
  }


  checkmail(mail: string): boolean {
    if (!/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(mail)) {
      alert("неправильно введена почта");
      return false;
    } else {
      return true;
    }
  }

  checkname(name: string): boolean {
    if (name == null || !name || name === "" || !name.trim()) {
      alert("Имя не может быть пустым");
      return false;
    } else if (/[0-9]/.test(name)) {
      alert("Имя не должно содержать цифр");
      return false;
    } else {
      return true;
    }
  }

  checknumber(number: string): boolean {
    if (number == null || number.trim().length < 11) {
      alert("Номер слишком короткий");
      return false;
    } else if (!(/^\d[\d\(\)\ -]{4,14}\d$/.test(number))) {
      alert("Некорректный логин");
      return false;
    } else {
      return true;
    }
  }
}
