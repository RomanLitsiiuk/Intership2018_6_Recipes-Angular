import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from "@angular/router";
import { RecipesService } from "./shared/services/recipes.service";
import { SharedModule } from "./shared/shared.module";
import {PurchasesService} from "./shared/services/purchases.service";

const routes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'favorites', loadChildren: './favorites/favorites.module#FavoritesModule'},
  {path: 'purchases', loadChildren: './purchases/purchases.module#PurchasesModule'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [RecipesService, PurchasesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
