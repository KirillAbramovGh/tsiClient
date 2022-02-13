import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GeneralComponent} from "./general/general.component";
import {ArticleComponent} from "./article/article.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {BasketComponent} from "./basket/basket.component";
import {ProfileComponent} from "./profile/profile.component";
import {EnterComponent} from "./enter/enter.component";
import {RegComponent} from "./reg/reg.component";
import {DeviceComponent} from "./device/device.component";

const routes: Routes = [
  {path: '',component: GeneralComponent},
  {path: 'article/:id',component: ArticleComponent},
  {path: 'product/:id',component: DeviceComponent},
  {path: 'catalog',component: CatalogComponent},
  {path: 'basket',component: BasketComponent},
  {path: 'profile',component: ProfileComponent},
  {path: 'enter',component: EnterComponent},
  {path: 'auth',component: RegComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
