import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardComponent} from './card/card.component';
import { TitleComponent } from './title/title.component';
import { GeneralComponent } from './general/general.component';
import { ArticleComponent } from './article/article.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductComponent } from './product/product.component';
import { BasketComponent } from './basket/basket.component';
import { BasketItemComponent } from './basket-item/basket-item.component';
import { ProfileComponent } from './profile/profile.component';
import { EnterComponent } from './enter/enter.component';
import { RegComponent } from './reg/reg.component';
import { DeviceComponent } from './device/device.component';
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TitleComponent,
    GeneralComponent,
    ArticleComponent,
    CatalogComponent,
    ProductComponent,
    BasketComponent,
    BasketItemComponent,
    ProfileComponent,
    EnterComponent,
    RegComponent,
    DeviceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
