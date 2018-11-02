import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {RecipeCardComponent} from "./components/recipe-card/recipe-card.component";
import {HeaderComponent} from "./components/header/header.component";
import {HighlightDirective} from "./directives/highlight.directive";
import {RouterModule} from "@angular/router";
import {RecipesService} from "./services/recipes.service";
import {PurchasesService} from "./services/purchases.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./services/http-interceptor.service";

@NgModule ({
  declarations: [
    RecipeCardComponent,
    HeaderComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    RecipeCardComponent,
    HeaderComponent,
    HighlightDirective
  ],
  providers: [
    PurchasesService,
    RecipesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})

export class SharedModule {}
