import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Article} from "../models/Article";
import {Consts} from "../Consts";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  card!:Article;

  constructor(private activateRoute: ActivatedRoute,private http:HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Article>(Consts.SERVER+Consts.ARTICLES+'/'+this.activateRoute.snapshot.params['id'])
      .subscribe((response)=>this.card = response)
  }

}
