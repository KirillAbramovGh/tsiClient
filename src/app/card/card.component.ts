import {Component, Input, OnInit} from '@angular/core'
import {Article} from "../models/Article";

@Component({
  templateUrl: './card.component.html',
  selector: 'app-card',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input()
  article!: Article;

  title: string = 'Default title';

  ngOnInit(): void {

    //this.title = this.article.title;
  }
}
