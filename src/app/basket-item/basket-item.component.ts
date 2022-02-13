import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/Product";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Consts} from "../Consts";

@Component({
  selector: '[app-basket-item]',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent implements OnInit {

  @Input('app-basket-item') product!: Product;

  constructor(private http: HttpClient, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
  }

  remove() {
    this.http.delete(Consts.DELETE_PRODUCT + "/" + this.product.id).subscribe((res) => {
      console.log("product deleted");
      this.router.navigate(['/basket'])
    });
  }

}
