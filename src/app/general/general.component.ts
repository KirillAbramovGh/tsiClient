import { Component, OnInit } from '@angular/core';
import {Article} from "../models/Article";
import {HttpClient} from "@angular/common/http";
import {Consts} from "../Consts";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  cards: Article[] = [
    {id:1, title: 'Article 1', text: 'This is card number 1'},
    {id:2, title: 'Article 2', text: 'This is card number 2'},
    {id:3, title: 'Article 3', text: 'This is card number 3'}
  ];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Article[]>(Consts.SERVER+Consts.ARTICLES)
      .subscribe((response)=>{
        this.cards = response;
      },
        (err: Error)=>{
        alert('Ошибка при отправке запроса');
        })
  }

}
