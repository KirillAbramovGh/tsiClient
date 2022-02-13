import {Component, OnInit} from '@angular/core';
import {Product} from "../models/Product";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {Article} from "../models/Article";
import {Consts} from "../Consts";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products: Product[] = [];

  search: string = '';
  minPrice: number = 0;
  maxPrice: number = 0;
  companies: string = '';
  sort: string = '';
  apple: boolean = false;
  xiaomi: boolean = false;
  lenovo: boolean = false;
  asus: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
    this.search = localStorage.getItem('search') != null ? <string>localStorage.getItem('search') : '';
    this.sort = localStorage.getItem('sort') != null ? <string>localStorage.getItem('sort') : '';
    this.minPrice = localStorage.getItem('minPrice') != null ? <number><unknown>localStorage.getItem('minPrice') : 0;
    this.maxPrice = localStorage.getItem('maxPrice') != null ? <number><unknown>localStorage.getItem('maxPrice') : 0;
    this.apple = localStorage.getItem('apple') != null ? <boolean><unknown>localStorage.getItem('apple') : true;
    this.xiaomi = localStorage.getItem('xiaomi') != null ? <boolean><unknown>localStorage.getItem('xiaomi') : true;
    this.lenovo = localStorage.getItem('lenovo') != null ? <boolean><unknown>localStorage.getItem('lenovo') : true;
    this.asus = localStorage.getItem('asus') != null ? <boolean><unknown>localStorage.getItem('asus') : true;
    this.companies = '';
    console.log("init apple = " + this.apple + " xiaomi = " + this.xiaomi);
    if ("false" != <string><unknown>this.apple) {
      this.companies += "Apple";
      this.apple = true;
    } else {
      this.apple = false;
    }
    if ("false" != <string><unknown>this.xiaomi) {
      this.companies += "Xiaomi";
      this.xiaomi = true;
    } else {
      this.xiaomi = false;
    }
    if ("false" != <string><unknown>this.lenovo) {
      this.companies += "Lenovo";
      this.lenovo = true;
    } else {
      this.lenovo = false;
    }
    if ("false" != <string><unknown>this.asus) {
      this.companies += "Asus";
      this.asus = true;
    } else {
      this.asus = false;
    }
    this.change();
    console.log("after init apple = " + this.apple + " xiaomi = " + this.xiaomi);
    console.log("companies = " + this.companies);
    let params = new HttpParams()
      .set(Consts.ORDER_PARAM, 0)
      .set(Consts.SEARCH_PARAM, this.search)
      .set(Consts.MIN_PRICE_PARAM, this.minPrice)
      .set(Consts.MAX_PRICE_PARAM, this.maxPrice)
      .set(Consts.COMPANIES, this.companies)
      .set('sort', this.sort);
    this.http.get<Product[]>(Consts.SERVER + Consts.PRODUCTS, {params: params})
      .subscribe((response) => {
          console.log('response');
          this.products = response;
        },
        (err: Error) => {
          alert('Ошибка при отправке запроса');
        });

  }

  change() {
    console.log("apple = " + this.apple + " xiaomi = " + this.xiaomi);
    localStorage.setItem('apple', this.apple + '');
    localStorage.setItem('asus', this.asus + '');
    localStorage.setItem('lenovo', this.lenovo + '');
    localStorage.setItem('xiaomi', this.xiaomi + '');
  }

  reload() {
    console.log("apple = " + this.apple + " xiaomi = " + this.xiaomi);
    // alert('lenovo = '+this.lenovo);
    // alert('apple = '+this.apple);
    // alert('asus = '+this.asus);
    // alert('xiaomi = '+this.xiaomi);
    localStorage.setItem('search', this.search);
    localStorage.setItem('minPrice', this.minPrice + '');
    localStorage.setItem('maxPrice', this.maxPrice + '');
    localStorage.setItem('sort', this.sort);
    localStorage.setItem('apple', this.apple + '');
    localStorage.setItem('asus', this.asus + '');
    localStorage.setItem('lenovo', this.lenovo + '');
    localStorage.setItem('xiaomi', this.xiaomi + '');
    this.router.navigate(['/catalog'])
  }

}
